#tt33_lrn
tag @s[hasitem={item=ate:tt338,location=slot.weapon.offhand}] add reload_lrn
scoreboard players set @s[hasitem={item=ate:tt338,location=slot.weapon.offhand}] tt33 8
give @s[hasitem={item=ate:tt338,location=slot.weapon.offhand}] ate:tt338k 1
clear @s[hasitem={item=ate:tt338,location=slot.weapon.offhand}] ate:tt338 0 1

#tt33_m855a1
tag @s[hasitem={item=ate:tt338_m855a1,location=slot.weapon.offhand}] add reload_m855a1
scoreboard players set @s[hasitem={item=ate:tt338_m855a1,location=slot.weapon.offhand}] tt33 8
give @s[hasitem={item=ate:tt338_m855a1,location=slot.weapon.offhand}] ate:tt338k 1
clear @s[hasitem={item=ate:tt338_m855a1,location=slot.weapon.offhand}] ate:tt338_m855a1 0 1

#tt33_m995
tag @s[hasitem={item=ate:tt338_m995,location=slot.weapon.offhand}] add reload_m995
scoreboard players set @s[hasitem={item=ate:tt338_m995,location=slot.weapon.offhand}] tt33 8
give @s[hasitem={item=ate:tt338_m995,location=slot.weapon.offhand}] ate:tt338k 1
clear @s[hasitem={item=ate:tt338_m995,location=slot.weapon.offhand}] ate:tt338_m995 0 1

title @s[scores={tt33=0}] actionbar §4未找到可用弹匣
tag @s[scores={tt33=1..999}] add allowReload