#vector45_30_hs
tag @s[hasitem={item=ate:vector4530,location=slot.weapon.offhand}] add reload_hs
scoreboard players set @s[hasitem={item=ate:vector4530,location=slot.weapon.offhand}] vector45 30
give @s[hasitem={item=ate:vector4530,location=slot.weapon.offhand}] ate:vector4530k 1
clear @s[hasitem={item=ate:vector4530,location=slot.weapon.offhand}] ate:vector4530 0 1

#vector45_30_ap
tag @s[hasitem={item=ate:vector4530_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:vector4530_ap,location=slot.weapon.offhand}] vector45 30
give @s[hasitem={item=ate:vector4530_ap,location=slot.weapon.offhand}] ate:vector4530k 1
clear @s[hasitem={item=ate:vector4530_ap,location=slot.weapon.offhand}] ate:vector4530_ap 0 1
#vector45_30_rip
tag @s[hasitem={item=ate:vector4530_rip,location=slot.weapon.offhand}] add reload_rip
scoreboard players set @s[hasitem={item=ate:vector4530_rip,location=slot.weapon.offhand}] vector45 30
give @s[hasitem={item=ate:vector4530_rip,location=slot.weapon.offhand}] ate:vector4530k 1
clear @s[hasitem={item=ate:vector4530_rip,location=slot.weapon.offhand}] ate:vector4530_rip 0 1

title @s[scores={vector45=0}] actionbar §4未找到可用弹匣
tag @s[scores={vector45=1..999}] add allowReload