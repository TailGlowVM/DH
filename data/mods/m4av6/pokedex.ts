export const BattlePokedex: {[speciesid: string]: SpeciesData} = {
	butterfree: {
		num: 12,
		name: "Butterfree",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Compound Eyes", H: "Tinted Lens"},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		prevo: "Metapod",
		evoLevel: 10,
		eggGroups: ["Bug"],
		otherFormes: ["Butterfree-Gmax", "Butterfree-Mega"],
		formeOrder: ["Butterfree", "Butterfree-Gmax", "Butterfree-Mega"],
	},
	butterfreegmax: {
		num: 12,
		name: "Butterfree-Gmax",
		baseSpecies: "Butterfree",
		forme: "Gmax",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Compound Eyes", H: "Tinted Lens"},
		heightm: 17,
		weightkg: 0,
		color: "White",
		eggGroups: ["Bug"],
		isGigantamax: "G-Max Befuddle",
	},
	butterfreemega: {
		num: 12,
		name: "Butterfree-Mega",
		baseSpecies: "Butterfree",
		forme: "Mega",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 15, def: 50, spa: 145, spd: 80, spe: 145},
		abilities: {0: "Dust Scatter"},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		eggGroups: ["Bug"],
		requiredItem: "Butterfrite",
	},
	raichu: {
		num: 26,
		name: "Raichu",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110},
		abilities: {0: "Static", H: "Lightning Rod"},
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		prevo: "Pikachu",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["Raichu-Alola", "Raichu-Mega"],
		formeOrder: ["Raichu", "Raichu-Alola", "Raichu-Mega"],
	},
	raichualola: {
		num: 26,
		name: "Raichu-Alola",
		baseSpecies: "Raichu",
		forme: "Alola",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110},
		abilities: {0: "Surge Surfer"},
		heightm: 0.7,
		weightkg: 21,
		color: "Brown",
		prevo: "Pikachu",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field", "Fairy"],
	},
	raichumega: {
		num: 26,
		name: "Raichu-Mega",
		baseSpecies: "Raichu",
		forme: "Mega",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 60, atk: 125, def: 55, spa: 110, spd: 100, spe: 125},
		abilities: {0: "Reckless"},
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
		requiredItem: "Raichunite",
	},
	clefable: {
		num: 36,
		name: "Clefable",
		types: ["Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60},
		abilities: {0: "Cute Charm", 1: "Magic Guard", H: "Unaware"},
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		prevo: "Clefairy",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
		otherFormes: ["Clefable-Mega"],
		formeOrder: ["Clefable", "Clefable-Mega"],
	},
	clefablemega: {
		num: 36,
		name: "Clefable-Mega",
		baseSpecies: "Clefable",
		forme: "Mega",
		types: ["Fairy", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 95, atk: 80, def: 83, spa: 125, spd: 90, spe: 110},
		abilities: {0: "Prankster"},
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		eggGroups: ["Fairy"],
		requiredItem: "Clefabite",
	},
	vaporeon: {
		num: 134,
		name: "Vaporeon",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65},
		abilities: {0: "Water Absorb", H: "Hydration"},
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
		otherFormes: ["Vaporeon-Mega"],
		formeOrder: ["Vaporeon", "Vaporeon-Mega"],
	},
	vaporeonmega: {
		num: 134,
		name: "Vaporeon-Mega",
		baseSpecies: "Vaporeon",
		forme: "Mega",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 95, def: 100, spa: 120, spd: 135, spe: 45},
		abilities: {0: "Perish Body"},
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Vaporeonite",
	},
	jolteon: {
		num: 135,
		name: "Jolteon",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130},
		abilities: {0: "Volt Absorb", H: "Quick Feet"},
		heightm: 0.8,
		weightkg: 24.5,
		color: "Yellow",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field"],
		otherFormes: ["Jolteon-Mega"],
		formeOrder: ["Jolteon", "Jolteon-Mega"],
	},
	jolteonmega: {
		num: 135,
		name: "Jolteon-Mega",
		baseSpecies: "Jolteon",
		forme: "Mega",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 65, def: 60, spa: 160, spd: 125, spe: 150},
		abilities: {0: "Tempestuous"},
		heightm: 0.8,
		weightkg: 24.5,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Jolteonite",
	},
	flareon: {
		num: 136,
		name: "Flareon",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65},
		abilities: {0: "Flash Fire", H: "Guts"},
		heightm: 0.9,
		weightkg: 25,
		color: "Red",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
		otherFormes: ["Flareon-Mega"],
		formeOrder: ["Flareon", "Flareon-Mega"],
	},
	flareonmega: {
		num: 136,
		name: "Flareon-Mega",
		baseSpecies: "Flareon",
		forme: "Mega",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 130, def: 80, spa: 115, spd: 150, spe: 85},
		abilities: {0: "Soot Guard"},
		heightm: 0.9,
		weightkg: 25,
		color: "Red",
		eggGroups: ["Field"],
		otherFormes: ["Flareon-Mega"],
		formeOrder: ["Flareon", "Flareon-Mega"],
		requiredItem: "Flareonite",
	},
	dragonite: {
		num: 149,
		name: "Dragonite",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
		abilities: {0: "Inner Focus", H: "Multiscale"},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		prevo: "Dragonair",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
		otherFormes: ["Dragonite-Mega"],
		formeOrder: ["Dragonite", "Dragonite-Mega"],
	},
	dragonitemega: {
		num: 149,
		name: "Dragonite-Mega",
		baseSpecies: "Dragonite-Mega",
		forme: "Mega",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 91, atk: 164, def: 110, spa: 122, spd: 122, spe: 91},
		abilities: {0: "Tough Claws"},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		eggGroups: ["Water 1", "Dragon"],
		requiredItem: ["Draconite"],
	},
	slowking: {
		num: 199,
		name: "Slowking",
		types: ["Water", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30},
		abilities: {0: "Oblivious", 1: "Own Tempo", H: "Regenerator"},
		heightm: 2,
		weightkg: 79.5,
		color: "Pink",
		prevo: "Slowpoke",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Slowking-Mega"],
		formeOrder: ["Slowking", "Slowking-Mega"],
	},
	slowkingmega: {
		num: 199,
		name: "Slowking-Mega",
		baseSpecies: "Slowking",
		forme: "Mega",
		types: ["Water", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 80, spa: 145, spd: 110, spe: 85},
		abilities: {0: "Counter-Clockwise Spiral"},
		heightm: 2,
		weightkg: 79.5,
		color: "Pink",
		prevo: "Slowpoke",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Slowkinite",
	},
	froslass: {
		num: 478,
		name: "Froslass",
		types: ["Ice", "Ghost"],
		gender: "F",
		baseStats: {hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110},
		abilities: {0: "Snow Cloak", H: "Cursed Body"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		prevo: "Snorunt",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Fairy", "Mineral"],
		otherFormes: ["Froslass-Mega"],
		formeOrder: ["Froslass", "Froslass-Mega"],
	},
	froslassmega: {
		num: 478,
		name: "Froslass-Mega",
		baseSpecies: "Froslass",
		forme: "Mega",
		types: ["Ice", "Ghost"],
		gender: "F",
		baseStats: {hp: 70, atk: 130, def: 95, spa: 80, spd: 90, spe: 115},
		abilities: {0: "Magic Bounce"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		eggGroups: ["Fairy", "Mineral"],
		requiredItem: "Froslassite",
	},
	gigalith: {
		num: 526,
		name: "Gigalith",
		types: ["Rock"],
		baseStats: {hp: 85, atk: 135, def: 130, spa: 60, spd: 80, spe: 25},
		abilities: {0: "Sturdy", 1: "Sand Stream", H: "Sand Force"},
		heightm: 1.7,
		weightkg: 260,
		color: "Blue",
		prevo: "Boldore",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	conkeldurr: {
		num: 534,
		name: "Conkeldurr",
		types: ["Fighting"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45},
		abilities: {0: "Guts", 1: "Sheer Force", H: "Iron Fist"},
		heightm: 1.4,
		weightkg: 87,
		color: "Brown",
		prevo: "Gurdurr",
		evoType: "trade",
		eggGroups: ["Human-Like"],
		otherFormes: ["Conkeldurr-Mega"],
		formeOrder: ["Conkeldurr", "Conkeldurr-Mega"],
	},
	conkeldurrmega: {
		num: 534,
		name: "Conkeldurr-Mega",
		baseSpecies: "Conkeldurr",
		forme: "Mega",
		types: ["Fighting"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 105, atk: 190, def: 125, spa: 65, spd: 85, spe: 35},
		abilities: {0: "Long Reach"},
		heightm: 1.4,
		weightkg: 87,
		color: "Brown",
		eggGroups: ["Human-Like"],
		requiredItem: "Conkeldite",
	},
	garbodor: {
		num: 569,
		name: "Garbodor",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75},
		abilities: {0: "Stench", 1: "Weak Armor", H: "Aftermath"},
		heightm: 1.9,
		weightkg: 107.3,
		color: "Green",
		prevo: "Trubbish",
		evoLevel: 36,
		eggGroups: ["Mineral"],
		otherFormes: ["Garbodor-Gmax", "Garbodor-Mega"],
		formeOrder: ["Garbodor", "Garbodor-Gmax", "Garbodor-Mega"],
	},
	garbodorgmax: {
		num: 569,
		name: "Garbodor-Gmax",
		baseSpecies: "Garbodor",
		forme: "Gmax",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75},
		abilities: {0: "Stench", 1: "Weak Armor", H: "Aftermath"},
		heightm: 21,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Mineral"],
		isGigantamax: "G-Max Malodor",
	},
	garbodormega: {
		num: 569,
		name: "Garbodor-Mega",
		baseSpecies: "Garbodor",
		forme: "Mega",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 95, def: 132, spa: 95, spd: 132, spe: 40},
		abilities: {0: "Trash Compactor"},
		heightm: 1.9,
		weightkg: 107.3,
		color: "Green",
		eggGroups: ["Mineral"],
		requiredItem: ["Garbodorite"],
	},
	gothitelle: {
		num: 576,
		name: "Gothitelle",
		types: ["Psychic"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 70, atk: 55, def: 95, spa: 95, spd: 110, spe: 65},
		abilities: {0: "Frisk", 1: "Competitive", H: "Shadow Tag"},
		heightm: 1.5,
		weightkg: 44,
		color: "Purple",
		prevo: "Gothorita",
		evoLevel: 41,
		eggGroups: ["Human-Like"],
		otherFormes: ["Gothitelle-Mega"],
		formeOrder: ["Gothitelle", "Gothitelle-Mega"],
	},
	gothitellemega: {
		num: 576,
		name: "Gothitelle-Mega",
		baseSpecies: "Gothitelle",
		forme: "Mega",
		types: ["Psychic"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 70, atk: 55, def: 120, spa: 130, spd: 150, spe: 65},
		abilities: {0: "Magic Guard"},
		heightm: 1.5,
		weightkg: 44,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: ["Gothitite"],
	},
	reuniclus: {
		num: 579,
		name: "Reuniclus",
		types: ["Psychic"],
		baseStats: {hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30},
		abilities: {0: "Overcoat", 1: "Magic Guard", H: "Regenerator"},
		heightm: 1,
		weightkg: 20.1,
		color: "Green",
		prevo: "Duosion",
		evoLevel: 41,
		eggGroups: ["Amorphous"],
	},
	vanilluxe: {
		num: 584,
		name: "Vanilluxe",
		types: ["Ice"],
		baseStats: {hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79},
		abilities: {0: "Ice Body", 1: "Snow Warning", H: "Weak Armor"},
		heightm: 1.3,
		weightkg: 57.5,
		color: "White",
		prevo: "Vanillish",
		evoLevel: 47,
		eggGroups: ["Mineral"],
		otherFormes: ["Vanilluxe-Mega"],
		formeOrder: ["Vanilluxe", "Vanilluxe-Mega"],
	},
	vanilluxemega: {
		num: 584,
		name: "Vanilluxe-Mega",
		baseSpecies: "Vanilluxe",
		forme: "Mega",
		types: ["Ice"],
		baseStats: {hp: 71, atk: 95, def: 85, spa: 160, spd: 115, spe: 109},
		abilities: {0: "Cold Sweat"},
		heightm: 1.3,
		weightkg: 57.5,
		color: "White",
		eggGroups: ["Mineral"],
		requiredItem: ["Vanillite"],
	},
	klinklang: {
		num: 601,
		name: "Klinklang",
		types: ["Steel"],
		gender: "N",
		baseStats: {hp: 60, atk: 100, def: 115, spa: 70, spd: 85, spe: 90},
		abilities: {0: "Plus", 1: "Minus", H: "Clear Body"},
		heightm: 0.6,
		weightkg: 81,
		color: "Gray",
		prevo: "Klang",
		evoLevel: 49,
		eggGroups: ["Mineral"],
		otherFormes: ["Klinklang-Mega"],
		formeOrder: ["Klinklang", "Klinklang-Mega"],
	},
	klinklangmega: {
		num: 601,
		name: "Klinklang-Mega",
		baseSpecies: "Klinklang",
		forme: "Mega",
		types: ["Steel", "Electric"],
		gender: "N",
		baseStats: {hp: 60, atk: 130, def: 115, spa: 100, spd: 85, spe: 130},
		abilities: {0: "Electric Surge"},
		heightm: 0.6,
		weightkg: 81,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: ["Klinklite"],
	},
	chandelure: {
		num: 609,
		name: "Chandelure",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80},
		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Infiltrator"},
		heightm: 1,
		weightkg: 34.3,
		color: "Black",
		prevo: "Lampent",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Amorphous"],
		otherFormes: ["Chandelure-Mega"],
		formeOrder: ["Chandelure", "Chandelure-Mega"],
	},
	chandeluremega: {
		num: 609,
		name: "Chandelure-Mega",
		baseSpecies: "Chandelure",
		forme: "Mega",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 60, atk: 57, def: 108, spa: 185, spd: 108, spe: 102},
		abilities: {0: "Nightmare Heart"},
		heightm: 1,
		weightkg: 34.3,
		color: "Black",
		eggGroups: ["Amorphous"],
		requiredItem: ["Chandelite"],
	},
	bisharp: {
		num: 625,
		name: "Bisharp",
		types: ["Dark", "Steel"],
		baseStats: {hp: 65, atk: 125, def: 100, spa: 60, spd: 70, spe: 70},
		abilities: {0: "Defiant", 1: "Inner Focus", H: "Pressure"},
		heightm: 1.6,
		weightkg: 70,
		color: "Red",
		prevo: "Pawniard",
		evoLevel: 52,
		eggGroups: ["Human-Like"],
		otherFormes: ["Bisharp-Mega"],
		formeOrder: ["Bisharp", "Bisharp-Mega"],
	},
	bisharpmega: {
		num: 625,
		name: "Bisharp-Mega",
		baseSpecies: "Bisharp",
		forme: "Mega",
		types: ["Dark", "Steel"],
		baseStats: {hp: 65, atk: 145, def: 110, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Executioner"},
		heightm: 1.6,
		weightkg: 70,
		color: "Red",
		eggGroups: ["Human-Like"],
		requiredItem: ["Bisharpite"],
	},
	hydreigon: {
		num: 635,
		name: "Hydreigon",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98},
		abilities: {0: "Levitate"},
		heightm: 1.8,
		weightkg: 160,
		color: "Blue",
		prevo: "Zweilous",
		evoLevel: 64,
		eggGroups: ["Dragon"],
		otherFormes: ["Hydreigon-Mega"],
		formeOrder: ["Hydreigon", "Hydreigon-Mega"],
	},
	hydreigonmega: {
		num: 635,
		name: "Hydreigon-Mega",
		baseSpecies: "Hydreigon",
		forme: "Mega",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 92, atk: 125, def: 110, spa: 165, spd: 90, spe: 118},
		abilities: {0: "Berserk"},
		heightm: 1.8,
		weightkg: 160,
		color: "Blue",
		eggGroups: ["Dragon"],
		requiredItem: "Hydreigonite",
	},
	goodra: {
		num: 706,
		name: "Goodra",
		types: ["Dragon"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80},
		abilities: {0: "Sap Sipper", 1: "Hydration", H: "Gooey"},
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		prevo: "Sliggoo",
		evoLevel: 50,
		eggGroups: ["Dragon"],
		otherFormes: ["Goodra-Mega"],
		formeOrder: ["Goodra", "Goodra-Mega"],
	},
	goodramega: {
		num: 706,
		name: "Goodra-Mega",
		baseSpecies: "Goodra",
		forme: "Mega",
		types: ["Dragon", "Water"],
		baseStats: {hp: 90, atk: 120, def: 120, spa: 130, spd: 150, spe: 90},
		abilities: {0: "Gooey"},
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		eggGroups: ["Dragon"],
		requiredItem: "Goodranite",
	},
	toucannon: {
		num: 733,
		name: "Toucannon",
		types: ["Normal", "Flying"],
		baseStats: {hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 60},
		abilities: {0: "Keen Eye", 1: "Skill Link", H: "Sheer Force"},
		heightm: 1.1,
		weightkg: 26,
		color: "Black",
		prevo: "Trumbeak",
		evoLevel: 28,
		eggGroups: ["Flying"],
		otherFormes: ["Toucannon-Mega"],
		formeOrder: ["Toucannon", "Toucannon-Mega"],
	},
	toucannonmega: {
		num: 733,
		name: "Toucannon-Mega",
		baseSpecies: "Toucannon",
		forme: "Mega",
		types: ["Fire", "Flying"],
		baseStats: {hp: 80, atk: 140, def: 85, spa: 95, spd: 85, spe: 100},
		abilities: {0: "Ignite"},
		heightm: 1.1,
		weightkg: 26,
		color: "Black",
		eggGroups: ["Flying"],
		requiredItem: "Toucannonite",
	},
	gumshoos: {
		num: 735,
		name: "Gumshoos",
		types: ["Normal"],
		baseStats: {hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 45},
		abilities: {0: "Stakeout", 1: "Strong Jaw", H: "Adaptability"},
		heightm: 0.7,
		weightkg: 14.2,
		color: "Brown",
		prevo: "Yungoos",
		evoLevel: 20,
		eggGroups: ["Field"],
		otherFormes: ["Gumshoos-Totem", "Gumshoos-Mega"],
		formeOrder: ["Gumshoos", "Gumshoos-Totem", "Gumshoos-Mega"],
	},
	gumshoostotem: {
		num: 735,
		name: "Gumshoos-Totem",
		baseSpecies: "Gumshoos",
		forme: "Totem",
		types: ["Normal"],
		baseStats: {hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 45},
		abilities: {0: "Adaptability"},
		heightm: 1.4,
		weightkg: 60,
		color: "Brown",
		eggGroups: ["Field"],
	},
	gumshoosmega: {
		num: 735,
		name: "Gumshoos-Mega",
		baseSpecies: "Gumshoos",
		forme: "Mega",
		types: ["Normal"],
		baseStats: {hp: 88, atk: 130, def: 70, spa: 55, spd: 70, spe: 105},
		abilities: {0: "Hustle"},
		heightm: 0.7,
		weightkg: 14.2,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Gumshoosite",
	},
	vikavolt: {
		num: 738,
		name: "Vikavolt",
		types: ["Bug", "Electric"],
		baseStats: {hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43},
		abilities: {0: "Levitate"},
		heightm: 1.5,
		weightkg: 45,
		color: "Blue",
		prevo: "Charjabug",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Bug"],
		otherFormes: ["Vikavolt-Totem", "Vikavolt-Mega"],
		formeOrder: ["Vikavolt", "Vikavolt-Totem", "Vikavolt-Mega"],
	},
	vikavolttotem: {
		num: 738,
		name: "Vikavolt-Totem",
		baseSpecies: "Vikavolt",
		forme: "Totem",
		types: ["Bug", "Electric"],
		baseStats: {hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43},
		abilities: {0: "Levitate"},
		heightm: 2.6,
		weightkg: 147.5,
		color: "Blue",
		eggGroups: ["Bug"],
	},
	vikavoltmega: {
		num: 738,
		name: "Vikavolt-Mega",
		baseSpecies: "Vikavolt",
		forme: "Mega",
		types: ["Bug", "Electric"],
		baseStats: {hp: 77, atk: 145, def: 90, spa: 145, spd: 75, spe: 68},
		abilities: {0: "Download"},
		heightm: 1.5,
		weightkg: 45,
		color: "Blue",
		eggGroups: ["Bug"],
		requiredItem: "Vikavoltite",
	},
	lycanroc: {
		num: 745,
		name: "Lycanroc",
		baseForme: "Midday",
		types: ["Rock"],
		baseStats: {hp: 75, atk: 115, def: 65, spa: 55, spd: 65, spe: 112},
		abilities: {0: "Keen Eye", 1: "Sand Rush", H: "Steadfast"},
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		prevo: "Rockruff",
		evoLevel: 25,
		evoCondition: "during the day",
		eggGroups: ["Field"],
		otherFormes: ["Lycanroc-Midnight", "Lycanroc-Dusk", "Lycanroc-Mega", "Lycanroc-Midnight-Mega", "Lycanroc-Dusk-Mega"],
		formeOrder: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk", "Lycanroc-Mega", "Lycanroc-Midnight-Mega", "Lycanroc-Dusk-Mega"],
	},
	lycanrocmidnight: {
		num: 745,
		name: "Lycanroc-Midnight",
		baseSpecies: "Lycanroc",
		forme: "Midnight",
		types: ["Rock"],
		baseStats: {hp: 85, atk: 115, def: 75, spa: 55, spd: 75, spe: 82},
		abilities: {0: "Keen Eye", 1: "Vital Spirit", H: "No Guard"},
		heightm: 1.1,
		weightkg: 25,
		color: "Red",
		prevo: "Rockruff",
		evoLevel: 25,
		evoCondition: "during the night",
		eggGroups: ["Field"],
	},
	lycanrocdusk: {
		num: 745,
		name: "Lycanroc-Dusk",
		baseSpecies: "Lycanroc",
		forme: "Dusk",
		types: ["Rock"],
		baseStats: {hp: 75, atk: 117, def: 65, spa: 55, spd: 65, spe: 110},
		abilities: {0: "Tough Claws"},
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		prevo: "Rockruff",
		evoLevel: 25,
		evoCondition: "from a special Rockruff",
		eggGroups: ["Field"],
	},
	lycanrocmega: {
		num: 745,
		name: "Lycanroc-Mega",
		baseSpecies: "Lycanroc",
		forme: "Mega",
		types: ["Rock", "Normal"],
		baseStats: {hp: 75, atk: 130, def: 115, spa: 55, spd: 75, spe: 137},
		abilities: {0: "Grounded"},
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Midday Lycanite",
	},
	lycanrocmidnightmega: {
		num: 745,
		name: "Lycanroc-Midnight-Mega",
		baseSpecies: "Lycanroc",
		forme: "Midnight-Mega",
		types: ["Rock", "Dark"],
		baseStats: {hp: 85, atk: 155, def: 115, spa: 65, spd: 75, spe: 92},
		abilities: {0: "Reckless"},
		heightm: 1.1,
		weightkg: 25,
		color: "Red",
		eggGroups: ["Field"],
		requiredItem: "Midnight Lycanite",
	},
	lycanrocduskmega: {
		num: 745,
		name: "Lycanroc-Dusk-Mega",
		baseSpecies: "Lycanroc",
		forme: "Dusk-Mega",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 75, atk: 150, def: 80, spa: 65, spd: 75, spe: 142},
		abilities: {0: "Mold Breaker"},
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Dusk Lycanite",
	},
	kommoo: {
		num: 784,
		name: "Kommo-o",
		types: ["Dragon", "Fighting"],
		baseStats: {hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85},
		abilities: {0: "Bulletproof", 1: "Soundproof", H: "Overcoat"},
		heightm: 1.6,
		weightkg: 78.2,
		color: "Gray",
		prevo: "Hakamo-o",
		evoLevel: 45,
		eggGroups: ["Dragon"],
		otherFormes: ["Kommo-o-Totem", "Kommo-o-Mega"],
		formeOrder: ["Kommo-o", "Kommo-o-Totem", "Kommo-o-Mega"],
	},
	kommoototem: {
		num: 784,
		name: "Kommo-o-Totem",
		baseSpecies: "Kommo-o",
		forme: "Totem",
		types: ["Dragon", "Fighting"],
		baseStats: {hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85},
		abilities: {0: "Overcoat"},
		heightm: 2.4,
		weightkg: 207.5,
		color: "Gray",
		eggGroups: ["Dragon"],
	},
	kommoomega: {
		num: 784,
		name: "Kommo-o-Mega",
		baseSpecies: "Kommo-o",
		forme: "Mega",
		types: ["Dragon", "Fighting"],
		baseStats: {hp: 75, atk: 130, def: 145, spa: 150, spd: 115, spe: 85},
		abilities: {0: "Weak Armor"},
		heightm: 1.6,
		weightkg: 78.2,
		color: "Gray",
		eggGroups: ["Dragon"],
		requiredItem: "Kommonite",
	},
	rillaboom: {
		num: 812,
		name: "Rillaboom",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85},
		abilities: {0: "Overgrow", H: "Grassy Surge"},
		heightm: 2.1,
		weightkg: 90,
		color: "Green",
		prevo: "Thwackey",
		evoLevel: 35,
		eggGroups: ["Field", "Grass"],
		otherFormes: ["Rillaboom-Gmax", "Rillaboom-Mega"],
		formeOrder: ["Rillaboom", "Rillaboom-Gmax", "Rillaboom-Mega"],
	},
	rillaboomgmax: {
		num: 812,
		name: "Rillaboom-Gmax",
		baseSpecies: "Rillaboom",
		forme: "Gmax",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85},
		abilities: {0: "Overgrow", H: "Grassy Surge"},
		heightm: 3,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Field", "Grass"],
		isGigantamax: "G-Max Drum Solo",
	},
	rillaboommega: {
		num: 812,
		name: "Rillaboom-Mega",
		baseSpecies: "Rillaboom",
		forme: "Mega",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 165, def: 110, spa: 60, spd: 110, spe: 85},
		abilities: {0: "Arena Rock"},
		heightm: 2.1,
		weightkg: 90,
		color: "Green",
		eggGroups: ["Field", "Grass"],
		requiredItem: "Rillaboomite",
	},
	cinderace: {
		num: 815,
		name: "Cinderace",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119},
		abilities: {0: "Blaze", H: "Libero"},
		heightm: 1.4,
		weightkg: 33,
		color: "White",
		prevo: "Raboot",
		evoLevel: 35,
		eggGroups: ["Field", "Human-Like"],
		otherFormes: ["Cinderace-Gmax", "Cinderace-Mega"],
		formeOrder: ["Cinderace", "Cinderace-Gmax", "Cinderace-Mega"],
	},
	cinderacegmax: {
		num: 815,
		name: "Cinderace-Gmax",
		baseSpecies: "Cinderace",
		forme: "Gmax",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119},
		abilities: {0: "Blaze", H: "Libero"},
		heightm: 3,
		weightkg: 0,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
		isGigantamax: "G-Max Fireball",
	},
	cinderacemega: {
		num: 815,
		name: "Cinderace-Mega",
		baseSpecies: "Cinderace",
		forme: "Mega",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 126, def: 95, spa: 135, spd: 95, spe: 99},
		abilities: {0: "Sharp Striker"},
		heightm: 1.4,
		weightkg: 33,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
		requiredItem: "Cinderacite",
	},
	inteleon: {
		num: 818,
		name: "Inteleon",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120},
		abilities: {0: "Torrent", H: "Sniper"},
		heightm: 1.9,
		weightkg: 45.2,
		color: "Blue",
		prevo: "Drizzile",
		evoLevel: 35,
		eggGroups: ["Water 1", "Field"],
		otherFormes: ["Inteleon-Gmax", "Inteleon-Mega"],
		formeOrder: ["Inteleon", "Inteleon-Gmax", "Inteleon-Mega"],
	},
	inteleongmax: {
		num: 818,
		name: "Inteleon-Gmax",
		baseSpecies: "Inteleon",
		forme: "Gmax",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120},
		abilities: {0: "Torrent", H: "Sniper"},
		heightm: 3,
		weightkg: 0,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		isGigantamax: "G-Max Hydrosnipe",
	},
	inteleonmega: {
		num: 818,
		name: "Inteleon-Mega",
		baseSpecies: "Inteleon",
		forme: "Mega",
		types: ["Water", "Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 145, def: 102, spa: 85, spd: 102, spe: 126},
		abilities: {0: "Illusion"},
		heightm: 1.9,
		weightkg: 45.2,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Inteleonite",
	},
	corviknight: {
		num: 823,
		name: "Corviknight",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Pressure", 1: "Unnerve", H: "Mirror Armor"},
		heightm: 2.2,
		weightkg: 75,
		color: "Purple",
		prevo: "Corvisquire",
		evoLevel: 38,
		eggGroups: ["Flying"],
		otherFormes: ["Corviknight-Gmax", "Corviknight-Mega"],
		formeOrder: ["Corviknight", "Corviknight-Gmax", "Corviknight-Mega"],
	},
	corviknightgmax: {
		num: 823,
		name: "Corviknight-Gmax",
		baseSpecies: "Corviknight",
		forme: "Gmax",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Pressure", 1: "Unnerve", H: "Mirror Armor"},
		heightm: 14,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Flying"],
		isGigantamax: "G-Max Wind Rage",
	},
	corviknightmega: {
		num: 823,
		name: "Corviknight-Mega",
		baseSpecies: "Corviknight",
		forme: "Mega",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 117, def: 120, spa: 78, spd: 105, spe: 77},
		abilities: {0: "Intimidate"},
		heightm: 2.2,
		weightkg: 75,
		color: "Purple",
		eggGroups: ["Flying"],
		requiredItem: "Corviknite",
	},
	orbeetle: {
		num: 826,
		name: "Orbeetle",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90},
		abilities: {0: "Swarm", 1: "Frisk", H: "Telepathy"},
		heightm: 0.4,
		weightkg: 40.8,
		color: "Red",
		prevo: "Dottler",
		evoLevel: 30,
		eggGroups: ["Bug"],
		otherFormes: ["Orbeetle-Gmax", "Orbeetle-Mega"],
		formeOrder: ["Orbeetle", "Orbeetle-Gmax", "Orbeetle-Mega"],
	},
	orbeetlegmax: {
		num: 826,
		name: "Orbeetle-Gmax",
		baseSpecies: "Orbeetle",
		forme: "Gmax",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90},
		abilities: {0: "Swarm", 1: "Frisk", H: "Telepathy"},
		heightm: 14,
		weightkg: 0,
		color: "Red",
		eggGroups: ["Bug"],
		isGigantamax: "G-Max Gravitas",
	},
	orbeetlemega: {
		num: 826,
		name: "Orbeetle-Mega",
		baseSpecies: "Orbeetle",
		forme: "Mega",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 130, spa: 130, spd: 140, spe: 100},
		abilities: {0: "Gravitas"},
		heightm: 0.4,
		weightkg: 40.8,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Orbeetlite",
	},
	thievul: {
		num: 828,
		name: "Thievul",
		types: ["Dark"],
		baseStats: {hp: 70, atk: 58, def: 58, spa: 87, spd: 92, spe: 90},
		abilities: {0: "Run Away", 1: "Unburden", H: "Stakeout"},
		heightm: 1.2,
		weightkg: 19.9,
		color: "Brown",
		prevo: "Nickit",
		evoLevel: 18,
		eggGroups: ["Field"],
		otherFormes: ["Thievul-Mega"],
		formeOrder: ["Thievul", "Thievul-Mega"],
	},
	thievulmega: {
		num: 828,
		name: "Thievul-Mega",
		baseSpecies: "Thievul",
		forme: "Mega",
		types: ["Dark"],
		baseStats: {hp: 70, atk: 58, def: 78, spa: 137, spd: 102, spe: 110},
		abilities: {0: "Dark Aura"},
		heightm: 1.2,
		weightkg: 19.9,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Thievulite",
	},
	boltund: {
		num: 836,
		name: "Boltund",
		types: ["Electric"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Strong Jaw", H: "Competitive"},
		heightm: 1,
		weightkg: 34,
		color: "Yellow",
		prevo: "Yamper",
		evoLevel: 25,
		eggGroups: ["Field"],
	},
	dragapult: {
		num: 887,
		name: "Dragapult",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142},
		abilities: {0: "Clear Body", 1: "Infiltrator", H: "Cursed Body"},
		heightm: 3,
		weightkg: 50,
		color: "Green",
		prevo: "Drakloak",
		evoLevel: 60,
		eggGroups: ["Amorphous", "Dragon"],
		otherFormes: ["Dragapult-Mega"],
		formeOrder: ["Dragapult", "Dragapult-Mega"],
	},
	dragapultmega: {
		num: 887,
		name: "Dragapult-Mega",
		baseSpecies: "Dragapult",
		forme: "Mega",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 88, atk: 135, def: 90, spa: 130, spd: 85, spe: 172},
		abilities: {0: "Trace"},
		heightm: 3,
		weightkg: 50,
		color: "Green",
		eggGroups: ["Amorphous", "Dragon"],
		requiredItem: "Dragapultite",
	},
};
