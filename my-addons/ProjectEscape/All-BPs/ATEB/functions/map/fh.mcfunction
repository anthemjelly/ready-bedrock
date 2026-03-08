tag @a[hasitem={item=ate:fh,location=slot.weapon.mainhand},r=5] add hasfh
execute if entity @a[tag=dfh] run clear @p[tag=hasfh] ate:fh 0 1
execute as @a[tag=hasfh] at @s if entity @a[tag=dfh] run say 注意 有人呼叫了增员，一名新的PMC队员即将进入改区域
execute unless entity @a[tag=dfh] run tell @a[r=5] 没有可增援的玩家，或者需要增援的玩家未处于准备状态
execute as @a[tag=hasfh] at @s run effect @a[tag=dfh]  slow_falling 30 1
execute as @a[tag=hasfh] at @s run tp @a[tag=dfh] ~~2~
execute unless entity @a[tag=hasfh] run tell @a[r=5] 你没有足够的增援劵，请求支援需要此许可。
tag @a remove hasfh