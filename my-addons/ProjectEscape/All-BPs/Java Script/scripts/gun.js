import { world, system } from "@minecraft/server";

const AMMO_CONFIG = {
    "5.45x39": { types: { "ps": "ate:gunak74n_bullet", "bt": "ate:gunak74n_bt_bullet", "7n40": "ate:gunak74n_7n40_bullet", "bs": "ate:gunak74n_bs_bullet", "7n39": "ate:gunak74n_7n39_bullet" }, oneLevelAmmo: "ps" },
    "9x18": { types: { "pbm": "ate:gunpp91_bullet" }, oneLevelAmmo: "pbm" },
    "44": { types: { "lfnp": "ate:gund_bullet", "sjhp": "ate:gund_sjhp_bullet", "jsp": "ate:gund_jsp_bullet" }, oneLevelAmmo: "pbm" },
    "40x46": { types: { "m386": "ate:gunm32_bullet", "m441": "ate:gunm32_m441_bullet", "m576": "ate:gunm32_m576_bullet" }, oneLevelAmmo: "m576" },
    "5.8x42": { types: { "dbp10": "ate:gunqbz95_bullet", "dbp87": "ate:gunqbz95_dbp87_bullet", "dvp88": "ate:gunqbz95_dvp88_bullet", "dbu141": "ate:gunqbz95_dbu141_bullet", "dvc12": "ate:gunqbz95_dvc12_bullet" }, oneLevelAmmo: "dbp10" },
    "338": { types: { "fmj": "ate:gunmk18_bullet", "ap": "ate:gunmk18_ap_bullet" }, oneLevelAmmo: "fmj" },
    "12.7x99": { types: { "hp": "ate:gunm82_bullet", "m21": "ate:gunm82_m21_bullet", "slap": "ate:gunm82_slap_bullet" }, oneLevelAmmo: "hp" },
    "6.8x51": { types: { "fmj": "ate:gunmcx_bullet", "hybrid": "ate:gunmcx_hy_bullet" }, oneLevelAmmo: "fmj" },
    "12.7x55": { types: { "ps12": "ate:gunash12_bullet", "ps12b": "ate:gunash12_ps12b_bullet" }, oneLevelAmmo: "ps12" },
    "12x70": { types: { "8.5mm鹿弹": "ate:gunu12_bullet", "箭形弹": "ate:gunu12_j_bullet", "ap20": "ate:gunu12_ap20_bullet" }, oneLevelAmmo: "8.5mm鹿弹" },
    "23x75": { types: { "破片-10霰弹": "ate:gunks23m_bullet", "红星闪光弹": "ate:gunks23m_red_bullet", "路障独头弹": "ate:gunks23m_ap_bullet" }, oneLevelAmmo: "破片-10霰弹" },
    "7.62x25": { types: { "lrn": "ate:gunt79_bullet", "m855a1": "ate:gunt79_m855a1_bullet", "m995": "ate:gunt79_m995_bullet" }, oneLevelAmmo: "lrn" },
    "9x19": { types: { "pso": "ate:gung17_bullet", "ap": "ate:gung17_ap_bullet", "green": "ate:gung17_green_bullet", "7n31": "ate:gung17_7n31_bullet", "rip": "ate:gung17_rip_bullet" }, oneLevelAmmo: "pso" },
    "300": { types: { "fw": "ate:gunmcx300_bullet", "ap": "ate:gunmcx300_ap_bullet", "cbj": "ate:gunmcx300_cbj_bullet", "bpz": "ate:gunmcx300_bpz_bullet" }, oneLevelAmmo: "pso" },
    "5.7x28": { types: { "sb": "ate:gunp90_bullet", "ss190": "ate:gunp90_ss190_bullet", "ss198": "ate:gunp90_ss198_bullet", "r37f": "ate:gunp90_r37f_bullet" }, oneLevelAmmo: "sb" },
    "45": { types: { "hs": "ate:gunump45_bullet", "ap": "ate:gunump45_ap_bullet", "rip": "ate:gunump45_rip_bullet" }, oneLevelAmmo: "hs" },
    "7.62x39": { types: { "us": "ate:gunakm_bullet", "ps": "ate:gunakm_ps_bullet", "bp": "ate:gunakm_bp_bullet", "ap": "ate:gunakm_ap_bullet" }, oneLevelAmmo: "us" },
    "9x39": { types: { "fmj": "ate:gunkbp9a91_bullet", "sp5": "ate:gunkbp9a91_sp5_bullet", "pab": "ate:gunkbp9a91_pab_bullet", "7n12": "ate:gunkbp9a91_7n12_bullet" }, oneLevelAmmo: "fmj" },
    "4.6x30": { types: { "sx": "ate:gunmp7_bullet", "jsp": "ate:gunmp7_jsp_bullet", "fmj": "ate:gunmp7_fmj_bullet", "ap": "ate:gunmp7_ap_bullet" }, oneLevelAmmo: "sx" },
    "5.56x45": { types: { "fmj": "ate:gunar15_bullet", "m855": "ate:gunar15_m855_bullet", "m855a1": "ate:gunar15_m855a1_bullet", "m995": "ate:gunar15_m995_bullet", "ap": "ate:gunar15_ap_bullet" }, oneLevelAmmo: "fmj" },
    "7.62x51": { types: { "un": "ate:gunm1a_bullet", "bpz": "ate:gunm1a_bpz_bullet", "m62": "ate:gunm1a_m62_bullet", "m80": "ate:gunm1a_m80_bullet", "m61": "ate:gunm1a_m61_bullet", "m80a1": "ate:gunm1a_m80a1_bullet", "m993": "ate:gunm1a_m993_bullet" }, oneLevelAmmo: "un" },
    "7.62x54": { types: { "hp": "ate:gunsvd_bullet", "fmj": "ate:gunsvd_fmj_bullet", "7n1": "ate:gunsvd_7n1_bullet", "7bt1": "ate:gunsvd_7bt1_bullet", "snb": "ate:gunsvd_snb_bullet", "7n37": "ate:gunsvd_7n37_bullet" }, oneLevelAmmo: "hp" }
};
const GUN_CONFIGS = {
    "ate:aekk": { name: "aek", rpm: 900, spread: 0.07, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "aek", removableGrip: true, reloadTime: 4 },
    "ate:acek": { name: "ace", rpm: 650, spread: 0.07, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "ace", removableGrip: true, reloadTime: 4 },
    "ate:aek2k": { name: "aek2", rpm: 900, spread: 0.03, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "aek", removableGrip: true, reloadTime: 4 },
    "ate:ak103k": { name: "ak103", rpm: 600, spread: 0.06, sneak_spread: 0.02, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "ak103", removableGrip: true, reloadTime: 3.7 },
    "ate:mk47k": { name: "mk47", rpm: 650, spread: 0.03, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "mk47", removableGrip: true, reloadTime: 4 },
    "ate:akm2k": { name: "akm2", rpm: 600, spread: 0.04, sneak_spread: 0.02, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "akm2", reloadTime: 2.9 },
    "ate:akmk": { name: "akm", rpm: 600, spread: 0.05, sneak_spread: 0.03, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "akm", reloadTime: 4 },
    "ate:akmsk": { name: "akms", rpm: 600, spread: 0.04, sneak_spread: 0.03, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "akms", reloadTime: 4 },
    "ate:rpdk": { name: "rpd", rpm: 700, spread: 0.09, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "rpd", reloadTime: 5.6 },
    "ate:rpdnk": { name: "rpdn", rpm: 700, spread: 0.09, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "rpdn", reloadTime: 5.6 },
    "ate:sksk": { name: "sks", spread: 0.12, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "sks", shootMode: "unauto", unautoDelayTicks: 5, reloadTime: 2.7 },
    "ate:opsksk": { name: "sks", spread: 0.11, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "sks", shootMode: "unauto", unautoDelayTicks: 5, reloadTime: 2.7 },
    "ate:opsks2k": { name: "sks", spread: 0.05, sneak_spread: 0.00, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "sks", shootMode: "unauto", unautoDelayTicks: 5, reloadTime: 4 },
    "ate:sks2k": { name: "sks2", spread: 0.05, sneak_spread: 0, ammoRate: 8, caliber: "7.62x39", oneLevelAmmo: "us", gun_type: "sks2", shootMode: "unauto", unautoDelayTicks: 0, reloadTime: 4 },
    "ate:ak74k": { name: "ak74", rpm: 600, spread: 0.06, sneak_spread: 0.03, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "ak74", reloadTime: 4 },
    "ate:aks74k": { name: "aks74", rpm: 600, spread: 0.03, sneak_spread: 0.02, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "aks74", reloadTime: 4 },
    "ate:ak74nk": { name: "ak74n", rpm: 600, spread: 0.02, sneak_spread: 0.02, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "ak74n", reloadTime: 4 },
    "ate:ak74mk": { name: "ak74m", rpm: 600, spread: 0.03, sneak_spread: 0.02, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "ak74m", reloadTime: 4 },
    "ate:ak105k": { name: "ak105", rpm: 550, spread: 0.05, sneak_spread: 0.01, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "ak105", reloadTime: 3.7 },
    "ate:ak12k": { name: "ak12", rpm: 700, spread: 0.04, sneak_spread: 0.01, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "ak12", removableGrip: true, reloadTime: 3.8 },
    "ate:rpkk": { name: "rpk", rpm: 650, spread: 0.08, sneak_spread: 0.01, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "rpk", removableGrip: true, reloadTime: 4 },
    "ate:a545k": { name: "a545", rpm: 900, spread: 0.03, sneak_spread: 0.00, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "a545", removableGrip: true, reloadTime: 4 },
    "ate:an94k": { name: "an94", rpm: 600, spread: 0.05, sneak_spread: 0, ammoRate: 8, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "an94", reloadTime: 4 },
    "ate:ak74uk": { name: "ak74u", rpm: 650, spread: 0.08, sneak_spread: 0.05, ammoRate: 6, caliber: "5.45x39", oneLevelAmmo: "ps", gun_type: "ak74u", reloadTime: 4 },
    "ate:m4k": { name: "m4", rpm: 800, spread: 0.04, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "m4", removableGrip: true, reloadTime: 4 },
    "ate:augk": { name: "aug", rpm: 715, spread: 0.05, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "aug", reloadTime: 4 },
    "ate:aug2k": { name: "aug2", rpm: 715, spread: 0.05, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "aug2", reloadTime: 4 },
    "ate:famask": { name: "famas", rpm: 1000, spread: 0.05, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "famas", reloadTime: 4 },
    "ate:f2000k": { name: "f2000", rpm: 850, spread: 0.02, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "f2000", removableGrip: true, reloadTime: 4 },
    "ate:ak101k": { name: "ak101", rpm: 600, spread: 0.04, sneak_spread: 0.02, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "ak101", removableGrip: true, reloadTime: 3.7 },
    "ate:mdr556k": { name: "mdr556", rpm: 650, spread: 0.05, sneak_spread: 0.02, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "mdr556", removableGrip: true, reloadTime: 4 },
    "ate:sg556k": { name: "sg556", rpm: 700, spread: 0.08, sneak_spread: 0.02, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "sg556", removableGrip: true, reloadTime: 4 },
    "ate:m16k": { name: "m16", rpm: 750, spread: 0.09, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "m16", reloadTime: 4 },
    "ate:g36k": { name: "g36", rpm: 750, spread: 0.06, sneak_spread: 0.01, ammoRate: 7, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "g36", reloadTime: 4 },
    "ate:scarlk": { name: "scarl", rpm: 600, spread: 0.04, sneak_spread: 0, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "scarl", removableGrip: true, reloadTime: 4 },
    "ate:m249k": { name: "m249", rpm: 750, spread: 0.09, sneak_spread: 0, ammoRate: 9, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "m249", removableGrip: true, reloadTime: 5 },
    "ate:h4k": { name: "h4", rpm: 850, spread: 0.03, sneak_spread: 0.02, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "h4", removableGrip: true, reloadTime: 4 },
    "ate:ar15k": { name: "ar15", spread: 0.05, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "ar15", shootMode: "unauto", unautoDelayTicks: 2, removableGrip: true, reloadTime: 4 },
    "ate:adark": { name: "adar", spread: 0.06, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "adar", shootMode: "unauto", unautoDelayTicks: 2, removableGrip: true, reloadTime: 4 },
    "ate:mini14k": { name: "mini14", spread: 0.09, sneak_spread: 0.00, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "mini14", shootMode: "unauto", unautoDelayTicks: 5, reloadTime: 4 },
    "ate:mini142k": { name: "mini142", spread: 0.05, sneak_spread: 0.00, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "mini142", shootMode: "unauto", unautoDelayTicks: 2, reloadTime: 4 },
    "ate:ac556k": { name: "ac556", rpm: 750, spread: 0.08, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "ac556", removableGrip: true, reloadTime: 4 },
    "ate:ac5562k": { name: "ac5562", rpm: 750, spread: 0.03, sneak_spread: 0.00, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "ac5562", removableGrip: true, reloadTime: 4 },
    "ate:m16a2k": { name: "m16a2", spread: 0.09, sneak_spread: 0.01, ammoRate: 8, caliber: "5.56x45", oneLevelAmmo: "fmj", gun_type: "m16a2", shootMode: "unauto", unautoDelayTicks: 3, spshoot: 3, reloadTime: 4 },
    "ate:mk14k": { name: "mk14", rpm: 700, spread: 0.14, sneak_spread: 0.01, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "mk14", removableGrip: true, reloadTime: 4 },
    "ate:m14k": { name: "m14", rpm: 700, spread: 0.14, sneak_spread: 0.03, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "m14", removableGrip: true, reloadTime: 4 },
    "ate:mk142k": { name: "mk142", rpm: 700, spread: 0.06, sneak_spread: 0.01, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "mk142", removableGrip: true, reloadTime: 4 },
    "ate:sa58k": { name: "sa58", rpm: 700, spread: 0.09, sneak_spread: 0.03, ammoRate: 7, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "sa58", removableGrip: true, reloadTime: 3.8 },
    "ate:sa582k": { name: "sa582", rpm: 700, spread: 0.04, sneak_spread: 0.01, ammoRate: 6, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "sa582", removableGrip: true, reloadTime: 3.8 },
    "ate:falk": { name: "fal", rpm: 700, spread: 0.08, sneak_spread: 0.03, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "fal", removableGrip: true, reloadTime: 3.8 },
    "ate:rfbk": { name: "rfb", spread: 0.08, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "rfb", shootMode: "unauto", unautoDelayTicks: 3, removableGrip: true, reloadTime: 4 },
    "ate:g3k": { name: "g3", rpm: 600, spread: 0.07, sneak_spread: 0.03, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "g3", removableGrip: true, reloadTime: 4 },
    "ate:ak308k": { name: "ak308", rpm: 700, spread: 0.09, sneak_spread: 0.02, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "ak308", removableGrip: true, reloadTime: 3.7 },
    "ate:scarhk": { name: "scarh", rpm: 600, spread: 0.07, sneak_spread: 0.02, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "scarh", removableGrip: true, reloadTime: 4 },
    "ate:mdr308k": { name: "mdr308", rpm: 650, spread: 0.05, sneak_spread: 0.03, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "mdr308", removableGrip: true, reloadTime: 4 },
    "ate:mg3k": { name: "mg3", rpm: 990, spread: 0.09, sneak_spread: 0.03, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "mg3", reloadTime: 5.6 },
    "ate:m60k": { name: "m60", rpm: 500, spread: 0.07, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "m60", reloadTime: 5.1 },
    "ate:m110k": { name: "m110", spread: 0.09, sneak_spread: 0, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "m110", shootMode: "unauto", unautoDelayTicks: 2, removableGrip: true, reloadTime: 4 },
    "ate:sr25k": { name: "sr25", spread: 0.12, sneak_spread: 0, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "sr25", shootMode: "unauto", unautoDelayTicks: 5, removableGrip: true, reloadTime: 4 },
    "ate:m1ak": { name: "m1a", spread: 0.11, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "m1a", shootMode: "unauto", unautoDelayTicks: 5, reloadTime: 4 },
    "ate:dvl10k": { name: "dvl10", spread: 0.15, sneak_spread: 0, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "dvl10", shootMode: "unauto", unautoDelayTicks: 40, reloadTime: 5.25 },
    "ate:m700k": { name: "m700", spread: 0.16, sneak_spread: 0, ammoRate: 9, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "m700", shootMode: "unauto", unautoDelayTicks: 39, reloadTime: 5.25 },
    "ate:vector45k": { name: "vector45", rpm: 1100, spread: 0.04, sneak_spread: 0, ammoRate: 5, caliber: "45", oneLevelAmmo: "hs", gun_type: "vector45", removableGrip: true, reloadTime: 4 },
    "ate:ump45k": { name: "ump45", rpm: 500, spread: 0.08, sneak_spread: 0.02, ammoRate: 5, caliber: "45", oneLevelAmmo: "hs", gun_type: "ump45", removableGrip: true, reloadTime: 4 },
    "ate:m1911k": { name: "m1911", spread: 0.08, sneak_spread: 0.01, ammoRate: 5, caliber: "45", oneLevelAmmo: "hs", gun_type: "m1911", shootMode: "unauto", unautoDelayTicks: 2, removableGrip: true, reloadTime: 2.3 },
    "ate:mp7k": { name: "mp7", rpm: 950, spread: 0.03, sneak_spread: 0.02, ammoRate: 5, caliber: "4.6x30", oneLevelAmmo: "sx", gun_type: "mp7", removableGrip: true, reloadTime: 4 },
    "ate:pp91k": { name: "pp91", rpm: 910, spread: 0.08, sneak_spread: 0.02, ammoRate: 5, caliber: "9x18", oneLevelAmmo: "pbm", gun_type: "pp91", removableGrip: true, reloadTime: 4 },
    "ate:apbk": { name: "apb", rpm: 750, spread: 0.08, sneak_spread: 0.02, ammoRate: 5, caliber: "9x18", oneLevelAmmo: "pbm", gun_type: "apb", removableGrip: true, reloadTime: 2.3 },
    "ate:p90k": { name: "p90", rpm: 900, spread: 0.05, sneak_spread: 0.01, ammoRate: 5, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "p90", reloadTime: 2.9 },
    "ate:p902k": { name: "p902", rpm: 900, spread: 0.01, sneak_spread: 0.01, ammoRate: 6, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "p902", reloadTime: 2.9 },
    "ate:p903k": { name: "p903", rpm: 900, spread: 0.03, sneak_spread: 0.01, ammoRate: 6, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "p903", reloadTime: 2.9 },
    "ate:p904k": { name: "p904", rpm: 900, spread: 0.01, sneak_spread: 0.00, ammoRate: 6, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "p904", reloadTime: 2.9 },
    "ate:cpwk": { name: "cpw", rpm: 900, spread: 0.03, sneak_spread: 0.01, ammoRate: 5, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "cpw", reloadTime: 4 },
    "ate:ar57k": { name: "ar57", rpm: 850, spread: 0.06, sneak_spread: 0.01, ammoRate: 6, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "ar57", reloadTime: 3.4 },
    "ate:fn57k": { name: "fn57", spread: 0.06, sneak_spread: 0.01, ammoRate: 5, caliber: "5.7x28", oneLevelAmmo: "sb", gun_type: "fn57", shootMode: "unauto", unautoDelayTicks: 2, reloadTime: 2.3 },
    "ate:g17k": { name: "g17", spread: 0.06, sneak_spread: 0.01, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "g17", shootMode: "unauto", unautoDelayTicks: 2, reloadTime: 2.3 },
    "ate:stm9k": { name: "stm9", spread: 0.01, sneak_spread: 0, ammoRate: 6, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "stm9", shootMode: "unauto", unautoDelayTicks: 2, reloadTime: 4 },
    "ate:g18ck": { name: "g18c", rpm: 1200, spread: 0.09, sneak_spread: 0.02, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "g18c", reloadTime: 2.3 },
    "ate:pp19k": { name: "pp19", rpm: 700, spread: 0.05, sneak_spread: 0.01, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "pp19", reloadTime: 4 },
    "ate:mp5k": { name: "mp5", rpm: 800, spread: 0.05, sneak_spread: 0.01, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "mp5", reloadTime: 4 },
    "ate:mp5kk": { name: "mp5k", rpm: 900, spread: 0.07, sneak_spread: 0.01, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "mp5k", reloadTime: 4 },
    "ate:mpxk": { name: "mpx", rpm: 850, spread: 0.02, sneak_spread: 0.01, ammoRate: 6, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "mpx", removableGrip: true, reloadTime: 4 },
    "ate:aug9k": { name: "aug9", rpm: 770, spread: 0.02, sneak_spread: 0, ammoRate: 6, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "aug9", removableGrip: true, reloadTime: 4 },
    "ate:aug92k": { name: "aug92", rpm: 770, spread: 0.02, sneak_spread: 0, ammoRate: 6, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "aug92", removableGrip: true, reloadTime: 4 },
    "ate:uzik": { name: "uzi", rpm: 600, spread: 0.05, sneak_spread: 0.01, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "uzi", reloadTime: 4 },
    "ate:uziprok": { name: "uzipro", rpm: 1075, spread: 0.05, sneak_spread: 0.02, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "uzipro", reloadTime: 4 },
    "ate:vector9k": { name: "vector9", spread: 0.05, sneak_spread: 0.02, ammoRate: 5, caliber: "9x19", oneLevelAmmo: "pso", gun_type: "vector9", rpm: 950, reloadTime: 4 },
    "ate:mcx300k": { name: "mcx300", rpm: 800, spread: 0.02, sneak_spread: 0.02, ammoRate: 7, caliber: "300", oneLevelAmmo: "fw", gun_type: "mcx300", removableGrip: true, reloadTime: 4 },
    "ate:avtk": { name: "avt", rpm: 750, spread: 0.08, sneak_spread: 0.02, ammoRate: 8, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "avt", reloadTime: 4 },
    "ate:svtk": { name: "svt", spread: 0.11, sneak_spread: 0.01, ammoRate: 8, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "svt", shootMode: "unauto", unautoDelayTicks: 5, reloadTime: 4 },
    "ate:sv98k": { name: "sv98", spread: 0.13, sneak_spread: 0, ammoRate: 9, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "sv98", shootMode: "unauto", unautoDelayTicks: 39, reloadTime: 5.25 },
    "ate:pkmk": { name: "pkm", rpm: 600, spread: 0.1, sneak_spread: 0.02, ammoRate: 9, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "pkm", removableGrip: true, removableLaser: true, reloadTime: 5.6 },
    "ate:pkpk": { name: "pkp", rpm: 600, spread: 0.07, sneak_spread: 0.01, ammoRate: 9, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "pkp", removableGrip: true, removableLaser: true, reloadTime: 5.6 },
    "ate:svdk": { name: "svd", spread: 0.11, sneak_spread: 0, ammoRate: 9, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "svd", shootMode: "unauto", unautoDelayTicks: 5, removableGrip: true, reloadTime: 4 },
    "ate:mxk": { name: "mx", spread: 0.15, sneak_spread: 0, ammoRate: 9, caliber: "7.62x54", oneLevelAmmo: "hp", gun_type: "mx", shootMode: "unauto", unautoDelayTicks: 20, reloadTime: 3 },
    "ate:axmck": { name: "axmc", spread: 0.21, sneak_spread: 0.0, ammoRate: 10, caliber: "338", oneLevelAmmo: "fmj", gun_type: "axmc", shootMode: "unauto", unautoDelayTicks: 40, reloadTime: 5.25 },
    "ate:ar30a1k": { name: "ar30a1", spread: 0.19, sneak_spread: 0.0, ammoRate: 10, caliber: "338", oneLevelAmmo: "fmj", gun_type: "ar30a1", shootMode: "unauto", unautoDelayTicks: 40, reloadTime: 5.25 },
    "ate:mk18k": { name: "mk18", spread: 0.15, sneak_spread: 0.0, ammoRate: 10, caliber: "338", oneLevelAmmo: "fmj", gun_type: "mk18", shootMode: "unauto", unautoDelayTicks: 5, removableGrip: true, reloadTime: 4 },
    "ate:ax50k": { name: "ax50", spread: 0.21, sneak_spread: 0.0, ammoRate: 12, caliber: "12.7x99", oneLevelAmmo: "hp", gun_type: "ax50", shootMode: "unauto", unautoDelayTicks: 40, reloadTime: 5.25 },
    "ate:m82k": { name: "m82", spread: 0.18, sneak_spread: 0.0, ammoRate: 12, caliber: "12.7x99", oneLevelAmmo: "hp", gun_type: "m82a3", shootMode: "unauto", unautoDelayTicks: 12, reloadTime: 4 },
    "ate:ppsh41k": { name: "ppsh41", rpm: 1000, spread: 0.05, sneak_spread: 0.02, ammoRate: 5, caliber: "7.62x25", oneLevelAmmo: "lrn", gun_type: "ppsh41", reloadTime: 4 },
    "ate:t79k": { name: "t79", rpm: 1000, spread: 0.04, sneak_spread: 0.02, ammoRate: 5, caliber: "7.62x25", oneLevelAmmo: "lrn", gun_type: "t79", reloadTime: 4 },
    "ate:tt33k": { name: "tt33", spread: 0.08, sneak_spread: 0.01, ammoRate: 5, caliber: "7.62x25", oneLevelAmmo: "lrn", gun_type: "tt33", shootMode: "unauto", unautoDelayTicks: 2, removableGrip: true, reloadTime: 2.3 },
    "ate:vssk": { name: "vss", rpm: 900, spread: 0.03, sneak_spread: 0.01, ammoRate: 6, caliber: "9x39", oneLevelAmmo: "fmj", gun_type: "vss", removableGrip: true, reloadTime: 4 },
    "ate:vss2k": { name: "vss2", rpm: 900, spread: 0.02, sneak_spread: 0.01, ammoRate: 6, caliber: "9x39", oneLevelAmmo: "fmj", gun_type: "vss2", removableGrip: true, reloadTime: 4 },
    "ate:asvalk": { name: "asval", rpm: 900, spread: 0.02, sneak_spread: 0.01, ammoRate: 6, caliber: "9x39", oneLevelAmmo: "fmj", gun_type: "asval", removableGrip: true, reloadTime: 4 },
    "ate:sr3mk": { name: "sr3m", rpm: 900, spread: 0.01, sneak_spread: 0.01, ammoRate: 5, caliber: "9x39", oneLevelAmmo: "fmj", gun_type: "sr3m", removableGrip: true, reloadTime: 4 },
    "ate:kbp9a91k": { name: "kbp9a91", rpm: 700, spread: 0.07, sneak_spread: 0.03, ammoRate: 5, caliber: "9x39", oneLevelAmmo: "fmj", gun_type: "9a91", reloadTime: 4 },
    "ate:kbpvsk94k": { name: "kbpvsk94", rpm: 700, spread: 0.08, sneak_spread: 0.02, ammoRate: 5, caliber: "9x39", oneLevelAmmo: "fmj", gun_type: "vsk94", reloadTime: 4 },
    "ate:qbz03k": { name: "qbz03", rpm: 700, spread: 0.06, sneak_spread: 0.02, ammoRate: 8, caliber: "5.8x42", oneLevelAmmo: "dbp10", gun_type: "qbz03", reloadTime: 3 },    
    "ate:qbz032k": { name: "qbz032", rpm: 700, spread: 0.06, sneak_spread: 0.02, ammoRate: 8, caliber: "5.8x42", oneLevelAmmo: "dbp10", gun_type: "qbz032", reloadTime: 3 },
    "ate:qbz95k": { name: "qbz95", rpm: 650, sneak_spread: 0.01, spread: 0.09, ammoRate: 8, caliber: "5.8x42", oneLevelAmmo: "dbp10", gun_type: "qbz95", removableGrip: true, reloadTime: 3 },
    "ate:qbz191k": { name: "qbz191", rpm: 750, sneak_spread: 0.01, spread: 0.03, ammoRate: 8, caliber: "5.8x42", oneLevelAmmo: "dbp10", gun_type: "qbz191", removableGrip: true, reloadTime: 3 },
    "ate:qbu191k": { name: "qbu191", rpm: 750, sneak_spread: 0.00, spread: 0.05, ammoRate: 9, caliber: "5.8x42", oneLevelAmmo: "dbp10", gun_type: "qbu191", removableGrip: true, reloadTime: 3 },
    "ate:qbu88k": { name: "qbu88", spread: 0.06, sneak_spread: 0.00, ammoRate: 9, caliber: "5.8x42", oneLevelAmmo: "dbp10", gun_type: "qbu88", shootMode: "unauto", unautoDelayTicks: 2, reloadTime: 4 },
    "ate:aa12k": { name: "aa12", rpm: 330, sneak_spread: 0.01, spread: 0.04, ammoRate: 3, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "aa12", reloadTime: 4 },
    "ate:u12k": { name: "u12", rpm: 250, sneak_spread: 0.03, spread: 0.06, ammoRate: 3, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "u12", reloadTime: 4 },
    "ate:dp12k": { name: "dp12", spread: 0.03, sneak_spread: 0.01, ammoRate: 4, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "dp12", shootMode: "unauto", unautoDelayTicks: 24, spshoot: 2, reloadTime: 7 },
    "ate:m870k": { name: "m870", spread: 0.03, sneak_spread: 0.01, ammoRate: 3, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "m870", shootMode: "unauto", unautoDelayTicks: 24, removableGrip: true, reloadTime: 4 },
    "ate:m1301k": { name: "m1301", spread: 0.03, sneak_spread: 0.01, ammoRate: 3, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "m1301", shootMode: "unauto", unautoDelayTicks: 1, removableGrip: true, reloadTime: 4 },
    "ate:mp133k": { name: "mp133", spread: 0.07, sneak_spread: 0.02, ammoRate: 3, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "mp133", shootMode: "unauto", unautoDelayTicks: 24, removableGrip: true, reloadTime: 4 },
    "ate:s12kk": { name: "s12k", spread: 0.06, sneak_spread: 0.04, ammoRate: 3, caliber: "12x70", oneLevelAmmo: "8.5mm鹿弹", gun_type: "s12k", shootMode: "unauto", unautoDelayTicks: 5, removableGrip: true, reloadTime: 4 },
    "ate:ks23mk": { name: "ks23m", spread: 0.02, sneak_spread: 0.01, ammoRate: 3, caliber: "23x75", oneLevelAmmo: "破片-10霰弹", gun_type: "ks23m", shootMode: "unauto", unautoDelayTicks: 24, removableGrip: true, reloadTime: 2.5 },
    "ate:mcxk": { name: "mcx", rpm: 800, sneak_spread: 0.01, spread: 0.05, ammoRate: 9, caliber: "6.8x51", oneLevelAmmo: "fmj", gun_type: "mcx", removableGrip: true, reloadTime: 4 },
    "ate:m250k": { name: "m250", rpm: 800, sneak_spread: 0.00, spread: 0.09, ammoRate: 8, caliber: "6.8x51", oneLevelAmmo: "fmj", gun_type: "m250", removableGrip: true, reloadTime: 5.0 },
    "ate:ash12k": { name: "ash12", rpm: 600, sneak_spread: 0.03, spread: 0.13, ammoRate: 7, caliber: "12.7x55", oneLevelAmmo: "ps12", gun_type: "ash12", removableGrip: true, removableLaser: true, reloadTime: 4 },
    "ate:m1894k": { name: "m1894", spread: 0.02, sneak_spread: 0.01, ammoRate: 6, caliber: "44", oneLevelAmmo: "lfnp", gun_type: "m1894", shootMode: "unauto", unautoDelayTicks: 13, removableGrip: true, reloadTime: 5 },
    "ate:dk": { name: "d", spread: 0.09, sneak_spread: 0.01, ammoRate: 6, caliber: "44", oneLevelAmmo: "lfnp", gun_type: "d", shootMode: "unauto", unautoDelayTicks: 5, removableGrip: true, reloadTime: 2.3 },
    "ate:m32k": { name: "m32", spread: 0.0, rpm: 240, sneak_spread: 0.0, ammoRate: 3, caliber: "40x46", oneLevelAmmo: "m576", gun_type: "m32", reloadTime: 6.6 },
    "ate:test": { name: "test", rpm: 700, spread: 0.09, sneak_spread: 0.03, ammoRate: 6, caliber: "7.62x51", oneLevelAmmo: "un", gun_type: "sa58", removableGrip: true, reloadTime: 3 }
};
//握把数值
const gripList = { "ate:w1": -0.01, "ate:w2": -0.01, "ate:w3": -0.06, "ate:w4": -0.03 };
//镭指数值
const gripListSneak = { "ate:w2": -0.04, "ate:w3": -0.01, "ate:w4": -0.03 };
const laserList = { "ate:potato": -1 };
// 玩家状态管理
const PLAYER_SHOOTING_STATES = {};
const gunAmmoType = {};
const playerUnautoShootState = {};
// 通过标签设置弹药类型
const RELOAD_TAG_PREFIX = "reload_";
function setAmmoTag(player) {
    const playerId = player.id;
    let reloaded = false;
    const inventory = player.getComponent("inventory");// 获取玩家当前手持物品
    const selectedItem = inventory.container.getItem(player.selectedSlotIndex);
    if (!selectedItem || !GUN_CONFIGS[selectedItem.typeId]) { return false; }// 检查手中是否是已配置的枪械
    const gunConfig = GUN_CONFIGS[selectedItem.typeId];
    const gunType = gunConfig.gun_type;
    // 检查玩家是否有换弹标签
    const tags = player.getTags();
    for (const tag of tags) {
        if (tag.startsWith(RELOAD_TAG_PREFIX)) {
            // 从标签中提取弹药类型
            const ammoType = tag.substring(RELOAD_TAG_PREFIX.length);
            // 看标签中子弹类型是否为当前枪械口径的弹药
            const caliberConfig = AMMO_CONFIG[gunConfig.caliber];
            if (caliberConfig.types[ammoType]) {
                // 设置弹药型号
                if (!gunAmmoType[playerId]) {
                    gunAmmoType[playerId] = {};
                }
                gunAmmoType[playerId][gunType] = ammoType;
                player.removeTag(tag); // 移除换弹标签
                reloaded = true;// 标记换弹成功
                break;
            }
        }
    }
    return reloaded;
}
//  获取当前枪械的弹药类型
function getCurrentAmmoType(player, gunConfig) {
    const playerId = player.id;
    const gunType = gunConfig.gun_type;
    // 如果玩家不存在弹药类型则重置子弹型号
    if (!gunAmmoType[playerId]) { gunAmmoType[playerId] = {}; }
    // 如果这把枪没有弹药型号，使用一级弹
    if (!gunAmmoType[playerId][gunType]) { gunAmmoType[playerId][gunType] = gunConfig.oneLevelAmmo; }
    return gunAmmoType[playerId][gunType];
}
// 循环检测标签
system.runInterval(() => {
    const players = world.getAllPlayers();
    for (const player of players) { setAmmoTag(player); }
}, 10);
// 双蹲检测弹药显示
const playerSneakState = {};
function viewing(player) {
    try {
        if (!player) return;
        const playerId = player.id;
        const now = Date.now();
        if (!playerSneakState[playerId]) playerSneakState[playerId] = { lastSneakTime: 0, timeoutRunId: null };
        const state = playerSneakState[playerId];
        const last = state.lastSneakTime || 0;
        const DOUBLE_SNEAK_WINDOW = 1000;// 双击延迟，单位ms
        if (last !== 0 && (now - last) <= DOUBLE_SNEAK_WINDOW) {
            // 清除超时任务
            try { if (state.timeoutRunId) { system.clearRun(state.timeoutRunId); state.timeoutRunId = null; } } catch (e) { }
            try {
                const inventory = player.getComponent('inventory');
                const selectedItem = inventory?.container?.getItem(player.selectedSlotIndex);
                const itemId = selectedItem?.typeId;
                const aaa = itemId ? (AMMO_CONFIG[GUN_CONFIGS[itemId]?.caliber]?.types[gunAmmoType[playerId]?.[GUN_CONFIGS[itemId]?.gun_type]] ? gunAmmoType[playerId][GUN_CONFIGS[itemId].gun_type] : GUN_CONFIGS[itemId].oneLevelAmmo) : "无枪械";
                const property = player.getProperty('ate:gun');
                const DP = player.getDynamicProperty(itemId);

                if (itemId && GUN_CONFIGS[itemId]) {
                    const gunName = GUN_CONFIGS[itemId].name;
                    const safePlayerName = player.name.replace(/"/g, '\\"');
                    const safeObjective = String(gunName).replace(/"/g, '\\"');
                    const rawJson = JSON.stringify({ rawtext: [{ text: `子弹型号: ${aaa} | 剩余: ` }, { score: { name: safePlayerName, objective: safeObjective } }, { text: "发" }, { text: ` property: ${property} , DP:${DP}` }] });
                    player.runCommand(`titleraw @s actionbar ${rawJson}`);
                }
            } catch (e) { }
            // 重置状态
            state.lastSneakTime = 0;
            return;
        }
        state.lastSneakTime = now;
        try {
            if (state.timeoutRunId) system.clearRun(state.timeoutRunId);
        } catch (e) { }
        try {
            state.timeoutRunId = system.runTimeout(() => {
                // 超时未按下第二次，重置状态
                state.lastSneakTime = 0;
                state.timeoutRunId = null;
            }, DOUBLE_SNEAK_WINDOW);
        } catch (e) { }
    } catch (e) { }
}
// 蹲下检测
if (world.afterEvents && world.afterEvents.input && typeof world.afterEvents.input.subscribe === 'function') {
    try {
        world.afterEvents.input.subscribe((ev) => {
            try {
                const player = ev.source || ev.player || ev.entity;
                const input = ev.input || ev;
                if (!player || !input) return;
                const button = input.button;
                const pressed = input.pressed || input.isPressed || input.down || false;
                if (!pressed) return;
                const bStr = (typeof button === 'string') ? button.toLowerCase() : String(button).toLowerCase();
                if (bStr.includes('sneak') || bStr.includes('crouch') || bStr.includes('sneak_button') || bStr.includes('crouch_button') || bStr.includes('touch')) {
                    viewing(player);
                }
            } catch (e) { }
        });
    } catch (e) { }
}
// 物品开始使用事件
world.afterEvents.itemStartUse.subscribe((event) => {
    const { source: player, itemStack } = event;
    const itemId = itemStack.typeId;
    if (!GUN_CONFIGS[itemId]) return;
    let gunState = player.getDynamicProperty(itemId);
    if (gunState === undefined) { gunState = 3; player.setDynamicProperty(itemId, gunState); }
    const gunConfig = GUN_CONFIGS[itemId];
    player.setProperty('ate:gun', gunState); // 设置当前枪械属性

    if (gunState === 4) {
        startShoot(player, gunConfig);
    } else if (gunState === 3) {
        // 换弹逻辑
        const oldId = player.getDynamicProperty('ate:reload');
        if (oldId) system.clearRun(oldId);
        const reloadFunction = `function reload/${gunConfig.name}`;
        const newReloadId = system.runTimeout(() => {

            const inventory = player.getComponent('inventory');
            const heldItem = inventory?.container?.getItem(player.selectedSlotIndex);
            const currentGunId = heldItem?.typeId;
            if (currentGunId === itemId) player.runCommand(reloadFunction);
            player.setDynamicProperty('ate:reload', undefined);
            let findTag = false;
            const checkIntervalId = system.runInterval(() => {
                const currentTags = player.getTags?.() || [];
                if (currentTags.includes('allowReload')) {
                    system.clearRun(checkIntervalId);
                    findTag = true;
                    player.setDynamicProperty(itemId, 4);
                    player.setProperty('ate:gun', 4)
                    player.removeTag('allowReload');
                }
            }, 2);
            system.runTimeout(() => { if (!findTag) { system.clearRun(checkIntervalId); } }, 20);
        }, gunConfig.reloadTime * 20);
        player.setDynamicProperty('ate:reload', newReloadId);
    }
});
// 物品停止使用事件
world.afterEvents.itemStopUse.subscribe((event) => {
    const { source: player, itemStack } = event;
    const itemId = itemStack.typeId;
    if (!GUN_CONFIGS[itemId]) return;
    const gunState = player.getDynamicProperty(itemId);
    if (gunState === 4) {
        stopShoot(player);
    }
    /*else if (gunState === 3) {
        const cancelReloadId = player.getDynamicProperty('ate:reload');
        if (cancelReloadId) { system.clearRun(cancelReloadId); player.setDynamicProperty('ate:reload', undefined); }
    }*/
});
//开始射击函数
function startShoot(player, gunConfig) {
    const playerId = player.id;
    // 安全锁
    const inventory = player.getComponent('inventory');
    const heldItem = inventory?.container?.getItem(player.selectedSlotIndex);
    const currentGunId = heldItem?.typeId;
    if (!currentGunId || !GUN_CONFIGS[currentGunId]) { return; }
    const currentGunState = player.getDynamicProperty(currentGunId);
    if (currentGunState !== 4) {
        if (PLAYER_SHOOTING_STATES[playerId]) {
            const oldState = PLAYER_SHOOTING_STATES[playerId];
            if (oldState.intervalId) { system.clearRun(oldState.intervalId); }
            delete PLAYER_SHOOTING_STATES[playerId];
        }
        playerUnautoShootState[playerId] = true;
        return;
    }

    if (PLAYER_SHOOTING_STATES[playerId]) {
        const existingState = PLAYER_SHOOTING_STATES[playerId];
        if (existingState.intervalId) { system.clearRun(existingState.intervalId); }
        delete PLAYER_SHOOTING_STATES[playerId];
    }
    const rpm = gunConfig.rpm;
    const baseIntervalTicks = firingRate(rpm);
    const state = {
        gunConfig: gunConfig,
        baseInterval: baseIntervalTicks,
        shotCount: 0,
        lastFireTime: Date.now(),
        startTime: Date.now(),
        intervalId: null,
        actionbarId: null,
        shouldStop: false // 停止标志
    };
    PLAYER_SHOOTING_STATES[playerId] = state;
    // 右键瞬发部分
    const currentAmmoType = getCurrentAmmoType(player, gunConfig);
    const caliberConfig = AMMO_CONFIG[gunConfig.caliber];
    const ammoVersionType = caliberConfig.types[currentAmmoType];
    if (playerUnautoShootState[playerId] === undefined) { playerUnautoShootState[playerId] = true; }
    // 半自动模式
    if (gunConfig.shootMode === "unauto") {
        if (playerUnautoShootState[playerId]) {
            if (gunConfig.spshoot === 3) {
                shootAmmo(player, ammoVersionType, gunConfig);
                try {
                    system.runTimeout(() => { try { shootAmmo(player, ammoVersionType, gunConfig); } catch (e) { } }, 2);
                    system.runTimeout(() => { try { shootAmmo(player, ammoVersionType, gunConfig); } catch (e) { } }, 4);
                } catch (e) { };
                state.shotCount += 3;
            } else if (gunConfig.spshoot === 2) {
                shootAmmo(player, ammoVersionType, gunConfig);
                try { system.runTimeout(() => { try { shootAmmo(player, ammoVersionType, gunConfig); } catch (e) { } }, 2); } catch (e) { }
            } else {
                shootAmmo(player, ammoVersionType, gunConfig); state.shotCount++;
            }
            state.lastFireTime = Date.now();
            playerUnautoShootState[playerId] = false;
            const unautoDelay = gunConfig.unautoDelayTicks;
            system.runTimeout(() => { playerUnautoShootState[playerId] = true; }, unautoDelay);
        } else { return; } return;
    } else { shootAmmo(player, ammoVersionType, gunConfig); state.shotCount++; state.lastFireTime = Date.now(); }
    //调试用，使用时删掉前面的两条斜杠↓↓↓↓↓↓↓↓↓↓
    //world.sendMessage(`当前弹药类型：${ammoVersionType}`);
    //world.sendMessage(`当前手持枪械：${gunConfig.name}`)
    // ========== 启动射击循环 ==========
    state.intervalId = system.runInterval(() => {
        // 检查是否应该停止
        if (state.shouldStop) {
            system.clearRun(state.intervalId);
            delete PLAYER_SHOOTING_STATES[playerId];
            return;
        }
        // 检查枪械状态
        const checkGunState = player.getDynamicProperty(currentGunId);
        if (checkGunState !== 4) {
            state.shouldStop = true;
            system.clearRun(state.intervalId);
            delete PLAYER_SHOOTING_STATES[playerId];
            return;
        }
        const now = Date.now();
        const timeSinceLastShot = now - state.lastFireTime;
        const expectedTimeBetweenShots = (60 / rpm) * 1000;
        // 动态调整：如果距离上次发射时间足够，就发射
        if (timeSinceLastShot >= expectedTimeBetweenShots * 0.8) {
            const currentAmmoType = getCurrentAmmoType(player, gunConfig);
            const caliberConfig = AMMO_CONFIG[gunConfig.caliber];
            const ammoVersionType = caliberConfig.types[currentAmmoType];
            shootAmmo(player, ammoVersionType, gunConfig, state); // 发射子弹
            state.shotCount++;
            state.lastFireTime = now;
            // 每10发检查射速调整
            if (state.shotCount % 10 === 0) { adjustFireRate(player, gunConfig, state); }
        }
    }, baseIntervalTicks);
}
// 发射子弹函数
function shootAmmo(player, ammoVersionType, gunConfig, shootingState) {
    // 检查弹药数量
    const scoreboard = world.scoreboard;
    const scoreboardName = gunConfig.name;
    const scoreboardValue = scoreboard.getObjective(scoreboardName);
    const inventory = player.getComponent('inventory');
    const heldItem = inventory?.container?.getItem(player.selectedSlotIndex);
    const currentGunId = heldItem?.typeId;
    if (scoreboardValue) {
        const playerIdentity = player.scoreboardIdentity;
        if (playerIdentity) {
            const playerScore = scoreboardValue.getScore(playerIdentity);
            // 如果弹药为0或更少，触发换弹
            if (playerScore == undefined) {
                player.setProperty('ate:gun', 3);
                player.setDynamicProperty(currentGunId, 3);
                const playerN = player.name
                const scoName = GUN_CONFIGS[currentGunId].name
                const zl = 'scoreboard players add ' + playerN + ' ' + scoName + ' 0'
                player.runCommand(zl)
                return;
            }
            if (playerScore !== undefined && playerScore <= 0) {
                // 立即设置状态为3
                if (currentGunId) {
                    player.setProperty('ate:gun', 3);
                    player.setDynamicProperty(currentGunId, 3);
                    // 标记射击状态为停止
                    if (shootingState) { shootingState.shouldStop = true; }
                    // 3立即停止当前玩家的射击循环
                    const playerId = player.id;
                    if (PLAYER_SHOOTING_STATES[playerId]) {
                        const state = PLAYER_SHOOTING_STATES[playerId];
                        if (state.intervalId) { system.clearRun(state.intervalId); }
                        delete PLAYER_SHOOTING_STATES[playerId];
                    }
                    //  重置半自动状态
                    return; // 直接返回，不执行后续射击
                }
            }
        }
    }

    // 正常射击
    const viewDirection = player.getViewDirection();
    const gripPosition = player.getComponent("inventory")?.container?.getItem(3)?.typeId;
    const laserPosition = player.getComponent("inventory")?.container?.getItem(5)?.typeId;
    let spread = gunConfig.spread || 0;
    try {
        if (gripPosition in gripList && gunConfig.removableGrip === true) { spread += gripList[gripPosition]; }
        if (laserPosition in laserList && gunConfig.removableLaser === true) { spread += laserList[laserPosition]; }
        //检测握把位是否为握把且检测枪械是否可装，若为ture则将基本值spread加上握把的腰射值,镭指同前
        if (spread < 0) spread = 0 //当散布为负数时改为0
        const tags = player.getTags ? player.getTags() : [];
        if (tags && tags.includes && tags.includes('sneak') && gunConfig.sneak_spread !== undefined) {
            spread = gunConfig.sneak_spread;
            const gripPositionSneak = player.getComponent("inventory")?.container?.getItem(3)?.typeId;
            if (gripPositionSneak in gripListSneak) { spread += gripListSneak[gripPositionSneak]; }
            if (spread < 0) spread = 0;
        }
    } catch (e) { }
    // 计算散布方向
    const spreadDirection = { x: viewDirection.x + (Math.random() - 0.5) * spread, y: viewDirection.y + (Math.random() - 0.5) * spread, z: viewDirection.z + (Math.random() - 0.5) * spread };
    const length = Math.sqrt(spreadDirection.x * spreadDirection.x + spreadDirection.y * spreadDirection.y + spreadDirection.z * spreadDirection.z);
    const normalizedDirection = { x: spreadDirection.x / length, y: spreadDirection.y / length, z: spreadDirection.z / length };
    const playerLocation = player.location;// 子弹生成位置
    const eyePosition = { x: playerLocation.x, y: playerLocation.y + 1.3, z: playerLocation.z };
    // 根据朝向调整生成偏移，向下射击时增大偏移，减少生成时与玩家重叠的概率
    let spawnOffset = 1.0;
    if (viewDirection.y < -0.7) spawnOffset = 1.8;// 向下看较陡时增大偏移
    else if (viewDirection.y < -0.4) spawnOffset = 1.4;// 中等向下角度
    const ammoVersionPosition = { x: eyePosition.x + normalizedDirection.x * spawnOffset, y: eyePosition.y + normalizedDirection.y * spawnOffset, z: eyePosition.z + normalizedDirection.z * spawnOffset };
    const dimension = player.dimension;//在子弹生成位置生成子弹
    const ammoVersion = dimension.spawnEntity(ammoVersionType, ammoVersionPosition);
    const velocityMultiplier = gunConfig.ammoRate; //给子弹施加冲量
    try {
        if (ammoVersion && typeof ammoVersion.applyImpulse === 'function') {
            ammoVersion.applyImpulse({
                x: normalizedDirection.x * velocityMultiplier, y: normalizedDirection.y * velocityMultiplier, z: normalizedDirection.z * velocityMultiplier
            });
        }
    } catch (e) { }
    // 执行射击函数
    try { const fireFunction = `function gun/${gunConfig.name}`; player.runCommand(fireFunction); } catch (error) { }


}
// 辅助停止函数
function stopShoot(player) {
    const playerId = player.id;
    const state = PLAYER_SHOOTING_STATES[playerId];
    if (state) {
        if (state.intervalId) { system.clearRun(state.intervalId); }
        try { if (state.actionbarId) { system.clearRun(state.actionbarId); } } catch (e) { }
        delete PLAYER_SHOOTING_STATES[playerId];
    }
}
function firingRate(rpm) {
    const ticksPerSecond = 20;
    const shotsPerSecond = rpm / 60;
    const baseInterval = Math.max(1, Math.round(ticksPerSecond / shotsPerSecond));
    return baseInterval;
}
function adjustFireRate(player, gunConfig, state) {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - state.startTime) / 1000;
    const actualRpm = (state.shotCount / elapsedTime) * 60;
    const targetRpm = gunConfig.rpm;
    const deviation = (actualRpm - targetRpm) / targetRpm;
    if (Math.abs(deviation) > 0.1) {
        let adjustmentFactor = 1 - (deviation * 0.3);
        adjustmentFactor = Math.max(0.5, Math.min(1.5, adjustmentFactor));
        const newBaseInterval = Math.max(1, Math.round(state.baseInterval * adjustmentFactor));
        if (newBaseInterval !== state.baseInterval) {
            try { system.clearRun(state.intervalId); } catch (e) { }
            state.baseInterval = newBaseInterval;
            state.startTime = Date.now();
            state.shotCount = 0;
            // 重新启动射击循环
            const playerId = player.id;
            const inventory = player.getComponent('inventory');
            const heldItem = inventory?.container?.getItem(player.selectedSlotIndex);
            const currentGunId = heldItem?.typeId;
            state.intervalId = system.runInterval(() => {
                if (state.shouldStop) {
                    system.clearRun(state.intervalId);
                    delete PLAYER_SHOOTING_STATES[playerId];
                    return;
                }
                const checkGunState = player.getDynamicProperty(currentGunId);
                if (checkGunState !== 4) {
                    state.shouldStop = true;
                    system.clearRun(state.intervalId);
                    delete PLAYER_SHOOTING_STATES[playerId];
                    return;
                }
                const now = Date.now();
                const timeSinceLastShot = now - state.lastFireTime;
                const expectedTimeBetweenShots = (60 / targetRpm) * 1000;
                if (timeSinceLastShot >= expectedTimeBetweenShots * 0.8) {
                    const currentAmmoType = getCurrentAmmoType(player, gunConfig);
                    const caliberConfig = AMMO_CONFIG[gunConfig.caliber] || {};
                    const ammoVersionType = (caliberConfig.types && caliberConfig.types[currentAmmoType]) ? caliberConfig.types[currentAmmoType] : caliberConfig.types && Object.values(caliberConfig.types)[0];
                    if (ammoVersionType) {
                        shootAmmo(player, ammoVersionType, gunConfig, state);
                        state.shotCount++;
                        state.lastFireTime = now;
                        if (state.shotCount % 10 === 0) { adjustFireRate(player, gunConfig, state); }
                    }
                }
            }, newBaseInterval);
        }
    }
}
// 蹲下按钮检测
if (world.afterEvents && world.afterEvents.playerButtonInput && typeof world.afterEvents.playerButtonInput.subscribe === 'function') {
    world.afterEvents.playerButtonInput.subscribe((event) => {
        try {
            const btn = event.button;
            const state = event.newButtonState;
            const btnStr = String(btn).toLowerCase();
            const stateStr = String(state).toLowerCase();
            if (stateStr === 'pressed') {
                if (btnStr.includes('sneak')) {
                    const player = event.player;
                    if (player) viewing(player);
                }
            }
        } catch (e) { }
    });
}
// 调试
world.afterEvents.itemStartUse.subscribe((event) => {
    try {
        const player = event.source || event.player || event.entity;
        const itemId = event.itemStack?.typeId || event.item?.typeId;
        if (!player || !itemId) return;
        const gunId = player.getComponent('inventory')?.container?.getItem(0)?.typeId;
        if (!gunId) { return; }
        // 仅在该物品属于 GUN_CONFIGS 时才设置属性
        if (!GUN_CONFIGS[gunId]) { return; }
        let newValue = null;
        if (itemId === 'minecraft:apple') {
            newValue = 1;
            try { world.sendMessage("开始设置DP3"); player.setDynamicProperty(gunId, 3); world.sendMessage("设置DP3成功"); } catch (e) { world.sendMessage("设置DP3失败"); }
            const gunState = player.getDynamicProperty(gunId);
            const zl = "scoreboard players set @s DP " + gunState
            world.sendMessage(zl);
            player.runCommand(zl);
            try { player.setProperty('ate:gun', gunState); } catch (e) { world.sendMessage("设置ate:gun为gunId的DP3失败"); }
        } else if (itemId === 'minecraft:bread') {
            newValue = 2;
            try {
                world.sendMessage("开始设置DP4"); player.setDynamicProperty(gunId, 4); world.sendMessage("设置DP4成功");
            } catch (e) { world.sendMessage("设置DP4失败"); }
            const gunState = player.getDynamicProperty(gunId);
            const zl = "scoreboard players set @s DP " + gunState
            world.sendMessage(zl);
            player.runCommand(zl);
            try { player.setProperty('ate:gun', gunState); } catch (e) { world.sendMessage("设置ate:gun为gunId的DP4失败"); }
        }
        if (newValue === null) return;
        player.sendMessage(`已将 ate:gun 的属性设置为 ${newValue} 并同步到 ate:gunState`);
        // 小延迟后确认（调试信息）
        system.runTimeout(() => { try { const currentVal = player.getProperty('ate:gun'); world.sendMessage(`[调试] ${player.name} 的属性 ate:gun 当前值: ${currentVal}`); } catch (e) { } }, 2);
    } catch (e) { }
});

system.runInterval(() => {
    const players = world.getAllPlayers();
    for (const player of players) {
        const Tags = player.getTags?.() || [];
        if (Tags.includes('allowFire')) {
            player.setProperty('ate:gun', 4);
            try { player.removeTag('allowFire'); } catch (e) { }
        }
    }
}, 2)


world.afterEvents.itemStopUse.subscribe((event) => {
    const { source: player, itemStack } = event;
    const itemId = itemStack.typeId;
    if (itemId !== "minecraft:spyglass") return;

    const viewDirection = player.getViewDirection();
    const spreadDirection = { x: viewDirection.x, y: viewDirection.y, z: viewDirection.z };
    const length = Math.sqrt(spreadDirection.x * spreadDirection.x + spreadDirection.y * spreadDirection.y + spreadDirection.z * spreadDirection.z);
    const normalizedDirection = { x: spreadDirection.x / length, y: spreadDirection.y / length, z: spreadDirection.z / length };

    const playerLocation = player.location;// 子弹生成位置
    const eyePosition = { x: playerLocation.x, y: playerLocation.y + 1.4, z: playerLocation.z };
    const ammoVersionPosition = { x: eyePosition.x + normalizedDirection.x, y: eyePosition.y + normalizedDirection.y, z: eyePosition.z + normalizedDirection.z };

    const dimension = player.dimension;//在子弹生成位置生成子弹
    const ammoVersion = dimension.spawnEntity("ate:rpg_bullet", ammoVersionPosition);
    const velocityMultiplier = 0.2; //给子弹施加冲量
    try {
        if (ammoVersion && typeof ammoVersion.applyImpulse === 'function') {
            ammoVersion.applyImpulse({
                x: normalizedDirection.x * velocityMultiplier, y: normalizedDirection.y * velocityMultiplier, z: normalizedDirection.z * velocityMultiplier
            });
        }
    } catch (e) { }

});  