title @s[scores={m249=1}] actionbar §4当前弹匣空
camerashake add @s 0.01 0.01 rotational
scoreboard players remove @s[scores={m249=1..999}] m249 1
particle ate:shell ~~1.75~
particle ate:gunsmoke ^^1.25^1
fill ~~~~~1~ light_block_15 replace air