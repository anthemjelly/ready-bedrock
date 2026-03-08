title @s[scores={ump45=1}] actionbar §4当前弹匣空
camerashake add @s 0.15 0.05 rotational
scoreboard players remove @s[scores={ump45=1..999}] ump45 1
particle ate:shell ~~1.75~
particle ate:gunsmoke ^^1.25^1
fill ~~~~~1~ light_block_15 replace air