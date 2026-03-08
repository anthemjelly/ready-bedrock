#pp91_bpm
tag @s[hasitem={item=ate:pp9130,location=slot.weapon.offhand}] add reload_bpm
scoreboard players set @s[hasitem={item=ate:pp9130,location=slot.weapon.offhand}] pp91 30
give @s[hasitem={item=ate:pp9130,location=slot.weapon.offhand}] ate:pp9130k 1
clear @s[hasitem={item=ate:pp9130,location=slot.weapon.offhand}] ate:pp9130 0 1

title @s[scores={pp91=0}] actionbar §4未找到可用弹匣
tag @s[scores={pp91=1..999}] add allowReload