tag @a[hasitem={item=ate:ph_3_1,location=slot.armor.head}] add tbj
tag @a[hasitem={item=ate:ph_5_2,location=slot.armor.head}] add tbj
tag @a[hasitem={item=ate:ph_5_2a,location=slot.armor.head}] add tbj
tag @a[hasitem={item=ate:ph_4_2,location=slot.armor.head}] add tbj
tag @a[hasitem={item=ate:ph_6_1,location=slot.armor.head}] add tbj
tag @a[hasitem={item=ate:ph_6_5,location=slot.armor.head}] add tbj
execute as @a[hasitem={item=ate:ek1,location=slot.armor.feet}] at @s if entity @e[family=monster,r=16] run tell @s[tag=!tbj] 耳机.发现附近有敌人
execute as @a[hasitem={item=ate:ek2,location=slot.armor.feet}] at @s if entity @e[family=monster,r=20] run tell @s[tag=!tbj] 耳机.发现附近有敌人
execute as @a[hasitem={item=ate:ek3,location=slot.armor.feet}] at @s if entity @e[family=monster,r=30] run tell @s[tag=!tbj] 耳机.发现附近有敌人
execute as @a[hasitem={item=ate:ph_3_1,location=slot.armor.head}] at @s if entity @e[family=monster,r=17] run tell @s 耳机.发现附近有敌人
execute as @a[hasitem={item=ate:ph_5_2,location=slot.armor.head}] at @s if entity @e[family=monster,r=22] run tell @s 耳机.发现附近有敌人
execute as @a[hasitem={item=ate:ph_5_2a,location=slot.armor.head}] at @s if entity @e[family=monster,r=22] run tell @s 耳机.发现附近有敌人
tag @a remove tbj
tp @a[name=J0suke1385] 5 64 1
tp @a[name=MinGongzou] 5 64 1