export const Pokedex: {[speciesid: string]: SpeciesData} = {
	grasselectric: {
		num: 1,
		name: "grasselectric",
		types: ["Grass", "Electric"],
		baseStats: {hp: 80, atk: 80, def: 90, spa: 105, spd: 90, spe: 80},
		abilities: {0: "Overgrow", H: "Poison Heal"},
	},
	firerock: {
		num: 2,
		name: "firerock",
		types: ["Fire", "Rock"],
		baseStats: {hp: 70, atk: 85, def: 80, spa: 85, spd: 80, spe: 125},
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
	waterghost: {
		num: 3,
		name: "waterghost",
		types: ["Water", "Ghost"],
		baseStats: {hp: 90, atk: 85, def: 70, spa: 105, spd: 105, spe: 70},
		abilities: {0: "Torrent", H: "Prankster"},
	},
	darkpoison: {
		num: 4,
		name: "darkpoison",
		types: ["Dark", "Poison"],
		baseStats: {hp: 200, atk: 100, def: 50, spa: 75, spd: 50, spe: 25},
		abilities: {0: "Pickup", 1: "Shed Skin", H: "Stakeout"},
	},
	normalpsychic: {
		num: 5,
		name: "normalpsychic",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 100, atk: 50, def: 100, spa: 100, spd: 100, spe: 50},
		abilities: {0: "Pickup", 1: "Water Absorb", H: "All-Seeing Eye"},
	},
	fightingflying: {
		num: 6,
		name: "fightingflying",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 64, atk: 96, def: 74, spa: 96, spd: 74, spe: 96},
		abilities: {0: "Keen Eye", 1: "Vital Spirit", H: "Gale Wings"},
	},
	bugice: {
		num: 7,
		name: "bugice",
		types: ["Bug", "Ice"],
		baseStats: {hp: 60, atk: 108, def: 80, spa: 80, spd: 60, spe: 112},
		abilities: {0: "Swarm", 1: "Hyper Cutter", H: "Tinted Lens"},
		otherFormes: ["bugice-Mega"],
		formeOrder: ["bugice", "bugice-Mega"],
	},
	bugicemega: {
		num: 7,
		name: "bugice-Mega",
		baseSpecies: "bugice",
		types: ["Bug", "Ice"],
		baseStats: {hp: 60, atk: 148, def: 90, spa: 80, spd: 80, spe: 142},
		abilities: {0: "Magic Guard"},
		requiredItem: ["Pidgeotite"],
		battleOnly: "bugice",
	},
	bugpsychic: {
		num: 8,
		name: "bugpsychic",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 82, atk: 60, def: 80, spa: 115, spd: 85, spe: 78},
		abilities: {0: "Swarm", 1: "Insomnia", H: "Tinted Lens"},
		otherFormes: ["bugpsychic-Mega"],
		formeOrder: ["bugpsychic", "bugpsychic-Mega"],
	},
	bugpsychicmega: {
		num: 8,
		name: "bugpsychic-Mega",
		baseSpecies: "bugpsychic",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 82, atk: 70, def: 100, spa: 155, spd: 105, spe: 88},
		abilities: {0: "Speed Boost"},
		requiredItem: ["Alakazite"],
		battleOnly: "bugpsychic",
	},
	grassfairy: {
		num: 9,
		name: "grassfairy",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 85, atk: 45, def: 95, spa: 115, spd: 95, spe: 65},
		abilities: {0: "Chlorophyll", H: "Thick Fat"},
	},
	grassfire: {
		num: 10,
		name: "grassfire",
		types: ["Grass", "Fire"],
		baseStats: {hp: 100, atk: 80, def: 100, spa: 100, spd: 75, spe: 45},
		abilities: {0: "Leaf Guard", H: "Drought"},
	},
	normalpoison: {
		num: 11,
		name: "normalpoison",
		types: ["Normal", "Poison"],
		baseStats: {hp: 90, atk: 66, def: 70, spa: 100, spd: 100, spe: 49},
		abilities: {0: "Run Away", 1: "Poison Point", H: "Analytic"},
		otherFormes: ["normalpoison-Mega"],
		formeOrder: ["normalpoison", "normalpoison-Mega"],
	},
	normalpoisonmega: {
		num: 11,
		name: "normalpoison-Mega",
		baseSpecies: "normalpoison",
		types: ["Normal", "Poison"],
		baseStats: {hp: 90, atk: 76, def: 100, spa: 130, spd: 130, spe: 49},
		abilities: {0: "Sheer Force"},
		requiredItem: ["Venusaurite"],
		battleOnly: "normalpoison",
	},
	groundfairy: {
		num: 12,
		name: "groundfairy",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 85, atk: 114, def: 75, spa: 50, spd: 65, spe: 86},
		abilities: {0: "Run Away", 1: "Sand Rush", H: "Light Power"},
		otherFormes: ["groundfairy-Mega"],
		formeOrder: ["groundfairy", "groundfairy-Mega"],
	},
	groundfairymega: {
		num: 12,
		name: "groundfairy-Mega",
		baseSpecies: "groundfairy",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 85, atk: 144, def: 135, spa: 50, spd: 105, spe: 56},
		abilities: {0: "Thick Fat"},
		requiredItem: ["Charizardite X"],
		battleOnly: "groundfairy",
	},
	bugelectric: {
		num: 13,
		name: "bugelectric",
		types: ["Bug", "Electric"],
		baseStats: {hp: 70, atk: 100, def: 68, spa: 95, spd: 85, spe: 82},
		abilities: {0: "Intimidate", H: "Drizzle"},
	},
	darkflying: {
		num: 14,
		name: "darkflying",
		types: ["Dark", "Flying"],
		baseStats: {hp: 110, atk: 104, def: 70, spa: 74, spd: 70, spe: 92},
		abilities: {0: "Early Bird", H: "Insectivore"},
	},
	fightingice: {
		num: 15,
		name: "fightingice",
		types: ["Fighting", "Ice"],
		baseStats: {hp: 83, atk: 87, def: 60, spa: 108, spd: 70, spe: 102},
		abilities: {0: "No Guard"},
	},
	fightingsteel: {
		num: 16,
		name: "fightingsteel",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 87, atk: 102, def: 108, spa: 60, spd: 70, spe: 83},
		abilities: {0: "Bulletproof"},
	},
	dragon: {
		num: 17,
		name: "dragon",
		types: ["Dragon"],
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
		abilities: {0: "Mold Breaker", 1: "Sheer Force", H: "Regenerator"},
	},
	steelflying: {
		num: 18,
		name: "steelflying",
		types: ["Steel", "Flying"],
		baseStats: {hp: 97, atk: 71, def: 101, spa: 97, spd: 83, spe: 61},
		abilities: {0: "Heavy Metal", 1: "Clear Body", H: "Industrialize"},
	},
	electricpoison: {
		num: 19,
		name: "electricpoison",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 35},
		abilities: {0: "Sticky Hold", 1: "Liquid Ooze", H: "Electric Surge"},
		otherFormes: ["electricpoison-Mega"],
		formeOrder: ["electricpoison", "electricpoison-Mega"],
	},
	electricpoisonmega: {
		num: 19,
		name: "electricpoison-Mega",
		baseSpecies: "electricpoison",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 120, def: 120, spa: 120, spd: 120, spe: 35},
		abilities: {0: "Levitate"},
		requiredItem: ["Charizardite Y"],
		battleOnly: "electricpoison",
	},
	ground: {
		num: 20,
		name: "ground",
		types: ["Ground"],
		baseStats: {hp: 90, atk: 116, def: 116, spa: 74, spd: 74, spe: 30},
		abilities: {0: "Sand Veil", 1: "Guts", H: "Intimidate"},
	},
	rockghost: {
		num: 21,
		name: "rockghost",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 75, atk: 85, def: 85, spa: 95, spd: 95, spe: 105},
		abilities: {0: "Keen Eye", 1: "Prankster", H: "Sand Stream"},
	},
	fairyflying: {
		num: 22,
		name: "fairyflying",
		types: ["Fairy", "Flying"],
		baseStats: {hp: 90, atk: 95, def: 70, spa: 100, spd: 95, spe: 90},
		abilities: {0: "Natural Cure", H: "Technician"},
	},
	electricsteel: {
		num: 23,
		name: "electricsteel",
		types: ["Electric", "Steel"],
		baseStats: {hp: 70, atk: 108, def: 70, spa: 108, spd: 70, spe: 94},
		abilities: {0: "Sturdy", H: "Up to Speed"},
	},
	rockgrass: {
		num: 24,
		name: "rockgrass",
		types: ["Rock", "Grass"],
		baseStats: {hp: 73, atk: 94, def: 83, spa: 102, spd: 89, spe: 89},
		abilities: {0: "Solid Rock", 1: "Storm Drain", H: "Unburden"},
	},
	fairydragon: {
		num: 25,
		name: "fairydragon",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 75, atk: 75, def: 75, spa: 110, spd: 100, spe: 60},
		abilities: {0: "Cute Charm", 1: "Aroma Veil", H: "Fur Coat"},
	},
	icepoison: {
		num: 26,
		name: "icepoison",
		types: ["Ice", "Poison"],
		baseStats: {hp: 78, atk: 86, def: 61, spa: 109, spd: 69, spe: 97},
		abilities: {0: "Ice Body", H: "Technician"},
	},
	icerock: {
		num: 27,
		name: "icerock",
		types: ["Ice", "Rock"],
		baseStats: {hp: 78, atk: 97, def: 86, spa: 59, spd: 71, spe: 109},
		abilities: {0: "Slush Rush", H: "Technician"},
	},
	normal: {
		num: 28,
		name: "normal",
		types: ["Normal"],
		baseStats: {hp: 84, atk: 118, def: 60, spa: 52, spd: 64, spe: 102},
		abilities: {0: "Pickup", 1: "Early Bird", H: "Poison Heal"},
		otherFormes: ["normal-Mega"],
		formeOrder: ["normal", "normal-Mega"],
	},
	normalmega: {
		num: 28,
		name: "normal-Mega",
		baseSpecies: "normal",
		types: ["Normal"],
		baseStats: {hp: 84, atk: 108, def: 120, spa: 52, spd: 124, spe: 52},
		abilities: {0: "Regenerator"},
		requiredItem: ["Slowbronite"],
		battleOnly: "normal",
	},
	normalfairy: {
		num: 29,
		name: "normalfairy",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 124, atk: 68, def: 50, spa: 102, spd: 74, spe: 62},
		abilities: {0: "Pickup", 1: "Competitive", H: "Tinted Lens"},
		otherFormes: ["normalfairy-Mega"],
		formeOrder: ["normalfairy", "normalfairy-Mega"],
	},
	normalfairymega: {
		num: 29,
		name: "normalfairy-Mega",
		baseSpecies: "normalfairy",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 124, atk: 68, def: 100, spa: 122, spd: 104, spe: 62},
		abilities: {0: "Immunity"},
		requiredItem: ["Gengarite"],
		battleOnly: "normalfairy",
	},
	bugfighting: {
		num: 30,
		name: "bugfighting",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 65, atk: 105, def: 60, spa: 55, spd: 80, spe: 135},
		abilities: {0: "Swarm", 1: "Steadfast", H: "Tough Claws"},
	},
	ghostdragon: {
		num: 31,
		name: "ghostdragon",
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 100, atk: 80, def: 90, spa: 80, spd: 90, spe: 60},
		abilities: {0: "Cursed Body", H: "Magic Bounce"},
	},
	waterground: {
		num: 32,
		name: "waterground",
		types: ["Water", "Ground"],
		baseStats: {hp: 90, atk: 100, def: 85, spa: 65, spd: 65, spe: 55},
		abilities: {0: "Pressure", 1: "Water Absorb", H: "Unaware"},
		otherFormes: ["waterground-Mega"],
		formeOrder: ["waterground", "waterground-Mega"],
	},
	watergroundmega: {
		num: 32,
		name: "waterground-Mega",
		baseSpecies: "waterground",
		types: ["Water", "Ground"],
		baseStats: {hp: 90, atk: 130, def: 125, spa: 65, spd: 80, spe: 75},
		abilities: {0: "Strong Jaw"},
		requiredItem: ["Blastoisinite"],
		battleOnly: "waterground",
	},
	watersteel: {
		num: 33,
		name: "watersteel",
		types: ["Water", "Steel"],
		baseStats: {hp: 101, atk: 100, def: 95, spa: 60, spd: 65, spe: 99},
		abilities: {0: "Water Veil", H: "Lightning Rod"},
	},
	fireground: {
		num: 34,
		name: "fireground",
		types: ["Fire", "Ground"],
		baseStats: {hp: 83, atk: 117, def: 83, spa: 67, spd: 83, spe: 77},
		abilities: {0: "Flame Body", 1: "Debilitate", H: "Evaporate"},
	},
	firenormal: {
		num: 35,
		name: "firenormal",
		types: ["Fire", "Normal"],
		baseStats: {hp: 144, atk: 100, def: 64, spa: 64, spd: 64, spe: 64},
		abilities: {0: "Iron Fist", H: "Flash Fire"},
	},
	grassnormal: {
		num: 36,
		name: "grassnormal",
		types: ["Grass", "Normal"],
		baseStats: {hp: 90, atk: 87, def: 70, spa: 87, spd: 70, spe: 106},
		abilities: {0: "Sap Sipper", H: "Grassy Surge"},
	},
	electric: {
		num: 37,
		name: "electric",
		types: ["Electric"],
		baseStats: {hp: 81, atk: 62, def: 73, spa: 106, spd: 84, spe: 114},
		abilities: {0: "Static", 1: "Lightning Rod", H: "Levitate"},
	},
	dragonpoison: {
		num: 38,
		name: "dragonpoison",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 99, atk: 54, def: 79, spa: 91, spd: 79, spe: 108},
		abilities: {0: "Shed Skin", H: "Adaptability"},
	},
	darkfairy: {
		num: 39,
		name: "darkfairy",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 151, atk: 83, def: 71, spa: 83, spd: 61, spe: 41},
		abilities: {0: "Stench", 1: "Misty Surge", H: "Neutralizing Gas"},
		otherFormes: ["darkfairy-Mega"],
		formeOrder: ["darkfairy", "darkfairy-Mega"],
	},
	darkfairymega: {
		num: 39,
		name: "darkfairy-Mega",
		baseSpecies: "darkfairy",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 151, atk: 123, def: 71, spa: 83, spd: 61, spe: 101},
		abilities: {0: "Industrialize"},
		requiredItem: ["Pinsirite"],
		battleOnly: "darkfairy",
	},
	poisonpsychic: {
		num: 40,
		name: "poisonpsychic",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 89, atk: 69, def: 89, spa: 115, spd: 99, spe: 29},
		abilities: {0: "Poison Touch", 1: "Rain Dish", H: "Lightning Rod"},
		otherFormes: ["poisonpsychic-Mega"],
		formeOrder: ["poisonpsychic", "poisonpsychic-Mega"],
	},
	poisonpsychicmega: {
		num: 40,
		name: "poisonpsychic-Mega",
		baseSpecies: "poisonpsychic",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 89, atk: 69, def: 119, spa: 135, spd: 129, spe: 49},
		abilities: {0: "Serene Grace"},
		requiredItem: ["Kangaskhanite"],
		battleOnly: "poisonpsychic",
	},
	darkrock: {
		num: 41,
		name: "darkrock",
		types: ["Dark", "Rock"],
		baseStats: {hp: 77, atk: 115, def: 75, spa: 75, spd: 75, spe: 93},
		abilities: {0: "Immunity", H: "Toxic Boost"},
		otherFormes: ["darkrock-Mega"],
		formeOrder: ["darkrock", "darkrock-Mega"],
	},
	darkrockmega: {
		num: 41,
		name: "darkrock-Mega",
		baseSpecies: "darkrock",
		types: ["Dark", "Fighting"],
		baseStats: {hp: 77, atk: 135, def: 125, spa: 85, spd: 85, spe: 103},
		abilities: {0: "Technician"},
		requiredItem: ["Mewtwonite X"],
		battleOnly: "darkrock",
	},
	poisonground: {
		num: 42,
		name: "poisonground",
		types: ["Poison", "Ground"],
		baseStats: {hp: 77, atk: 100, def: 65, spa: 100, spd: 65, spe: 103},
		abilities: {0: "Shed Skin", H: "Merciless"},
		otherFormes: ["poisonground-Mega"],
		formeOrder: ["poisonground", "poisonground-Mega"],
	},
	poisongroundmega: {
		num: 42,
		name: "poisonground-Mega",
		baseSpecies: "poisonground",
		types: ["Poison", "Ground"],
		baseStats: {hp: 77, atk: 120, def: 95, spa: 120, spd: 95, spe: 103},
		abilities: {0: "Gravitas"},
		requiredItem: ["Mewtwonite Y"],
		battleOnly: "poisonground",
	},
	rockpsychic: {
		num: 43,
		name: "rockpsychic",
		types: ["Rock", "Psychic"],
		baseStats: {hp: 77, atk: 67, def: 77, spa: 107, spd: 105, spe: 107},
		abilities: {0: "Levitate", H: "Magician"},
	},
	rockfighting: {
		num: 44,
		name: "rockfighting",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 77, atk: 115, def: 77, spa: 77, spd: 77, spe: 117},
		abilities: {0: "Levitate", H: "Sniper"},
	},
	water: {
		num: 45,
		name: "water",
		types: ["Water"],
		baseStats: {hp: 69, atk: 120, def: 90, spa: 60, spd: 90, spe: 101},
		abilities: {0: "Hydration", H: "Annihilate"},
	},
	waterelectric: {
		num: 46,
		name: "waterelectric",
		types: ["Water", "Electric"],
		baseStats: {hp: 61, atk: 50, def: 104, spa: 110, spd: 104, spe: 91},
		abilities: {0: "Volt Absorb", H: "Regenerator"},
	},
	dragonsteel: {
		num: 47,
		name: "dragonsteel",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 81, atk: 105, def: 84, spa: 105, spd: 84, spe: 81},
		abilities: {0: "Clear Body", 1: "Light Metal", H: "Levitate"},
	},
	psychicfighting: {
		num: 48,
		name: "psychicfighting",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 80, atk: 106, def: 60, spa: 106, spd: 60, spe: 88},
		abilities: {0: "Iron Fist", H: "Psychic Surge"},
	},
	bugsteel: {
		num: 49,
		name: "bugsteel",
		types: ["Bug", "Steel"],
		baseStats: {hp: 89, atk: 109, def: 89, spa: 73, spd: 89, spe: 71},
		abilities: {0: "Compound Eyes", H: "Filter"},
	},
	psychicdragon: {
		num: 50,
		name: "psychicdragon",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 99, atk: 107, def: 75, spa: 81, spd: 75, spe: 113},
		abilities: {0: "Strong Jaw"},
	},
	normalghost: {
		num: 51,
		name: "normalghost",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 81, atk: 86, def: 89, spa: 86, spd: 89, spe: 69},
		abilities: {0: "Cursed Body", 1: "Perish Body", H: "Pillage"},
	},
	darksteel: {
		num: 52,
		name: "darksteel",
		types: ["Dark", "Steel"],
		baseStats: {hp: 84, atk: 70, def: 88, spa: 126, spd: 90, spe: 72},
		abilities: {0: "Bulletproof", H: "Berserk"},
	},
	ghostground: {
		num: 53,
		name: "ghostground",
		types: ["Ghost", "Ground"],
		baseStats: {hp: 80, atk: 128, def: 100, spa: 45, spd: 80, spe: 42},
		abilities: {0: "Solid Rock", H: "Rock Head"},
		otherFormes: ["ghostground-Mega"],
		formeOrder: ["ghostground", "ghostground-Mega"],
	},
	ghostgroundmega: {
		num: 53,
		name: "ghostground-Mega",
		baseSpecies: "ghostground",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 80, atk: 168, def: 130, spa: 55, spd: 130, spe: 12},
		abilities: {0: "Rock Head"},
		requiredItem: ["Beedrillite"],
		battleOnly: "ghostground",
	},
	electricflying: {
		num: 54,
		name: "electricflying",
		types: ["Electric", "Flying"],
		baseStats: {hp: 80, atk: 85, def: 75, spa: 85, spd: 75, spe: 130},
		abilities: {0: "Motor Drive", H: "Reckless"},
	},
	grasspoison: {
		num: 55,
		name: "grasspoison",
		types: ["Grass", "Poison"],
		baseStats: {hp: 113, atk: 109, def: 67, spa: 113, spd: 71, spe: 47},
		abilities: {0: "Effect Spore", H: "Flash Fire"},
	},
	dragonfighting: {
		num: 56,
		name: "dragonfighting",
		types: ["Dragon", "Fighting"],
		baseStats: {hp: 87, atk: 93, def: 117, spa: 103, spd: 87, spe: 63},
		abilities: {0: "Soundproof", H: "Natural Cure"},
	},
	waterice: {
		num: 57,
		name: "waterice",
		types: ["Water", "Ice"],
		baseStats: {hp: 85, atk: 75, def: 80, spa: 109, spd: 50, spe: 111},
		abilities: {0: "Water Veil", 1: "Pixilate", H: "Absolute Zero"},
		otherFormes: ["waterice-Mega"],
		formeOrder: ["waterice", "waterice-Mega"],
	},
	watericemega: {
		num: 57,
		name: "waterice-Mega",
		baseSpecies: "waterice",
		types: ["Water", "Ice"],
		baseStats: {hp: 85, atk: 115, def: 80, spa: 129, spd: 90, spe: 111},
		abilities: {0: "Refrigerate"},
		requiredItem: ["Gyaradosite"],
		battleOnly: "waterice",
	},
	ghostflying: {
		num: 58,
		name: "ghostflying",
		types: ["Ghost", "Flying"],
		baseStats: {hp: 68, atk: 98, def: 70, spa: 98, spd: 70, spe: 116},
		abilities: {0: "Long Reach", H: "Magic Guard"},
	},
	bugdark: {
		num: 59,
		name: "bugdark",
		types: ["Bug", "Dark"],
		baseStats: {hp: 95, atk: 102, def: 95, spa: 50, spd: 50, spe: 118},
		abilities: {0: "Hyper Cutter", H: "Adaptability"},
	},
	iceground: {
		num: 60,
		name: "iceground",
		types: ["Ice", "Ground"],
		baseStats: {hp: 100, atk: 121, def: 85, spa: 85, spd: 60, spe: 79},
		abilities: {0: "Rough Skin", H: "Strong Jaw"},
	},
	bugwater: {
		num: 61,
		name: "bugwater",
		types: ["Bug", "Water"],
		baseStats: {hp: 74, atk: 102, def: 112, spa: 50, spd: 89, spe: 73},
		abilities: {0: "Swift Swim", H: "Magic Bounce"},
	},
	bugfire: {
		num: 62,
		name: "bugfire",
		types: ["Bug", "Fire"],
		baseStats: {hp: 73, atk: 50, def: 89, spa: 102, spd: 112, spe: 74},
		abilities: {0: "Solar Power", H: "Regenerator"},
	},
	grassice: {
		num: 63,
		name: "grassice",
		types: ["Grass", "Ice"],
		baseStats: {hp: 80, atk: 74, def: 98, spa: 102, spd: 76, spe: 120},
		abilities: {0: "Snow Warning", H: "Ice Scales"},
	},
	dragonground: {
		num: 64,
		name: "dragonground",
		types: ["Dragon", "Ground"],
		baseStats: {hp: 120, atk: 60, def: 101, spa: 101, spd: 60, spe: 68},
		abilities: {0: "Simple", 1: "Speed Boost", H: "Unburden"},
		otherFormes: ["dragonground-Mega"],
		formeOrder: ["dragonground", "dragonground-Mega"],
	},
	dragongroundmega: {
		num: 64,
		name: "dragonground-Mega",
		baseSpecies: "dragonground",
		types: ["Dragon", "Ground"],
		baseStats: {hp: 120, atk: 105, def: 121, spa: 95, spd: 121, spe: 48},
		abilities: {0: "Magic Bounce"},
		requiredItem: ["Aerodactylite"],
		battleOnly: "dragonground",
	},
	psychicfairy: {
		num: 65,
		name: "psychicfairy",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 92, atk: 114, def: 94, spa: 116, spd: 108, spe: 76},
		abilities: {0: "Immunity", 1: "Aroma Veil", H: "Poison Heal"},
	},
	grassflying: {
		num: 66,
		name: "grassflying",
		types: ["Grass", "Flying"],
		baseStats: {hp: 80, atk: 100, def: 130, spa: 100, spd: 75, spe: 115},
		abilities: {0: "Obliterate", H: "Aerilate"},
	},
	firepsychic: {
		num: 67,
		name: "firepsychic",
		types: ["Fire", "Psychic"],
		baseStats: {hp: 72, atk: 128, def: 90, spa: 110, spd: 85, spe: 95},
		abilities: {0: "Rising Sun"},
	},
	darkghost: {
		num: 68,
		name: "darkghost",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 90, atk: 72, def: 85, spa: 128, spd: 95, spe: 110},
		abilities: {0: "Mythic Swordsman"},
	},
	waterflying: {
		num: 69,
		name: "waterflying",
		types: ["Water", "Flying"],
		baseStats: {hp: 85, atk: 110, def: 72, spa: 95, spd: 90, spe: 128},
		abilities: {0: "Storming Surge"},
	},
	steel: {
		num: 70,
		name: "steel",
		types: ["Steel"],
		baseStats: {hp: 80, atk: 150, def: 150, spa: 70, spd: 75, spe: 75},
		abilities: {0: "Filter"},
	},
	rock: {
		num: 71,
		name: "rock",
		types: ["Rock"],
		baseStats: {hp: 130, atk: 130, def: 200, spa: 50, spd: 70, spe: 20},
		abilities: {0: "Ice Age"},
	},
	iceghost: {
		num: 72,
		name: "iceghost",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 138, atk: 98, def: 104, spa: 138, spd: 104, spe: 98},
		abilities: {0: "Mortem"},
	},
	electricnormal: {
		num: 73,
		name: "electricnormal",
		types: ["Electric", "Normal"],
		baseStats: {hp: 98, atk: 138, def: 104, spa: 98, spd: 104, spe: 138},
		abilities: {0: "Animus"},
	},
	firedark: {
		num: 74,
		name: "firedark",
		types: ["Fire", "Dark"],
		baseStats: {hp: 104, atk: 98, def: 138, spa: 98, spd: 138, spe: 104},
		abilities: {0: "Ragnarok"},
	},
	firefairy: {
		num: 75,
		name: "firefairy",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Divine Grace"},
	},
	fighting: {
		num: 76,
		name: "fighting",
		types: ["Fighting"],
		baseStats: {hp: 113, atk: 127, def: 113, spa: 67, spd: 113, spe: 67},
		abilities: {0: "Primal Force"},
	},
};