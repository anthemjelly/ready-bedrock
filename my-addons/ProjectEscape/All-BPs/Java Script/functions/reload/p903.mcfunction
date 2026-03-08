#p90_sb193
tag @s[hasitem={item=ate:p9050,location=slot.weapon.offhand}] add reload_sb
scoreboard players set @s[hasitem={item=ate:p9050,location=slot.weapon.offhand}] p903 50
give @s[hasitem={item=ate:p9050,location=slot.weapon.offhand}] ate:p9050k 1
clear @s[hasitem={item=ate:p9050,location=slot.weapon.offhand}] ate:p9050 0 1

#p90_ss190
tag @s[hasitem={item=ate:p9050_ss190,location=slot.weapon.offhand}] add reload_ss190
scoreboard players set @s[hasitem={item=ate:p9050_ss190,location=slot.weapon.offhand}] p903 50
give @s[hasitem={item=ate:p9050_ss190,location=slot.weapon.offhand}] ate:p9050k 1
clear @s[hasitem={item=ate:p9050_ss190,location=slot.weapon.offhand}] ate:p9050_ss190 0 1

#p90_ss198
tag @s[hasitem={item=ate:p9050_ss198,location=slot.weapon.offhand}] add reload_ss198
scoreboard players set @s[hasitem={item=ate:p9050_ss198,location=slot.weapon.offhand}] p903 50
give @s[hasitem={item=ate:p9050_ss198,location=slot.weapon.offhand}] ate:p9050k 1
clear @s[hasitem={item=ate:p9050_ss198,location=slot.weapon.offhand}] ate:p9050_ss198 0 1
#p90_r37f
tag @s[hasitem={item=ate:p9050_r37f,location=slot.weapon.offhand}] add reload_r37f
scoreboard players set @s[hasitem={item=ate:p9050_r37f,location=slot.weapon.offhand}] p903 50
give @s[hasitem={item=ate:p9050_r37f,location=slot.weapon.offhand}] ate:p9050k 1
clear @s[hasitem={item=ate:p9050_r37f,location=slot.weapon.offhand}] ate:p9050_r37f 0 1

title @s[scores={p903=0}] actionbar §4未找到可用弹匣
tag @s[scores={p903=1..999}] add allowReload