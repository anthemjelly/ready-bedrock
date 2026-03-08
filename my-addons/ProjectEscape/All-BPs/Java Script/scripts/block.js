import { system, world } from "@minecraft/server";

const blockConfigs = {
    "ate:weapon_case": "mbox",
    "ate:ammo_case": "ammo_case",
    "ate:medical_kit": "medical_kit",
    "ate:pccase": "pccase",
    "ate:weapon_case_std": "weapon_case_std"
};
world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
    const block = event.block;
    const blockTypeId = block.typeId;
    const player = event.player;

    if (blockTypeId in blockConfigs) {
        event.cancel = true;
        system.run(() => {
            const blockLocation = block.location;   // 获取玩家的朝向
            const playerRotation = player.getRotation();
            let direction = "";
            let yaw = playerRotation.y;
            if (yaw < 0) { yaw += 360; }
            switch (true) {
                case (yaw >= 315 || yaw < 45): direction = "180_degrees"; break;
                case (yaw >= 45 && yaw < 135): direction = "270_degrees"; break;
                case (yaw >= 135 && yaw < 225): direction = "0_degrees"; break;
                case (yaw >= 225 && yaw < 315): direction = "90_degrees"; break;
            }
            const dimension = block.dimension;
            const a = JSON.stringify(blockConfigs[blockTypeId])
            const zl = `structure load ${a} ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} ${direction}`;
            switch (blockTypeId) {
                case "ate:weapon_case":
                    player.runCommand(zl);
                    dimension.spawnEntity("ate:mpg", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 });
                    system.runTimeout(() => { dimension.spawnEntity("ate:mpa", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 }); }, 10);
                    system.runTimeout(() => { dimension.spawnEntity("ate:mpa", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 }); }, 20);
                    system.runTimeout(() => { dimension.spawnEntity("ate:mpc", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 }); }, 30);
                    break;
                case "ate:ammo_case":
                    player.runCommand(zl);
                    dimension.spawnEntity("ate:mpammo", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 });
                    break;
                case "ate:medical_kit":
                    player.runCommand(zl);
                    dimension.spawnEntity("ate:mpm", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 });
                    break;
                case "ate:pccase":
                    player.runCommand(zl);
                    dimension.spawnEntity("ate:mpc", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 });
                    break;
                case "ate:weapon_case_std":
                    player.runCommand(zl);
                    dimension.spawnEntity("ate:mpa", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 });
                    system.runTimeout(() => { dimension.spawnEntity("ate:mpa", { x: blockLocation.x + 0.5, y: blockLocation.y + 1, z: blockLocation.z + 0.5 }); }, 10);
                    break;
                default: world.sendMessage("9");
                    break;
            }


        });
    }
});