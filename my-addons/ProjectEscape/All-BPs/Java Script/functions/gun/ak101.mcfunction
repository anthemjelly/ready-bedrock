title @s[scores={ak101=1}] actionbar §4当前弹匣空
scoreboard players remove @s[scores={ak101=1..999}] ak101 1
particle ate:shell ~~1.75~
particle ate:gunsmoke ^^1.25^1
fill ~~~~~1~ light_block_15 replace air
camerashake add @s 0.12 0.05 rotational