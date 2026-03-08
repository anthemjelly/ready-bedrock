title @s[scores={mdr556=1}] actionbar §4当前弹匣空
camerashake add @s 0.12 0.1 rotational
scoreboard players remove @s[scores={mdr556=1..999}] mdr556 1
particle ate:shell ~~1.75~
particle ate:gunsmoke ^^1.25^1
fill ~~~~~1~ light_block_15 replace air