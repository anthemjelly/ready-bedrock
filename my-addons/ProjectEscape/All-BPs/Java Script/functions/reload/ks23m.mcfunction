#ks23m_20_ap
tag @s[hasitem={item=ate:ammo2375,location=slot.weapon.offhand}] add reload_破片-10霰弹
scoreboard players set @s[hasitem={item=ate:ammo2375,location=slot.weapon.offhand}] ks23m 3
clear @s[hasitem={item=ate:ammo2375,location=slot.weapon.offhand}] ate:ammo2375 0 1

#ks23m_20_bp
tag @s[hasitem={item=ate:ammo2375_ap,location=slot.weapon.offhand}] add reload_路障独头弹
scoreboard players set @s[hasitem={item=ate:ammo2375_ap,location=slot.weapon.offhand}] ks23m 3
clear @s[hasitem={item=ate:ammo2375_ap,location=slot.weapon.offhand}] ate:ammo2375_ap 0 1

#ks23m_20_ps
tag @s[hasitem={item=ate:ammo2375_red,location=slot.weapon.offhand}] add reload_红星闪光弹
scoreboard players set @s[hasitem={item=ate:ammo2375_red,location=slot.weapon.offhand}] ks23m 3
clear @s[hasitem={item=ate:ammo2375_red,location=slot.weapon.offhand}] ate:ammo2375_red 0 1

title @s[scores={ks23m=0}] actionbar §4未找到可用弹药
title @s[scores={ks23m=1..999}] actionbar §a装填完成
tag @s[scores={ks23m=1..999}] add allowReload