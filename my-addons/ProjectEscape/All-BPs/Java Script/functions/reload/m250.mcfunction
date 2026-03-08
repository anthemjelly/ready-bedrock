#m250_fmj
tag @s[hasitem={item=ate:m25075,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:m25075,location=slot.weapon.offhand}] m250 70
give @s[hasitem={item=ate:m25075,location=slot.weapon.offhand}] ate:m25075k 1
clear @s[hasitem={item=ate:m25075,location=slot.weapon.offhand}] ate:m25075 0 1

#m250_hy
tag @s[hasitem={item=ate:m25075_hy,location=slot.weapon.offhand}] add reload_hybrid
scoreboard players set @s[hasitem={item=ate:m25075_hy,location=slot.weapon.offhand}] m250 70
give @s[hasitem={item=ate:m25075_hy,location=slot.weapon.offhand}] ate:m25075k 1
clear @s[hasitem={item=ate:m25075_hy,location=slot.weapon.offhand}] ate:m25075_hy 0 1

title @s[scores={m250=0}] actionbar §4未找到可用弹匣
tag @s[scores={m250=1..999}] add allowReload