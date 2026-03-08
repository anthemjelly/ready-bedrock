#pkm_100_hp
tag @s[hasitem={item=ate:pkm100,location=slot.weapon.offhand}] add reload_hp
scoreboard players set @s[hasitem={item=ate:pkm100,location=slot.weapon.offhand}] pkp 100
give @s[hasitem={item=ate:pkm100,location=slot.weapon.offhand}] ate:pkm100k 1
clear @s[hasitem={item=ate:pkm100,location=slot.weapon.offhand}] ate:pkm100 0 1

#pkm_100_7bt1
tag @s[hasitem={item=ate:pkm100_7bt1,location=slot.weapon.offhand}] add reload_7bt1
scoreboard players set @s[hasitem={item=ate:pkm100_7bt1,location=slot.weapon.offhand}] pkp 100
give @s[hasitem={item=ate:pkm100_7bt1,location=slot.weapon.offhand}] ate:pkm100k 1
clear @s[hasitem={item=ate:pkm100_7bt1,location=slot.weapon.offhand}] ate:pkm100_7bt1 0 1

#pkm_100_7n1
tag @s[hasitem={item=ate:pkm100_7n1,location=slot.weapon.offhand}] add reload_7n1
scoreboard players set @s[hasitem={item=ate:pkm100_7n1,location=slot.weapon.offhand}] pkp 100
give @s[hasitem={item=ate:pkm100_7n1,location=slot.weapon.offhand}] ate:pkm100k 1
clear @s[hasitem={item=ate:pkm100_7n1,location=slot.weapon.offhand}] ate:pkm100_7n1 0 1

#pkm_100_7n37
tag @s[hasitem={item=ate:pkm100_7n37,location=slot.weapon.offhand}] add reload_7n37
scoreboard players set @s[hasitem={item=ate:pkm100_7n37,location=slot.weapon.offhand}] pkp 100
give @s[hasitem={item=ate:pkm100_7n37,location=slot.weapon.offhand}] ate:pkm100k 1
clear @s[hasitem={item=ate:pkm100_7n37,location=slot.weapon.offhand}] ate:pkm100_7n37 0 1

#pkm_100_fmj
tag @s[hasitem={item=ate:pkm100_fmj,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:pkm100_fmj,location=slot.weapon.offhand}] pkp 100
give @s[hasitem={item=ate:pkm100_fmj,location=slot.weapon.offhand}] ate:pkm100k 1
clear @s[hasitem={item=ate:pkm100_fmj,location=slot.weapon.offhand}] ate:pkm100_fmj 0 1

#pkm_100_snb
tag @s[hasitem={item=ate:pkm100_snb,location=slot.weapon.offhand}] add reload_snb
scoreboard players set @s[hasitem={item=ate:pkm100_snb,location=slot.weapon.offhand}] pkp 100
give @s[hasitem={item=ate:pkm100_snb,location=slot.weapon.offhand}] ate:pkm100k 1
clear @s[hasitem={item=ate:pkm100_snb,location=slot.weapon.offhand}] ate:pkm100_snb 0 1

title @s[scores={pkp=0}] actionbar §4未找到可用弹匣
tag @s[scores={pkp=1..999}] add allowReload