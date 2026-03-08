#ak101_fmj
tag @s[hasitem={item=ate:ak10130,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:ak10130,location=slot.weapon.offhand}] ak101 30
give @s[hasitem={item=ate:ak10130,location=slot.weapon.offhand}] ate:ak10130k 1
clear @s[hasitem={item=ate:ak10130,location=slot.weapon.offhand}] ate:ak10130 0 1

#ak101_ap
tag @s[hasitem={item=ate:ak10130_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:ak10130_ap,location=slot.weapon.offhand}] ak101 30
give @s[hasitem={item=ate:ak10130_ap,location=slot.weapon.offhand}] ate:ak10130k 1
clear @s[hasitem={item=ate:ak10130_ap,location=slot.weapon.offhand}] ate:ak10130_ap 0 1

#ak101_m855
tag @s[hasitem={item=ate:ak10130_m855,location=slot.weapon.offhand}] add reload_m855
scoreboard players set @s[hasitem={item=ate:ak10130_m855,location=slot.weapon.offhand}] ak101 30
give @s[hasitem={item=ate:ak10130_m855,location=slot.weapon.offhand}] ate:ak10130k 1
clear @s[hasitem={item=ate:ak10130_m855,location=slot.weapon.offhand}] ate:ak10130_m855 0 1

#ak101_m855a1
tag @s[hasitem={item=ate:ak10130_m855a1,location=slot.weapon.offhand}] add reload_m855a1
scoreboard players set @s[hasitem={item=ate:ak10130_m855a1,location=slot.weapon.offhand}] ak101 30
give @s[hasitem={item=ate:ak10130_m855a1,location=slot.weapon.offhand}] ate:ak10130k 1
clear @s[hasitem={item=ate:ak10130_m855a1,location=slot.weapon.offhand}] ate:ak10130_m855a1 0 1

#ak101_m995
tag @s[hasitem={item=ate:ak10130_m995,location=slot.weapon.offhand}] add reload_m995
scoreboard players set @s[hasitem={item=ate:ak10130_m995,location=slot.weapon.offhand}] ak101 30
give @s[hasitem={item=ate:ak10130_m995,location=slot.weapon.offhand}] ate:ak10130k 1
clear @s[hasitem={item=ate:ak10130_m995,location=slot.weapon.offhand}] ate:ak10130_m995 0 1

title @s[scores={ak101=0}] actionbar §4未找到可用弹匣
tag @s[scores={ak101=1..999}] add allowReload