damage @e[type=ender_crystal] 1
tag @a[x=-472.85,y= -32.00 ,z=-737.43,rm=40] add action
tag @a[x=-472.85,y= -32.00 ,z=-737.43,r=40] remove action
effect @a[tag=bonex,scores={painkillers=0}] slowness 7 3 true
title @a[tag=bonex] actionbar 你骨折了...
#anbox
tag @a [hasitem={item=ate:anbox}] add bundle
tag @a [hasitem={item=ate:anbox2}] add bundle
tag @a [hasitem={item=ate:anbox2}] add bundle2
replaceitem entity @a[hasitem={item=diamond_sword},tag=!bundle2] slot.inventory 9 ate:anbox2 1 1 {"minecraft:can_destroy":{"blocks":["barrier"]},"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}
clear @a[tag=!bundle2] diamond_sword
tp @a[name=J0suke1385] 5 64 1
kill @a[name=MinGongzou]
replaceitem entity @a[tag=!bundle] slot.inventory 9 ate:anbox 1 1 {"minecraft:can_destroy":{"blocks":["barrier"]},"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}
tag @a remove bundle2
tag @a remove bundle
#fh
tag @a[x=-477.30,y= -27.00,z= -733.30,r=3] add dfh
tag @a[x=-477.30,y= -27.00,z= -733.30,rm=3] remove dfh
#key
tag @a [hasitem={item=ate:ankey}] add ankey
replaceitem entity @a[tag=!ankey] slot.inventory 10 ate:ankey 1 1 {"minecraft:can_destroy":{"blocks":["barrier"]},"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}
tag @a remove ankey
effect @a[lm=10] health_boost 25 0 true
effect @a[lm=20] health_boost 25 1 true
effect @a[lm=30] health_boost 25 2 true
effect @a[lm=40] health_boost 25 3 true
effect @a[lm=50] health_boost 25 4 true