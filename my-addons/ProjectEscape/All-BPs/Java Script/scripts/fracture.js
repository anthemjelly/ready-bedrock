import { system, world } from "@minecraft/server";

const fractureHealth = 6; //骨折血量
function readPlayerHp(player) {
    try {
        const hc = player.getComponent("minecraft:health") || player.getComponent("health");
        if (!hc) return NaN;
        const raw = hc.currentvalue ?? hc.currentValue ?? hc.currentHealth ?? hc.current ?? hc.value ??
            (typeof hc.getValue === 'function' ? hc.getValue() : undefined) ??
            (typeof hc.getCurrent === 'function' ? hc.getCurrent() : undefined) ??
            (typeof hc.getCurrentValue === 'function' ? hc.getCurrentValue() : undefined);
        const hp = typeof raw === 'string' ? parseFloat(raw) : Number(raw);
        return isFinite(hp) ? hp : NaN;
    } catch (e) { return NaN; }
}

function fracturefunction(player) {
    try {
        const hp = readPlayerHp(player);
        if (!isFinite(hp)) return;
        if (hp <= fractureHealth && !player.hasTag('bonex')) player.runCommand(`tag ${player.name} add bonex`);
    } catch (e) { }
}

const candidateEvents = [    //受伤事件
    'beforeEntityHurt', 'entityHurt', 'entityDamaged', 'entityDamage', 'entityHit',
    'beforeLivingEntityHurt', 'playerHurt', 'playerDamage', 'hurt', 'damage', 'beforeDamage', 'entityHurtEvent'
];

let subscribed = false;
for (const evName of candidateEvents) {
    if (world.afterEvents && world.afterEvents[evName] && typeof world.afterEvents[evName].subscribe === 'function') {
        try {
            world.afterEvents[evName].subscribe((ev) => {
                try {
                    const victim = ev.hurtEntity || ev.entity || ev.player || ev.source || ev.damagedEntity || ev.victim || ev.victimEntity || ev.damaged || ev.target;
                    if (victim && victim.id) fracturefunction(victim);
                } catch (e) { }
            });
            subscribed = true;
            // world.sendMessage(`受伤事件： ${evName} `);
            break;
        } catch (e) { }
    }
}