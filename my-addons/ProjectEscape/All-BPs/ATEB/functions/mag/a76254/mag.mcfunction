#100ammo
tag @s[hasitem={item=ate:ammo76254,location=slot.weapon.offhand,quantity=10..24}] add has76254
tag @s[hasitem={item=ate:ammo76254_7n1,location=slot.weapon.offhand,quantity=10..24}] add has762547n1
tag @s[hasitem={item=ate:ammo76254_7bt1,location=slot.weapon.offhand,quantity=10..24}] add has762547bt1
tag @s[hasitem={item=ate:ammo76254_snb,location=slot.weapon.offhand,quantity=10..24}] add has76254snb
tag @s[hasitem={item=ate:ammo76254_7n37,location=slot.weapon.offhand,quantity=10..24}] add has762547n37
tag @s[hasitem={item=ate:ammo76254_fmj,location=slot.weapon.offhand,quantity=10..24}] add has76254fmj
#
give @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254] ate:pkm100 1
title @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254] ate:ammo76254 0 10
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254] ate:pkm100k 0 1
#
give @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n1] ate:pkm100_7n1 1
title @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n1] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n1] ate:ammo76254_7n1 0 10
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n1] ate:pkm100k 0 1
#
give @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547bt1] ate:pkm100_7bt1 1
title @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547bt1] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547bt1] ate:ammo76254_7bt1 0 10
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547bt1] ate:pkm100k 0 1
##
give @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n37] ate:pkm100_7n37 1
title @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n37] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n37] ate:ammo76254_7n37 0 10
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has762547n37] ate:pkm100k 0 1
##
give @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254fmj] ate:pkm100_fmj 1
title @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254fmj] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254fmj] ate:ammo76254_fmj 0 10
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254fmj] ate:pkm100k 0 1
#
give @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254snb] ate:pkm100_snb 1
title @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254snb] actionbar 正在装填弹药...
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254snb] ate:ammo76254_snb 0 10
clear @s[hasitem={item=ate:pkm100k,location=slot.weapon.mainhand},tag=has76254snb] ate:pkm100k 0 1
#
#clear
tag @a remove has76254
tag @a remove has762547n1
tag @a remove has76254fmj
tag @a remove has762547n37
tag @a remove has762547bt1
tag @a remove has76254snb
#