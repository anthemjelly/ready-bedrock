#d_95_lfnp
tag @s[hasitem={item=ate:d8,location=slot.weapon.offhand}] add reload_lfnp
scoreboard players set @s[hasitem={item=ate:d8,location=slot.weapon.offhand}] d 8
give @s[hasitem={item=ate:d8,location=slot.weapon.offhand}] ate:d8k 1
clear @s[hasitem={item=ate:d8,location=slot.weapon.offhand}] ate:d8 0 1

#d_95_jsp
tag @s[hasitem={item=ate:d8_jsp,location=slot.weapon.offhand}] add reload_jsp
scoreboard players set @s[hasitem={item=ate:d8_jsp,location=slot.weapon.offhand}] d 8
give @s[hasitem={item=ate:d8_jsp,location=slot.weapon.offhand}] ate:d8k 1
clear @s[hasitem={item=ate:d8,location=slot.weapon.offhand}] ate:d8_jsp 0 1

#d_95_sjhp
tag @s[hasitem={item=ate:d8_sjhp,location=slot.weapon.offhand}] add reload_sjhp
scoreboard players set @s[hasitem={item=ate:d8_sjhp,location=slot.weapon.offhand}] d 8
give @s[hasitem={item=ate:d8_sjhp,location=slot.weapon.offhand}] ate:d8k 1
clear @s[hasitem={item=ate:d8,location=slot.weapon.offhand}] ate:d8_sjhp 0 1


title @s[scores={d=0}] actionbar §4未找到可用弹匣
tag @s[scores={d=1..999}] add allowReload