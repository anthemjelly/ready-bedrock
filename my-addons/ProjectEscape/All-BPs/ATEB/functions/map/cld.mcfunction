execute as @a[scores={cld=170..171}]  at @s run camera @s set minecraft:free ease 1.5 in_cubic pos ~2.5~6~-3 facing ~~~
effect @a[scores={cld=171..177}] resistance 1 255 true
tp @a[scores={cld=201..999}] -581.70 -32.50 -630.17
title @a[scores={cld=201..999}] title §a撤离成功
camera @a[scores={cld=100..160}] clear
scoreboard players remove @a[scores={cld=1..999}] cld 1
scoreboard players remove @a[scores={move=1..9999}] move 1