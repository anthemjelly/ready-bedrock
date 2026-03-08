kill @e[family=mpl]
enchant @e[type=!player,hasitem={item=bow,location=slot.weapon.mainhand}] vanishing 1
execute as @e[family=npc] at @s run tp @s ~~~
execute as @e[type=ate:time] at @s run effect @a[r=3] blindness 1 10 true
#web
execute as @a at @s  if block ~~~ web run effect @s wither 25 1 true
###player
execute as @a at @s unless entity @s[y=~1.7,dy=0.1] run tag @s add sneak
execute as @a at @s if entity @s[y=~1.7,dy=0.1] run tag @s remove sneak
scoreboard players remove @a[scores={painkillers=1..4000}] painkillers 1
scoreboard players remove @a[scores={physical=1..14000}] physical 1
effect @a[tag=!bonex,tag=!sneak,tag=!pz] clear slowness 
effect @e[tag=pz,scores={physical=0}] slowness 1 0 true
tag @a remove pz
#"SMS"
tp @a[name=J0suke1385] 5 64 1
tp @a[name=MinGongzou] 5 64 1
#"O"
execute as @e[type=ate:box] at @s if block ~~~ powder_snow run tp @s ~~0.2~
execute as @e[type=ate:drone] at @s if blocks  ~~-3~ ~~~ -525.51 -63.00 -482.62 all run tp @s ~~-1~
#
execute at @e[type=ate:rpg_bullet] run particle minecraft:egg_destroy_emitter ~ ~ ~