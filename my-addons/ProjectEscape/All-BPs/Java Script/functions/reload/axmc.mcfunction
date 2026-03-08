#axmc_5_fmj
tag @s[hasitem={item=ate:axmc5,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:axmc5,location=slot.weapon.offhand}] axmc 5
give @s[hasitem={item=ate:axmc5,location=slot.weapon.offhand}] ate:axmc5k 1
clear @s[hasitem={item=ate:axmc5,location=slot.weapon.offhand}] ate:axmc5 0 1

#axmc_5_ap
tag @s[hasitem={item=ate:axmc5_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:axmc5_ap,location=slot.weapon.offhand}] axmc 5
give @s[hasitem={item=ate:axmc5_ap,location=slot.weapon.offhand}] ate:axmc5k 1
clear @s[hasitem={item=ate:axmc5_ap,location=slot.weapon.offhand}] ate:axmc5_ap 0 1

title @s[scores={axmc=0}] actionbar §4未找到可用弹匣

tag @s[scores={axmc=1..999}] add allowReload