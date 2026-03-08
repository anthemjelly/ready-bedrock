import {
    system,
    world
} from '@minecraft/server';


world.beforeEvents.worldInitialize.subscribe(initEvent => {


    initEvent.itemComponentRegistry.registerCustomComponent('ate:bd', {
        onConsume: e => {

            e.source.removeEffect("minecraft:wither");


        },
    });



    initEvent.itemComponentRegistry.registerCustomComponent('ate:z7', {
        onConsume: e => {
            e.source.addEffect("minecraft:regeneration", 1440, {
                amplifier: 1
            });

        },


    });


    initEvent.itemComponentRegistry.registerCustomComponent('ate:windoil', {
        onConsume: e => {
            e.source.addEffect("minecraft:strength", 600, {
                amplifier: 3
            });

        },


    });





    initEvent.itemComponentRegistry.registerCustomComponent('ate:yb3', {
        onConsume: e => {
            e.source.addEffect("minecraft:regeneration", 15, {
                amplifier: 10
            });
            e.source.removeEffect("minecraft:wither");
            e.source.removeEffect("minecraft:poison");

        },


    });

    initEvent.itemComponentRegistry.registerCustomComponent('ate:yb1', {
        onConsume: e => {
            e.source.addEffect("minecraft:regeneration", 40, {
                amplifier: 2
            });

        },


    });


    initEvent.itemComponentRegistry.registerCustomComponent('ate:yb2', {
        onConsume: e => {
            e.source.addEffect("minecraft:regeneration", 8, {
                amplifier: 6
            });

        },


    });






    initEvent.itemComponentRegistry.registerCustomComponent('gun:a919mag', {


        onUse: e => {
            e.source.runCommand("function mag/a919/mag");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('gun:a76225mag', {


        onUse: e => {
            e.source.runCommand("function mag/a76225/mag");
        },

    });





    initEvent.itemComponentRegistry.registerCustomComponent('gun:a76239mag', {


        onUse: e => {
            e.source.runCommand("function mag/a76239/mag");
        },

    });








    initEvent.itemComponentRegistry.registerCustomComponent('gun:a76251mag', {


        onUse: e => {
            e.source.runCommand("function mag/a76251/mag");
        },

    });






    initEvent.itemComponentRegistry.registerCustomComponent('gun:a76254mag', {


        onUse: e => {
            e.source.runCommand("function mag/a76254/mag");
        },

    });



    initEvent.itemComponentRegistry.registerCustomComponent('gun:a55645mag', {


        onUse: e => {
            e.source.runCommand("function mag/a55645/mag");
        },

    });





    initEvent.itemComponentRegistry.registerCustomComponent('gun:a5728mag', {


        onUse: e => {
            e.source.runCommand("function mag/a5728/mag");
        },

    });

    initEvent.itemComponentRegistry.registerCustomComponent('gun:a1270mag', {


        onUse: e => {
            e.source.runCommand("function mag/a1270/mag");
        },

    });




    initEvent.itemComponentRegistry.registerCustomComponent('gun:araremag', {


        onUse: e => {
            e.source.runCommand("function mag/arare/mag");
        },

    });



    initEvent.itemComponentRegistry.registerCustomComponent('gun:a5842mag', {


        onUse: e => {
            e.source.runCommand("function mag/a5842/mag");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('gun:a54539mag', {


        onUse: e => {
            e.source.runCommand("function mag/a54539/mag");
        },

    });

    initEvent.itemComponentRegistry.registerCustomComponent('ate:physical', {


        onConsume: e => {
            e.source.runCommand("function m/physical");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('ate:painkillers1', {


        onConsume: e => {
            e.source.runCommand("function m/painkillers1");
        },

    });

    initEvent.itemComponentRegistry.registerCustomComponent('ate:painkillers2', {


        onConsume: e => {
            e.source.runCommand("function m/painkillers2");
        },

    });
    initEvent.itemComponentRegistry.registerCustomComponent('ate:painkillers3', {


        onConsume: e => {
            e.source.runCommand("function m/painkillers3");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('ate:figbox', {


        onUse: e => {
            e.source.runCommand("loot replace entity @s slot.weapon.mainhand 0 loot ate_fig");
        },

    });

    initEvent.itemComponentRegistry.registerCustomComponent('zbj:a', {


        onUse: e => {
            e.source.runCommand("function zbj1");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('zbj:b', {


        onUse: e => {
            e.source.runCommand("function zbj2");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('zbj:c', {


        onUse: e => {
            e.source.runCommand("function zbj3");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('zbj:d', {


        onUse: e => {
            e.source.runCommand("function zbj4");
        },

    });



    initEvent.itemComponentRegistry.registerCustomComponent('ate:ssb', {


        onConsume: e => {
            e.source.runCommand("function m/ssb");
        },

    });


    initEvent.itemComponentRegistry.registerCustomComponent('gun:rpg', {


        onUse: e => {
            e.source.runCommand("replaceitem entity @s slot.weapon.mainhand 0 ate:rpgk");
        },

    });





});