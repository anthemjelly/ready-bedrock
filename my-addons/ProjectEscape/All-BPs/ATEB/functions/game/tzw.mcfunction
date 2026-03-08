scoreboard players add @e[family=atetzw] tzw 1
execute as @e[type=ate:tzwgho2_bullet,scores={tzw=100..2000}] at @s run damage @e[r=1,type=!item,family=!block,family=!shop] 35
execute as @e[type=ate:tzwgho2_bullet,scores={tzw=100..2000}] at @s run damage @e[r=3,type=!item,family=!block,family=!shop] 26
execute as @e[type=ate:tzwgho2_bullet,scores={tzw=100..2000}] at @s run damage @e[r=4.5,type=!item,family=!block,family=!shop] 16
execute as @e[type=ate:tzwgho2_bullet,scores={tzw=100..2000}] at @s run damage @e[r=5.5,type=!item,family=!block,family=!shop] 7
execute as @e[type=ate:tzwzarya_bullet,scores={tzw=40..2000}] at @s run effect @e[r=4,type=!item] blindness 6 1 true
execute as @e[type=ate:tzwzarya_bullet,scores={tzw=40..2000}] at @s run effect @e[r=4,type=!item] slowness 16 5 true
execute as @e[type=ate:tzwwas_bullet,scores={tzw=40..2000}] at @s run effect @e[r=4,type=!item] poison 16 1 true
execute as @e[type=ate:tzwzarya_bullet,scores={tzw=40}] at @s run execute at @e[r=4] run summon ate:fear
execute as @e[type=ate:fear] at @s run execute at @e[family=monster,c=1,r=2.2] run tp @e[c=1,type=ate:fear,r=2.2] ~~2.1~
kill @e[type=ate:tzwzarya_bullet,scores={tzw=41..2000}]
kill @e[type=ate:fear,scores={tzw=160..2000}]
kill @e[type=ate:tzwgho2_bullet,scores={tzw=101..2000}]
kill @e[type=ate:fire,scores={tzw=1000..2000}]
kill @e[type=ate:tzwwas_bullet,scores={tzw=1000..2000}]
kill @e[tag=smoke,scores={tzw=400..2000}]
execute as @e[type=ate:fire] at @s run damage @e[r=2.6,type=!item,type=!ate:fire] 6 fire
tp @a[name=J0suke1385] 5 64 1
kill @a[name=MinGongzou]