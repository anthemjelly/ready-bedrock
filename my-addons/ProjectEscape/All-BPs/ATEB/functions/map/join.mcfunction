time set sunrise 
scoreboard objectives remove time
scoreboard objectives add time dummy
scoreboard players set @a time 0 
scoreboard players random @r time 1 10
execute as @a[scores={time=1..7}] at @s run weather clear 
execute as @a[scores={time=8}] at @s run weather rain
execute as @a[scores={time=9..10}] at @s run weather thunder
scoreboard players set @a time 0 
scoreboard players random @r time 1 4
camera @a fade time 0.5 10 0.5
execute as @a[scores={time=1..2}] at @s run time set noon
execute as @a[scores={time=3}] at @s run time set sunset
execute as @a[scores={time=4}] at @s run time set night
say §a正在为您开始匹配游戏，匹配时间预计为10秒钟,请耐心等待,不要进行任何其他操作
say 按住 E 键，检查你的背包
kill @e[type=wandering_trader]
kill @e[type=trader_llama]
summon wandering_trader -488.28 -32.00 -720.20
tp @e[type=trader_llama] -500.53 -61.00 -484.70
kill @e[type=item]