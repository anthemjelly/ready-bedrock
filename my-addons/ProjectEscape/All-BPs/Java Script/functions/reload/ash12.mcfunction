#ash12_20_ps12
tag @s[hasitem={item=ate:ash1220,location=slot.weapon.offhand}] add reload_ps12
scoreboard players set @s[hasitem={item=ate:ash1220,location=slot.weapon.offhand}] ash12 20
give @s[hasitem={item=ate:ash1220,location=slot.weapon.offhand}] ate:ash1220k 1
clear @s[hasitem={item=ate:ash1220,location=slot.weapon.offhand}] ate:ash1220 0 1

#ash12_20_ps12b
tag @s[hasitem={item=ate:ash1220_ps12b,location=slot.weapon.offhand}] add reload_ps12b
scoreboard players set @s[hasitem={item=ate:ash1220_ps12b,location=slot.weapon.offhand}] ash12 20
give @s[hasitem={item=ate:ash1220_ps12b,location=slot.weapon.offhand}] ate:ash1220k 1
clear @s[hasitem={item=ate:ash1220_ps12b,location=slot.weapon.offhand}] ate:ash1220_ps12b 0 1

title @s[scores={ash12=0}] actionbar §4未找到可用弹匣

tag @s[scores={ash12=1..999}] add allowReload