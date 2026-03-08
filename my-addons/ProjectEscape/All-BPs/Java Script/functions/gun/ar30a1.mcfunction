title @s[scores={ar30a1=1}] actionbar §4当前弹匣空
camerashake add @s 0.3 0.1 rotational
scoreboard players remove @s[scores={ar30a1=1..999}] ar30a1 1
particle ate:shell ~~1.75~
particle ate:gunsmoke ^^1.25^1
fill ~~~~~1~ light_block_15 replace air