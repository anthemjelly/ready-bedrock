#m1911_10_hs
tag @s[hasitem={item=ate:m191110,location=slot.weapon.offhand}] add reload_hs
scoreboard players set @s[hasitem={item=ate:m191110,location=slot.weapon.offhand}] m1911 10
give @s[hasitem={item=ate:m191110,location=slot.weapon.offhand}] ate:m191110k 1
clear @s[hasitem={item=ate:m191110,location=slot.weapon.offhand}] ate:m191110 0 1

#m1911_10_ap
tag @s[hasitem={item=ate:m191110_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:m191110_ap,location=slot.weapon.offhand}] m1911 10
give @s[hasitem={item=ate:m191110_ap,location=slot.weapon.offhand}] ate:m191110k 1
clear @s[hasitem={item=ate:m191110_ap,location=slot.weapon.offhand}] ate:m191110_ap 0 1
#m1911_10_rip
tag @s[hasitem={item=ate:m191110_rip,location=slot.weapon.offhand}] add reload_rip
scoreboard players set @s[hasitem={item=ate:m191110_rip,location=slot.weapon.offhand}] m1911 10
give @s[hasitem={item=ate:m191110_rip,location=slot.weapon.offhand}] ate:m191110k 1
clear @s[hasitem={item=ate:m191110_rip,location=slot.weapon.offhand}] ate:m191110_rip 0 1

title @s[scores={m1911=0}] actionbar §4未找到可用弹匣

tag @s[scores={m1911=1..999}] add allowReload