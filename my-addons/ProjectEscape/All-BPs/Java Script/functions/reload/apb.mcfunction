#apb_bpm
tag @s[hasitem={item=ate:apb8,location=slot.weapon.offhand}] add reload_bpm
scoreboard players set @s[hasitem={item=ate:apb8,location=slot.weapon.offhand}] apb 8
give @s[hasitem={item=ate:apb8,location=slot.weapon.offhand}] ate:apb8k 1
clear @s[hasitem={item=ate:apb8,location=slot.weapon.offhand}] ate:apb8 0 1

title @s[scores={apb=0}] actionbar §4未找到可用弹匣
tag @s[scores={apb=1..999}] add allowReload