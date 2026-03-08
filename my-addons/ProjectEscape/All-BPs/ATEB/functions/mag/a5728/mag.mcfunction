tag @s[hasitem={item=ate:ammo5728,location=slot.weapon.offhand,quantity=5..24}] add has5728
tag @s[hasitem={item=ate:ammo5728_ss190,location=slot.weapon.offhand,quantity=5..24}] add has5728ss190
tag @s[hasitem={item=ate:ammo5728_ss198,location=slot.weapon.offhand,quantity=5..24}] add has5728ss198
tag @s[hasitem={item=ate:ammo5728_r37f,location=slot.weapon.offhand,quantity=5..24}] add has5728r37f
#
give @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728] ate:p9050 1
title @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728] ate:ammo5728 0 5
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728] ate:p9050k 0 1
#
give @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss190] ate:p9050_ss190 1
title @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss190] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss190] ate:ammo5728_ss190 0 5
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss190] ate:p9050k 0 1
#
give @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss198] ate:p9050_ss198 1
title @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss198] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss198] ate:ammo5728_ss198 0 5
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728ss198] ate:p9050k 0 1
#
give @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728r37f] ate:p9050_r37f 1
title @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728r37f] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728r37f] ate:ammo5728_r37f 0 5
clear @s[hasitem={item=ate:p9050k,location=slot.weapon.mainhand},tag=has5728r37f] ate:p9050k 0 1
##clear
tag @a remove has5728
tag @a remove has5728ss190
tag @a remove has5728ss198
tag @a remove has5728r37f