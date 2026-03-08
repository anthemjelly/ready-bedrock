#m82_5_hp
tag @s[hasitem={item=ate:m825,location=slot.weapon.offhand}] add reload_hp
scoreboard players set @s[hasitem={item=ate:m825,location=slot.weapon.offhand}] m82 5
give @s[hasitem={item=ate:m825,location=slot.weapon.offhand}] ate:m825k 1
clear @s[hasitem={item=ate:m825,location=slot.weapon.offhand}] ate:m825 0 1

#m82_5_m21
tag @s[hasitem={item=ate:m825_m21,location=slot.weapon.offhand}] add reload_m21
scoreboard players set @s[hasitem={item=ate:m825_m21,location=slot.weapon.offhand}] m82 5
give @s[hasitem={item=ate:m825_m21,location=slot.weapon.offhand}] ate:m825k 1
clear @s[hasitem={item=ate:m825_m21,location=slot.weapon.offhand}] ate:m825_m21 0 1

#m82_5_slap
tag @s[hasitem={item=ate:m825_slap,location=slot.weapon.offhand}] add reload_slap
scoreboard players set @s[hasitem={item=ate:m825_slap,location=slot.weapon.offhand}] m82 5
give @s[hasitem={item=ate:m825_slap,location=slot.weapon.offhand}] ate:m825k 1
clear @s[hasitem={item=ate:m825_slap,location=slot.weapon.offhand}] ate:m825_slap 0 1

#m82_10_hp
tag @s[hasitem={item=ate:m8210,location=slot.weapon.offhand}] add reload_hp
scoreboard players set @s[hasitem={item=ate:m8210,location=slot.weapon.offhand}] m82 10
give @s[hasitem={item=ate:m8210,location=slot.weapon.offhand}] ate:m8210k 1
clear @s[hasitem={item=ate:m8210,location=slot.weapon.offhand}] ate:m8210 0 1

#m82_10_m21
tag @s[hasitem={item=ate:m8210_m21,location=slot.weapon.offhand}] add reload_m21
scoreboard players set @s[hasitem={item=ate:m8210_m21,location=slot.weapon.offhand}] m82 10
give @s[hasitem={item=ate:m8210_m21,location=slot.weapon.offhand}] ate:m8210k 1
clear @s[hasitem={item=ate:m8210_m21,location=slot.weapon.offhand}] ate:m8210_m21 0 1

#m82_10_slap
tag @s[hasitem={item=ate:m8210_slap,location=slot.weapon.offhand}] add reload_slap
scoreboard players set @s[hasitem={item=ate:m8210_slap,location=slot.weapon.offhand}] m82 10
give @s[hasitem={item=ate:m8210_slap,location=slot.weapon.offhand}] ate:m8210k 1
clear @s[hasitem={item=ate:m8210_slap,location=slot.weapon.offhand}] ate:m8210_slap 0 1

title @s[scores={m82=0}] actionbar §4未找到可用弹匣

tag @s[scores={m82=1..999}] add allowReload