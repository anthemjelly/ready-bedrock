#mcx_fmj
tag @s[hasitem={item=ate:mcx20,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:mcx20,location=slot.weapon.offhand}] mcx 20
give @s[hasitem={item=ate:mcx20,location=slot.weapon.offhand}] ate:mcx20k 1
clear @s[hasitem={item=ate:mcx20,location=slot.weapon.offhand}] ate:mcx20 0 1

#mcx_hy
tag @s[hasitem={item=ate:mcx20_hy,location=slot.weapon.offhand}] add reload_hybrid
scoreboard players set @s[hasitem={item=ate:mcx20_hy,location=slot.weapon.offhand}] mcx 20
give @s[hasitem={item=ate:mcx20_hy,location=slot.weapon.offhand}] ate:mcx20k 1
clear @s[hasitem={item=ate:mcx20_hy,location=slot.weapon.offhand}] ate:mcx20_hy 0 1
#mcx_fmj
tag @s[hasitem={item=ate:mcx50,location=slot.weapon.offhand}] add reload_fmj
scoreboard players set @s[hasitem={item=ate:mcx50,location=slot.weapon.offhand}] mcx 50
give @s[hasitem={item=ate:mcx50,location=slot.weapon.offhand}] ate:scarh50k 1
clear @s[hasitem={item=ate:mcx50,location=slot.weapon.offhand}] ate:mcx50 0 1

#mcx_hy
tag @s[hasitem={item=ate:mcx50_hy,location=slot.weapon.offhand}] add reload_hybrid
scoreboard players set @s[hasitem={item=ate:mcx50_hy,location=slot.weapon.offhand}] mcx 50
give @s[hasitem={item=ate:mcx50_hy,location=slot.weapon.offhand}] ate:scarh50k 1
clear @s[hasitem={item=ate:mcx50_hy,location=slot.weapon.offhand}] ate:mcx50_hy 0 1

title @s[scores={mcx=0}] actionbar §4未找到可用弹匣
tag @s[scores={mcx=1..999}] add allowReload