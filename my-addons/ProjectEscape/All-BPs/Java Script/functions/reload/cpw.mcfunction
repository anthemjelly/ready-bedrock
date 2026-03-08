#cpw_sb193
tag @s[hasitem={item=ate:cpw30,location=slot.weapon.offhand}] add reload_sb
scoreboard players set @s[hasitem={item=ate:cpw30,location=slot.weapon.offhand}] cpw 30
give @s[hasitem={item=ate:cpw30,location=slot.weapon.offhand}] ate:cpw30k 1
clear @s[hasitem={item=ate:cpw30,location=slot.weapon.offhand}] ate:cpw30 0 1

#cpw_ss190
tag @s[hasitem={item=ate:cpw30_ss190,location=slot.weapon.offhand}] add reload_ss190
scoreboard players set @s[hasitem={item=ate:cpw30_ss190,location=slot.weapon.offhand}] cpw 30
give @s[hasitem={item=ate:cpw30_ss190,location=slot.weapon.offhand}] ate:cpw30k 1
clear @s[hasitem={item=ate:cpw30_ss190,location=slot.weapon.offhand}] ate:cpw30_ss190 0 1

#cpw_ss198
tag @s[hasitem={item=ate:cpw30_ss198,location=slot.weapon.offhand}] add reload_ss198
scoreboard players set @s[hasitem={item=ate:cpw30_ss198,location=slot.weapon.offhand}] cpw 30
give @s[hasitem={item=ate:cpw30_ss198,location=slot.weapon.offhand}] ate:cpw30k 1
clear @s[hasitem={item=ate:cpw30_ss198,location=slot.weapon.offhand}] ate:cpw30_ss198 0 1
#cpw_r37f
tag @s[hasitem={item=ate:cpw30_r37f,location=slot.weapon.offhand}] add reload_r37f
scoreboard players set @s[hasitem={item=ate:cpw30_r37f,location=slot.weapon.offhand}] cpw 30
give @s[hasitem={item=ate:cpw30_r37f,location=slot.weapon.offhand}] ate:cpw30k 1
clear @s[hasitem={item=ate:cpw30_r37f,location=slot.weapon.offhand}] ate:cpw30_r37f 0 1

title @s[scores={cpw=0}] actionbar §4未找到可用弹匣
tag @s[scores={cpw=1..999}] add allowReload