#dp12_20_ap
tag @s[hasitem={item=ate:ammo1270,location=slot.weapon.offhand,quantity=3..24}] add reload_8.5mm鹿弹
scoreboard players set @s[hasitem={item=ate:ammo1270,location=slot.weapon.offhand,quantity=3..24}] dp12 14
clear @s[hasitem={item=ate:ammo1270,location=slot.weapon.offhand,quantity=3..24}] ate:ammo1270 0 3

#dp12_20_bp
tag @s[hasitem={item=ate:ammo1270_ap20,location=slot.weapon.offhand,quantity=3..24}] add reload_ap20
scoreboard players set @s[hasitem={item=ate:ammo1270_ap20,location=slot.weapon.offhand,quantity=3..24}] dp12 14
clear @s[hasitem={item=ate:ammo1270_ap20,location=slot.weapon.offhand,quantity=3..24}] ate:ammo1270_ap20 0 3

#dp12_20_ps
tag @s[hasitem={item=ate:ammo1270_j,location=slot.weapon.offhand,quantity=3..24}] add reload_箭形弹
scoreboard players set @s[hasitem={item=ate:ammo1270_j,location=slot.weapon.offhand,quantity=3..24}] dp12 14
clear @s[hasitem={item=ate:ammo1270_j,location=slot.weapon.offhand,quantity=3..24}] ate:ammo1270_j 0 3

title @s[scores={dp12=0}] actionbar §4未找到可用弹匣
title @s[scores={dp12=1..999}] actionbar §a装填完成
tag @s[scores={dp12=1..999}] add allowReload