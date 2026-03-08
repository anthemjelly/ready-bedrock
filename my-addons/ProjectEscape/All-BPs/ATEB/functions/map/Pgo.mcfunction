kill @e[type=ate:zhg]
tp @e[family=Parasites] ~~-64~
tp @e[type=ate:parasiteflower] ~~-64~
kill @e[type=ate:parasiteflower]
kill @e[family=Parasites]
fill -483.30 -30.00 -700.51 -489.70 -32.00 -700.70 light_gray_stained_glass_pane
summon ate:zhg -491.30 -33.00 -735.77
say 已接取 [救世主] 任务，进度已开始
say 目标:保护工程师不被死亡
say 年轻人，我欣赏你的勇气，选择接下这个任务，我是组织派来的工程师，由我在后面操控仪器，替我拦住那些寄生虫，机器开始运行后，它们就会发疯，加油。
summon ate:parasiteflower -487.48 -31.94 -690.74
effect @e[type=ate:parasiteflower] resistance infinite 3
effect @e[type=ate:parasiteflower] regeneration infinite 255
effect @e[type=ate:parasiteflower] health_boost infinite 255
fill -483.30 -30.00 -700.51 -489.70 -32.00 -700.70 air
weather thunder
time set night