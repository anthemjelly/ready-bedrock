#ump45_25_hs
tag @s[hasitem={item=ate:ump4525,location=slot.weapon.offhand}] add reload_hs
scoreboard players set @s[hasitem={item=ate:ump4525,location=slot.weapon.offhand}] ump45 25
give @s[hasitem={item=ate:ump4525,location=slot.weapon.offhand}] ate:ump4525k 1
clear @s[hasitem={item=ate:ump4525,location=slot.weapon.offhand}] ate:ump4525 0 1

#ump45_25_ap
tag @s[hasitem={item=ate:ump4525_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:ump4525_ap,location=slot.weapon.offhand}] ump45 25
give @s[hasitem={item=ate:ump4525_ap,location=slot.weapon.offhand}] ate:ump4525k 1
clear @s[hasitem={item=ate:ump4525_ap,location=slot.weapon.offhand}] ate:ump4525_ap 0 1
#ump45_25_rip
tag @s[hasitem={item=ate:ump4525_rip,location=slot.weapon.offhand}] add reload_rip
scoreboard players set @s[hasitem={item=ate:ump4525_rip,location=slot.weapon.offhand}] ump45 25
give @s[hasitem={item=ate:ump4525_rip,location=slot.weapon.offhand}] ate:ump4525k 1
clear @s[hasitem={item=ate:ump4525_rip,location=slot.weapon.offhand}] ate:ump4525_rip 0 1

title @s[scores={ump45=0}] actionbar §4未找到可用弹匣

tag @s[scores={ump45=1..999}] add allowReload