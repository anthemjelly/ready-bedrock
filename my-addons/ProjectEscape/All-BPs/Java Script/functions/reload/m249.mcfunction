#m249_50_fmj
tag @s[hasitem={item=ate:m24950,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:m24950,location=slot.weapon.offhand}] m249 50
give @s[hasitem={item=ate:m24950,location=slot.weapon.offhand}] ate:m24950k 1
clear @s[hasitem={item=ate:m24950,location=slot.weapon.offhand}] ate:m24950 0 1

#m249_50_ap
tag @s[hasitem={item=ate:m24950_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:m24950_ap,location=slot.weapon.offhand}] m249 50
give @s[hasitem={item=ate:m24950_ap,location=slot.weapon.offhand}] ate:m24950k 1
clear @s[hasitem={item=ate:m24950_ap,location=slot.weapon.offhand}] ate:m24950_ap 0 1

#m249_50_m855
tag @s[hasitem={item=ate:m24950_m855,location=slot.weapon.offhand}] add reload_m855
scoreboard players set @s[hasitem={item=ate:m24950_m855,location=slot.weapon.offhand}] m249 50
give @s[hasitem={item=ate:m24950_m855,location=slot.weapon.offhand}] ate:m24950k 1
clear @s[hasitem={item=ate:m24950_m855,location=slot.weapon.offhand}] ate:m24950_m855 0 1

#m249_50_m855a1
tag @s[hasitem={item=ate:m24950_m855a1,location=slot.weapon.offhand}] add reload_m855a1
scoreboard players set @s[hasitem={item=ate:m24950_m855a1,location=slot.weapon.offhand}] m249 50
give @s[hasitem={item=ate:m24950_m855a1,location=slot.weapon.offhand}] ate:m24950k 1
clear @s[hasitem={item=ate:m24950_m855a1,location=slot.weapon.offhand}] ate:m24950_m855a1 0 1

#m249_50_m995
tag @s[hasitem={item=ate:m24950_m995,location=slot.weapon.offhand}] add reload_m995
scoreboard players set @s[hasitem={item=ate:m24950_m995,location=slot.weapon.offhand}] m249 50
give @s[hasitem={item=ate:m24950_m995,location=slot.weapon.offhand}] ate:m24950k 1
clear @s[hasitem={item=ate:m24950_m995,location=slot.weapon.offhand}] ate:m24950_m995 0 1

title @s[scores={m249=0}] actionbar §4未找到可用弹匣
tag @s[scores={m249=1..999}] add allowReload