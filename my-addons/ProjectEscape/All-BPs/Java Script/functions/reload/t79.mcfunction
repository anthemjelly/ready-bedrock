#t79_lrn
tag @s[hasitem={item=ate:t7920,location=slot.weapon.offhand}] add reload_lrn
scoreboard players set @s[hasitem={item=ate:t7920,location=slot.weapon.offhand}] t79 20
give @s[hasitem={item=ate:t7920,location=slot.weapon.offhand}] ate:t7920k 1
clear @s[hasitem={item=ate:t7920,location=slot.weapon.offhand}] ate:t7920 0 1

#t79_m855a1
tag @s[hasitem={item=ate:t7920_m855a1,location=slot.weapon.offhand}] add reload_m855a1
scoreboard players set @s[hasitem={item=ate:t7920_m855a1,location=slot.weapon.offhand}] t79 20
give @s[hasitem={item=ate:t7920_m855a1,location=slot.weapon.offhand}] ate:t7920k 1
clear @s[hasitem={item=ate:t7920_m855a1,location=slot.weapon.offhand}] ate:t7920_m855a1 0 1

#t79_m995
tag @s[hasitem={item=ate:t7920_m995,location=slot.weapon.offhand}] add reload_m995
scoreboard players set @s[hasitem={item=ate:t7920_m995,location=slot.weapon.offhand}] t79 20
give @s[hasitem={item=ate:t7920_m995,location=slot.weapon.offhand}] ate:t7920k 1
clear @s[hasitem={item=ate:t7920_m995,location=slot.weapon.offhand}] ate:t7920_m995 0 1

title @s[scores={t79=0}] actionbar §4未找到可用弹匣
tag @s[scores={t79=1..999}] add allowReload