import { system, world } from '@minecraft/server';

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ate_tomato_test:trigger', {
        onRandomTick: e => {
            const growthChance = 1 / 5;
            if (Math.random() > growthChance) return;

            const growth = e.block.permutation.getState("pa:growth");
            e.block.setPermutation(
                e.block.permutation.withState("pa:growth", growth + 1)
            );
        },
        onPlayerInteract: e => {
            if (!e.player) return;

            const equippable = e.player.getComponent("minecraft:equippable");
            if (!equippable) return;

            const mainhand = equippable.getEquipmentSlot("Mainhand");
            if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
                return;

            let growth = e.block.permutation.getState("pa:growth");

            if (growth >= 2) return;

            growth += 1;
            e.block.setPermutation(
                e.block.permutation.withState("pa:growth", growth)
            );

            if (mainhand.amount > 1) mainhand.amount--;
            else mainhand.setItem(undefined);

            const effectLocation = e.block.center();
            e.dimension.playSound("item.bone_meal.use", effectLocation);
            e.dimension.spawnParticle(
                "minecraft:crop_growth_emitter",
                effectLocation
            );
        },
    });

});
