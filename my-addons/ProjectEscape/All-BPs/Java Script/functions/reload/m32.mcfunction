#m32_20_ap
tag @s[hasitem={item=ate:ammo4046,location=slot.weapon.offhand}] add reload_m386
scoreboard players set @s[hasitem={item=ate:ammo4046,location=slot.weapon.offhand}] m32 6
clear @s[hasitem={item=ate:ammo4046,location=slot.weapon.offhand}] ate:ammo4046 0 1

#m32_20_bp
tag @s[hasitem={item=ate:ammo4046_m441,location=slot.weapon.offhand}] add reload_m441
scoreboard players set @s[hasitem={item=ate:ammo4046_m441,location=slot.weapon.offhand}] m32 6
clear @s[hasitem={item=ate:ammo4046_m441,location=slot.weapon.offhand}] ate:ammo4046_m441 0 1

#m32_20_ps
tag @s[hasitem={item=ate:ammo4046_m576,location=slot.weapon.offhand}] add reload_m576
scoreboard players set @s[hasitem={item=ate:ammo4046_m576,location=slot.weapon.offhand}] m32 6
clear @s[hasitem={item=ate:ammo4046_m576,location=slot.weapon.offhand}] ate:ammo4046_m576 0 1

title @s[scores={m32=0}] actionbar §4未找到可用弹匣
title @s[scores={m32=1..999}] actionbar §a装填完成
tag @s[scores={m32=1..999}] add allowReload