#rpd_100_us
tag @s[hasitem={item=ate:rpd100,location=slot.weapon.offhand}] add reload_us
scoreboard players set @s[hasitem={item=ate:rpd100,location=slot.weapon.offhand}] rpd 100
give @s[hasitem={item=ate:rpd100,location=slot.weapon.offhand}] ate:rpd100k 1
clear @s[hasitem={item=ate:rpd100,location=slot.weapon.offhand}] ate:rpd100 0 1

#rpd_100_ap
tag @s[hasitem={item=ate:rpd100_ap,location=slot.weapon.offhand}] add reload_ap
scoreboard players set @s[hasitem={item=ate:rpd100_ap,location=slot.weapon.offhand}] rpd 100
give @s[hasitem={item=ate:rpd100_ap,location=slot.weapon.offhand}] ate:rpd100k 1
clear @s[hasitem={item=ate:rpd100_ap,location=slot.weapon.offhand}] ate:rpd100_ap 0 1

#rpd_100_bp
tag @s[hasitem={item=ate:rpd100_bp,location=slot.weapon.offhand}] add reload_bp
scoreboard players set @s[hasitem={item=ate:rpd100_bp,location=slot.weapon.offhand}] rpd 100
give @s[hasitem={item=ate:rpd100_bp,location=slot.weapon.offhand}] ate:rpd100k 1
clear @s[hasitem={item=ate:rpd100_bp,location=slot.weapon.offhand}] ate:rpd100_bp 0 1

#rpd_100_ps
tag @s[hasitem={item=ate:rpd100_ps,location=slot.weapon.offhand}] add reload_ps
scoreboard players set @s[hasitem={item=ate:rpd100_ps,location=slot.weapon.offhand}] rpd 100
give @s[hasitem={item=ate:rpd100_ps,location=slot.weapon.offhand}] ate:rpd100k 1
clear @s[hasitem={item=ate:rpd100_ps,location=slot.weapon.offhand}] ate:rpd100_ps 0 1

title @s[scores={rpd=0}] actionbar §4未找到可用弹匣
tag @s[scores={rpd=1..999}] add allowReload