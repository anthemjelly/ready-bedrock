tag @s[hasitem={item=ate:ammo76225,location=slot.weapon.offhand,quantity=7..24}] add has76225
#
give @s[hasitem={item=ate:ppsh4171k,location=slot.weapon.mainhand},tag=has76225] ate:ppsh4171 1
title @s[hasitem={item=ate:ppsh4171k,location=slot.weapon.mainhand},tag=has76225] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:ppsh4171k,location=slot.weapon.mainhand},tag=has76225] ate:ammo76225 0 7
clear @s[hasitem={item=ate:ppsh4171k,location=slot.weapon.mainhand},tag=has76225] ate:ppsh4171k 0 1
##clear
tag @a remove has76225