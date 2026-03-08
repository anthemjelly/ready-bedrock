#mp133_20_ap
tag @s[hasitem={item=ate:ammo1270,location=slot.weapon.offhand}] add reload_8.5mm鹿弹
scoreboard players set @s[hasitem={item=ate:ammo1270,location=slot.weapon.offhand}] mp133 5
clear @s[hasitem={item=ate:ammo1270,location=slot.weapon.offhand}] ate:ammo1270 0 1

#mp133_20_bp
tag @s[hasitem={item=ate:ammo1270_ap20,location=slot.weapon.offhand}] add reload_ap20
scoreboard players set @s[hasitem={item=ate:ammo1270_ap20,location=slot.weapon.offhand}] mp133 5
clear @s[hasitem={item=ate:ammo1270_ap20,location=slot.weapon.offhand}] ate:ammo1270_ap20 0 1

#mp133_20_ps
tag @s[hasitem={item=ate:ammo1270_j,location=slot.weapon.offhand}] add reload_箭形弹
scoreboard players set @s[hasitem={item=ate:ammo1270_j,location=slot.weapon.offhand}] mp133 5
clear @s[hasitem={item=ate:ammo1270_j,location=slot.weapon.offhand}] ate:ammo1270_j 0 1

title @s[scores={mp133=0}] actionbar §4未找到可用弹匣
title @s[scores={mp133=1..999}] actionbar §a装填完成
tag @s[scores={mp133=1..999}] add allowReload