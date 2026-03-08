#m1894_95_lfnp
tag @s[hasitem={item=ate:ammo44,location=slot.weapon.offhand}] add reload_lfnp
scoreboard players set @s[hasitem={item=ate:ammo44,location=slot.weapon.offhand}] m1894 8
clear @s[hasitem={item=ate:ammo44,location=slot.weapon.offhand}] ate:ammo44 0 1

#m1894_95_jsp
tag @s[hasitem={item=ate:ammo44_jsp,location=slot.weapon.offhand}] add reload_jsp
scoreboard players set @s[hasitem={item=ate:ammo44_jsp,location=slot.weapon.offhand}] m1894 8
clear @s[hasitem={item=ate:ammo44_jsp,location=slot.weapon.offhand}] ate:ammo44_jsp 0 1

#m1894_95_sjhp
tag @s[hasitem={item=ate:ammo44_sjhp,location=slot.weapon.offhand}] add reload_sjhp
scoreboard players set @s[hasitem={item=ate:ammo44_sjhp,location=slot.weapon.offhand}] m1894 8
clear @s[hasitem={item=ate:ammo44_sjhp,location=slot.weapon.offhand}] ate:ammo44_sjhp 0 1

title @s[scores={m1894=0}] actionbar §4未找到可用弹匣
title @s[scores={m1894=1..999}] actionbar §a装填完成
tag @s[scores={m1894=1..999}] add allowReload