#ax50_5_hp
tag @s[hasitem={item=ate:ax505,location=slot.weapon.offhand}] add reload_hp
scoreboard players set @s[hasitem={item=ate:ax505,location=slot.weapon.offhand}] ax50 5
give @s[hasitem={item=ate:ax505,location=slot.weapon.offhand}] ate:ax505k 1
clear @s[hasitem={item=ate:ax505,location=slot.weapon.offhand}] ate:ax505 0 1

#ax50_5_m21
tag @s[hasitem={item=ate:ax505_m21,location=slot.weapon.offhand}] add reload_m21
scoreboard players set @s[hasitem={item=ate:ax505_m21,location=slot.weapon.offhand}] ax50 5
give @s[hasitem={item=ate:ax505_m21,location=slot.weapon.offhand}] ate:ax505k 1
clear @s[hasitem={item=ate:ax505_m21,location=slot.weapon.offhand}] ate:ax505_m21 0 1

#ax50_5_slap
tag @s[hasitem={item=ate:ax505_slap,location=slot.weapon.offhand}] add reload_slap
scoreboard players set @s[hasitem={item=ate:ax505_slap,location=slot.weapon.offhand}] ax50 5
give @s[hasitem={item=ate:ax505_slap,location=slot.weapon.offhand}] ate:ax505k 1
clear @s[hasitem={item=ate:ax505_slap,location=slot.weapon.offhand}] ate:ax505_slap 0 1

title @s[scores={ax50=0}] actionbar §4未找到可用弹匣

tag @s[scores={ax50=1..999}] add allowReload