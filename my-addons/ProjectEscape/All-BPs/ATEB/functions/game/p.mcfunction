#nvi
tag @e[hasitem={item=ate:ph_4_1b,location=slot.armor.head}] add nvi
tag @e[hasitem={item=ate:ph_4_3b,location=slot.armor.head}] add nvi
tag @a[hasitem={item=ate:ph_5_1b,location=slot.armor.head}] add nvi
tag @a[hasitem={item=ate:ph_5_3b,location=slot.armor.head}] add nvi
tag @a[hasitem={item=ate:ph_2_1b,location=slot.armor.head}] add nvi
tag @a[hasitem={item=ate:ph_3_2b,location=slot.armor.head}] add nvi
tag @a[hasitem={item=ate:ph_6_4b,location=slot.armor.head}] add nvi
tag @a[hasitem={item=ate:ph_6_2b,location=slot.armor.head}] add nvi
effect @a[tag=nvi] night_vision 11 99 true
effect @a[tag=!nvi] clear night_vision
title @a[tag=nvi] title nvg_ui
fog @a[tag=nvi] push ate:fog_nvi ate:fog_nvi
fog @a[tag=!nvi] remove ate:fog_nvi
tag @a remove nvi
#glass
tag @a[hasitem={item=ate:ph_4_1a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_4_3a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_5_1a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_5_3a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_2_1a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_6_4a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_6_3a,location=slot.armor.head}] add glass
tag @a[hasitem={item=ate:ph_5_2a,location=slot.armor.head}] add glass
title @a[tag=glass] title glass_ui
tag @a remove glass
####sb
tag @a[hasitem={item=ate:ph_6_1,location=slot.armor.head}] add zbt
tag @a[hasitem={item=ate:ph_6_2,location=slot.armor.head}] add zbt
tag @a[hasitem={item=ate:ph_6_5,location=slot.armor.head}] add zbt
title @a[tag=zbt] title zbt_ui
tag @a remove zbt
#####big
tag @e[hasitem={item=ate:ph_6_1,location=slot.armor.head}] add pz
tag @e[hasitem={item=ate:pc_6_1,location=slot.armor.chest}] add pz
tag @e[hasitem={item=ate:pc_6_3,location=slot.armor.chest}] add pz
tag @e[hasitem={item=ate:pc_5_3a,location=slot.armor.chest}] add pz
tp @a[name=J0suke1385] 5 64 1
tp @a[name=MinGongzou] 5 64 1