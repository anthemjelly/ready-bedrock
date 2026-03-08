#mk18_5_fmj
tag @s[hasitem={item=ate:mk185,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:mk185,location=slot.weapon.offhand}] mk18 5
give @s[hasitem={item=ate:mk185,location=slot.weapon.offhand}] ate:mk185k 1
clear @s[hasitem={item=ate:mk185,location=slot.weapon.offhand}] ate:mk185 0 1

#mk18_5_ap
tag @s[hasitem={item=ate:mk185_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:mk185_ap,location=slot.weapon.offhand}] mk18 5
give @s[hasitem={item=ate:mk185_ap,location=slot.weapon.offhand}] ate:mk185k 1
clear @s[hasitem={item=ate:mk185_ap,location=slot.weapon.offhand}] ate:mk185_ap 0 1

title @s[scores={mk18=0}] actionbar §4未找到可用弹匣

tag @s[scores={mk18=1..999}] add allowReload