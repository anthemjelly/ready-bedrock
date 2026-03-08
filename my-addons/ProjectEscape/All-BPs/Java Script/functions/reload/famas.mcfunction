#famas_fmj
tag @s[hasitem={item=ate:famas25,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:famas25,location=slot.weapon.offhand}] famas 25
give @s[hasitem={item=ate:famas25,location=slot.weapon.offhand}] ate:famas25k 1
clear @s[hasitem={item=ate:famas25,location=slot.weapon.offhand}] ate:famas25 0 1

#famas_ap
tag @s[hasitem={item=ate:famas25_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:famas25_ap,location=slot.weapon.offhand}] famas 25
give @s[hasitem={item=ate:famas25_ap,location=slot.weapon.offhand}] ate:famas25k 1
clear @s[hasitem={item=ate:famas25_ap,location=slot.weapon.offhand}] ate:famas25_ap 0 1

#famas_m855
tag @s[hasitem={item=ate:famas25_m855,location=slot.weapon.offhand}] add reload_m855
scoreboard players set @s[hasitem={item=ate:famas25_m855,location=slot.weapon.offhand}] famas 25
give @s[hasitem={item=ate:famas25_m855,location=slot.weapon.offhand}] ate:famas25k 1
clear @s[hasitem={item=ate:famas25_m855,location=slot.weapon.offhand}] ate:famas25_m855 0 1

#famas_m855a1
tag @s[hasitem={item=ate:famas25_m855a1,location=slot.weapon.offhand}] add reload_m855a1
scoreboard players set @s[hasitem={item=ate:famas25_m855a1,location=slot.weapon.offhand}] famas 25
give @s[hasitem={item=ate:famas25_m855a1,location=slot.weapon.offhand}] ate:famas25k 1
clear @s[hasitem={item=ate:famas25_m855a1,location=slot.weapon.offhand}] ate:famas25_m855a1 0 1

#famas_m995
tag @s[hasitem={item=ate:famas25_m995,location=slot.weapon.offhand}] add reload_m995
scoreboard players set @s[hasitem={item=ate:famas25_m995,location=slot.weapon.offhand}] famas 25
give @s[hasitem={item=ate:famas25_m995,location=slot.weapon.offhand}] ate:famas25k 1
clear @s[hasitem={item=ate:famas25_m995,location=slot.weapon.offhand}] ate:famas25_m995 0 1

title @s[scores={famas=0}] actionbar §4未找到可用弹匣
tag @s[scores={famas=1..999}] add allowReload