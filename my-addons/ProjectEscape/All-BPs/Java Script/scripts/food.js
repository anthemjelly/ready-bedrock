import { world, system } from "@minecraft/server";
//物品使用完成事件
world.afterEvents.itemCompleteUse.subscribe((event) => {
    const item = event.itemStack;
    const player = event.source;
    if (item && (item.typeId === "ate:wine" || item.typeId === "ate:red_wine")) {
        try {
            //player.addEffect("药水效果", 时间(tick), { amplifier: 等级, showParticles: 药水粒子 })
            player.addEffect("strength", 120 * 20, { amplifier: 1, showParticles: true });
            player.addEffect("haste", 120 * 20, { amplifier: 1, showParticles: true });
            player.addEffect("regeneration", 5 * 20, { amplifier: 1, showParticles: true });
            system.runTimeout(() => { player.addEffect("nausea", 5 * 20, { amplifier: 4, showParticles: true }); }, 100)
        } catch (error) { console.warn(`给玩家应用效果时出错: ${error}`); }
    }
});