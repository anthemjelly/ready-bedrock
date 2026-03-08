import {
    world,
    system
} from "@minecraft/server";

const playerPreviousPositions = new Map();

// 速度检测频率别调太快
const CHECK_INTERVAL = 5; // 这边是0.25秒检测
// 扣血冷却
const DAMAGE_COOLDOWN = 25; //这

const SPEED_THRESHOLD = 5; // 这里可以调超过多少块扣

// 扣血冷却时间存储
const playerDamageCooldown = new Map();

system.runInterval(() => {
    const players = world.getPlayers();

    for (const player of players) {
        // 如果你的骨折标签变了，你在这直接改就行
        if (!player.hasTag("bonex")) continue;

        const currentPos = player.location;
        const playerId = player.id;

        if (playerPreviousPositions.has(playerId)) {
            const lastPos = playerPreviousPositions.get(playerId);

            const dx = currentPos.x - lastPos.x;
            const dz = currentPos.z - lastPos.z;
            const distance = Math.sqrt(dx * dx + dz * dz);

            // 玩家每秒多少方块
            const speed = distance / (CHECK_INTERVAL * 0.05);

            // 扣血检测
            if (speed > SPEED_THRESHOLD) {
                if (!playerDamageCooldown.has(playerId) || playerDamageCooldown.get(playerId) <= 0) {
                    // 逻辑
                    player.runCommand("damage @s 1 entity_attack");
                    player.runCommand("playsound random.hurt @s ~ ~ ~ 1 1");


                    playerDamageCooldown.set(playerId, DAMAGE_COOLDOWN);
                } else {

                    playerDamageCooldown.set(playerId, playerDamageCooldown.get(playerId) - CHECK_INTERVAL);
                }
            }
        }

        playerPreviousPositions.set(playerId, {
            x: currentPos.x,
            y: currentPos.y,
            z: currentPos.z
        });
    }
}, CHECK_INTERVAL);

world.afterEvents.playerLeave.subscribe((event) => {
    const playerId = event.playerId;
    playerPreviousPositions.delete(playerId);
    playerDamageCooldown.delete(playerId);
});

world.afterEvents.playerSpawn.subscribe((event) => {
    const player = event.player;
    if (player.hasTag("bonex")) {
        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c[骨折状态] §f骨折了就别动了\"}]}");
    }
});


// 这是恐怖炸鸡腿给我写的，我感谢他一辈子