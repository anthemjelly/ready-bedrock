#ar30a1_5_fmj
tag @s[hasitem={item=ate:ar30a15,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:ar30a15,location=slot.weapon.offhand}] ar30a1 5
give @s[hasitem={item=ate:ar30a15,location=slot.weapon.offhand}] ate:ar30a15k 1
clear @s[hasitem={item=ate:ar30a15,location=slot.weapon.offhand}] ate:ar30a15 0 1

#ar30a1_5_ap
tag @s[hasitem={item=ate:ar30a15_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:ar30a15_ap,location=slot.weapon.offhand}] ar30a1 5
give @s[hasitem={item=ate:ar30a15_ap,location=slot.weapon.offhand}] ate:ar30a15k 1
clear @s[hasitem={item=ate:ar30a15_ap,location=slot.weapon.offhand}] ate:ar30a15_ap 0 1

title @s[scores={ar30a1=0}] actionbar §4未找到可用弹匣

tag @s[scores={ar30a1=1..999}] add allowReload