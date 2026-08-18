// Fontes: wiki.warframe.com. Fontes de peças normais = chefe/missão fixo.
// Relíquias de peças Prime = as 1-2 relíquias mais comuns (sem % de drop, que muda com o tempo).
export const WARFRAMES = [
    {
        name: 'Ash',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Netuno Proxima' },
            { id: 'chassis', name: 'Chassis', source: 'Plutão Proxima' },
            { id: 'systems', name: 'Sistemas', source: 'Vênus Proxima' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi I3', 'Lith S3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi B1', 'Axi K12'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi N2', 'Meso N2'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi A7', 'Axi N1'] },
            ],
        },
    },
    {
        name: 'Atlas',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão The Jordas Precept' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Jordas Golem (Assassinato, Éris)' },
            { id: 'chassis', name: 'Chassis', source: 'Jordas Golem (Assassinato, Éris)' },
            { id: 'systems', name: 'Sistemas', source: 'Jordas Golem (Assassinato, Éris)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith D1', 'Lith K6'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi B3', 'Lith B8'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso E3', 'Neo A7'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi F1', 'Lith N4'] },
            ],
        },
    },
    {
        name: 'Banshee',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Dojo (Tenno Lab)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Dojo (Tenno Lab)' },
            { id: 'chassis', name: 'Chassis', source: 'Dojo (Tenno Lab)' },
            { id: 'systems', name: 'Sistemas', source: 'Dojo (Tenno Lab)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi A12', 'Axi C3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Meso B2', 'Neo B1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi H5', 'Lith B5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi B1', 'Axi B2'] },
            ],
        },
    },
    {
        name: 'Baruuk',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Vox Solaris (Rank Agente)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Vox Solaris (Rank Mão)' },
            { id: 'chassis', name: 'Chassis', source: 'Vox Solaris (Rank Mão)' },
            { id: 'systems', name: 'Sistemas', source: 'Vox Solaris (Rank Mão)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi B9', 'Lith B10'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith N15', 'Lith P8'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi B5', 'Axi B6'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi P7', 'Axi W3'] },
            ],
        },
    },
    {
        name: 'Caliban',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounties Narmer (Cetus/Fortuna)' },
            { id: 'chassis', name: 'Chassis', source: 'Bounties Narmer (Cetus/Fortuna)' },
            { id: 'systems', name: 'Sistemas', source: 'Bounties Narmer (Cetus/Fortuna)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith V11', 'Meso V13'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi P10', 'Lith K12'] },
                { id: 'chassis', name: 'Chassis', relics: ['Neo C7', 'Lith C13'] },
                { id: 'systems', name: 'Sistemas', relics: ['Neo C8', 'Axi C10'] },
            ],
        },
    },
    {
        name: 'Chroma',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão The New Strange (requer 1x Neuroptics do Volt)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Junção de Urano (requer 1x Neuroptics da Ember)' },
            { id: 'chassis', name: 'Chassis', source: 'Junção de Netuno (requer 1x Chassis do Frost)' },
            { id: 'systems', name: 'Sistemas', source: 'Junção de Plutão (requer 1x Sistemas da Saryn)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi A6', 'Axi D1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith C3', 'Lith C4'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi C3', 'Axi C4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Neo C1', 'Axi R2'] },
            ],
        },
    },
    {
        name: 'Citrine',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mirror Defense (Tyana Pass, Marte)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Mirror Defense (Tyana Pass, Marte)' },
            { id: 'chassis', name: 'Chassis', source: 'Mirror Defense (Tyana Pass, Marte)' },
            { id: 'systems', name: 'Sistemas', source: 'Mirror Defense (Tyana Pass, Marte)' },
        ],
        prime: null,
    },
    {
        name: 'Cyte-09',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'The Hex (Quest)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Höllvania Central Mall (Bounty)' },
            { id: 'chassis', name: 'Chassis', source: 'Höllvania Central Mall (Bounty)' },
            { id: 'systems', name: 'Sistemas', source: 'Höllvania Central Mall (Bounty)' },
        ],
        prime: null,
    },
    {
        name: 'Dagath',
        parts: [
            { id: 'bp', name: 'Blueprint', source: "Dagath's Hollow (Dojo)" },
            { id: 'neuroptics', name: 'Neuroptics', source: "Dagath's Hollow (Dojo)" },
            { id: 'chassis', name: 'Chassis', source: "Dagath's Hollow (Dojo)" },
            { id: 'systems', name: 'Sistemas', source: "Dagath's Hollow (Dojo)" },
        ],
        prime: null,
    },
    {
        name: 'Dante',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Disrupção Entrati (Deimos)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Disrupção Entrati (Deimos)' },
            { id: 'chassis', name: 'Chassis', source: 'Disrupção Entrati (Deimos)' },
            { id: 'systems', name: 'Sistemas', source: 'Disrupção Entrati (Deimos)' },
        ],
        prime: null,
    },
    {
        name: 'Ember',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Sargas Ruk (Assassinato, Saturno)' },
            { id: 'chassis', name: 'Chassis', source: 'Sargas Ruk (Assassinato, Saturno)' },
            { id: 'systems', name: 'Sistemas', source: 'Sargas Ruk (Assassinato, Saturno)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi E1', 'Lith E1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Meso B10', 'Meso F2'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso F3', 'Meso S14'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi R4', 'Axi S2'] },
            ],
        },
    },
    {
        name: 'Equinox',
        // Único frame que exige montar 2 aspectos completos (Dia e Noite) antes do Warframe final.
        parts: [
            { id: 'bp-day', name: 'Blueprint (Dia)', group: 'Dia', source: 'Tyl Regor (Assassinato, Urano — Rotação A)' },
            { id: 'neuroptics-day', name: 'Neuroptics (Dia)', group: 'Dia', source: 'Tyl Regor (Assassinato, Urano — Rotação A)' },
            { id: 'chassis-day', name: 'Chassis (Dia)', group: 'Dia', source: 'Tyl Regor (Assassinato, Urano — Rotação A)' },
            { id: 'systems-day', name: 'Sistemas (Dia)', group: 'Dia', source: 'Tyl Regor (Assassinato, Urano — Rotação A)' },
            { id: 'bp-night', name: 'Blueprint (Noite)', group: 'Noite', source: 'Tyl Regor (Assassinato, Urano — Rotação B)' },
            { id: 'neuroptics-night', name: 'Neuroptics (Noite)', group: 'Noite', source: 'Tyl Regor (Assassinato, Urano — Rotação B)' },
            { id: 'chassis-night', name: 'Chassis (Noite)', group: 'Noite', source: 'Tyl Regor (Assassinato, Urano — Rotação B)' },
            { id: 'systems-night', name: 'Sistemas (Noite)', group: 'Noite', source: 'Tyl Regor (Assassinato, Urano — Rotação B)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi K5', 'Axi T3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi T9', 'Lith L1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi A8', 'Axi P1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Meso E2', 'Meso E3'] },
            ],
        },
    },
    {
        name: 'Excalibur',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Lech Kril (Assassinato, Marte)' },
            { id: 'chassis', name: 'Chassis', source: 'Lech Kril (Assassinato, Marte)' },
            { id: 'systems', name: 'Sistemas', source: 'Lech Kril (Assassinato, Marte)' },
        ],
        prime: {
            founderExclusive: true,
            parts: null,
        },
    },
    {
        name: 'Follie',
        parts: [
            { id: 'bp', name: 'Blueprint', source: "Follie's Hunt (Vênus)" },
            { id: 'neuroptics', name: 'Neuroptics', source: "Follie's Hunt (Vênus)" },
            { id: 'chassis', name: 'Chassis', source: "Follie's Hunt (Vênus)" },
            { id: 'systems', name: 'Sistemas', source: "Follie's Hunt (Vênus)" },
        ],
        prime: null,
    },
    {
        name: 'Frost',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Vor e Lech Kril (Assassinato, Ceres)' },
            { id: 'chassis', name: 'Chassis', source: 'Vor e Lech Kril (Assassinato, Ceres)' },
            { id: 'systems', name: 'Sistemas', source: 'Vor e Lech Kril (Assassinato, Ceres)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Meso F2', 'Neo F1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith G1', 'Meso E1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi D4', 'Axi E1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith G2', 'Lith M8'] },
            ],
        },
    },
    {
        name: 'Gara',
        parts: [
            { id: 'bp', name: 'Blueprint', source: "Quest Saya's Vigil / Mercado" },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounty Cetus (Lvl 20-40)' },
            { id: 'chassis', name: 'Chassis', source: 'Bounty Cetus (Lvl 5-15)' },
            { id: 'systems', name: 'Sistemas', source: 'Bounty Cetus (Lvl 10-30)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi G6', 'Axi G9'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi G8', 'Axi I2'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi S14', 'Lith S12'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi C8', 'Axi G7'] },
            ],
        },
    },
    {
        name: 'Garuda',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Quest Vox Solaris / Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounty Fortuna (Lvl 20-40)' },
            { id: 'chassis', name: 'Chassis', source: 'Bounty Fortuna (Lvl 5-15)' },
            { id: 'systems', name: 'Sistemas', source: 'Bounty Fortuna (Lvl 10-30)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi H6', 'Lith C10'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi B6', 'Axi G9'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi G12', 'Axi G13'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi G10', 'Axi G7'] },
            ],
        },
    },
    {
        name: 'Gauss',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Disruption Sedna (Tier C)' },
            { id: 'chassis', name: 'Chassis', source: 'Disruption Sedna (Tier C)' },
            { id: 'systems', name: 'Sistemas', source: 'Disruption Sedna (Tier C)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi B7', 'Neo A15'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith C13', 'Meso A11'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi P9', 'Meso H5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi G15', 'Lith G12'] },
            ],
        },
    },
    {
        name: 'Grendel',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Archaeo-freighter (Sobrevivência, Europa — Locator de Arbitration Honors)' },
            { id: 'chassis', name: 'Chassis', source: 'Icefields of Riddah (Defesa, Europa — Locator de Arbitration Honors)' },
            { id: 'systems', name: 'Sistemas', source: 'Mines of Karishh (Escavação, Europa — Locator de Arbitration Honors)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith G8', 'Meso G6'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith A11', 'Lith C12'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi G15', 'Axi M6'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi G11', 'Axi G14'] },
            ],
        },
    },
    {
        name: 'Gyre',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Bounty Zariman (Lvl 90-115)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounty Zariman (Lvl 50-55)' },
            { id: 'chassis', name: 'Chassis', source: 'Bounty Zariman (Lvl 60-65)' },
            { id: 'systems', name: 'Sistemas', source: 'Bounty Zariman (Lvl 70-75)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith Q3', 'Neo T10'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi T13', 'Lith G14'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso Y2', 'Meso E7'] },
                { id: 'systems', name: 'Sistemas', relics: ['Meso V14'] },
            ],
        },
    },
    {
        name: 'Harrow',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Quest Chains of Harrow / Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Kuva Fortress (Spy/Survival)' },
            { id: 'chassis', name: 'Chassis', source: 'Fissura do Vazio (inimigos corrompidos)' },
            { id: 'systems', name: 'Sistemas', source: 'Missões de Defection' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi K6', 'Lith B11'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi N10', 'Meso G3'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi A16', 'Lith B10'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi H7', 'Lith H10'] },
            ],
        },
    },
    {
        name: 'Hildryn',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Vox Solaris (Standing)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Exploiter Orb (Orb Vallis)' },
            { id: 'chassis', name: 'Chassis', source: 'Exploiter Orb (Orb Vallis)' },
            { id: 'systems', name: 'Sistemas', source: 'Exploiter Orb (Orb Vallis)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi H6', 'Axi H8'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi A18', 'Axi L6'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi W4', 'Lith G10'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi P6', 'Axi S17'] },
            ],
        },
    },
    {
        name: 'Hydroid',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Vay Hek (Assassinato, Terra)' },
            { id: 'chassis', name: 'Chassis', source: 'Vay Hek (Assassinato, Terra)' },
            { id: 'systems', name: 'Sistemas', source: 'Vay Hek (Assassinato, Terra)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi K5', 'Meso B2'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi A3', 'Axi M3'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi C3', 'Axi C4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi H3', 'Axi H4'] },
            ],
        },
    },
    {
        name: 'Inaros',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Quest Sands of Inaros' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Quest Sands of Inaros' },
            { id: 'chassis', name: 'Chassis', source: 'Quest Sands of Inaros' },
            { id: 'systems', name: 'Sistemas', source: 'Quest Sands of Inaros' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi K12', 'Axi W1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi K6', 'Lith H4'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi I1', 'Axi I2'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi A13', 'Axi G7'] },
            ],
        },
    },
    {
        name: 'Ivara',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Missão Spy (Urano/Netuno/Plutão)' },
            { id: 'chassis', name: 'Chassis', source: 'Missão Spy (Ceres/Júpiter/Europa/Saturno)' },
            { id: 'systems', name: 'Sistemas', source: 'Missão Spy (Terra/Vênus/Marte)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi B4', 'Axi S13'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith I1', 'Neo I1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith D3', 'Meso B5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi A15', 'Axi A9'] },
            ],
        },
    },
    {
        name: 'Jade',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Quest Jade Shadows' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Ascension (Brutus, Urano)' },
            { id: 'chassis', name: 'Chassis', source: 'Ascension (Brutus, Urano)' },
            { id: 'systems', name: 'Sistemas', source: 'Ascension (Brutus, Urano)' },
        ],
        prime: null,
    },
    {
        name: 'Khora',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Sanctuary Onslaught' },
            { id: 'chassis', name: 'Chassis', source: 'Sanctuary Onslaught' },
            { id: 'systems', name: 'Sistemas', source: 'Sanctuary Onslaught' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith K9', 'Meso K4'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi K8', 'Neo K5'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi G13', 'Lith C10'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi N11', 'Lith H7'] },
            ],
        },
    },
    {
        name: 'Koumei',
        parts: [
            { id: 'bp', name: 'Blueprint', source: "Shrine Defense (Saya's Visions, Terra)" },
            { id: 'neuroptics', name: 'Neuroptics', source: "Shrine Defense (Saya's Visions, Terra)" },
            { id: 'chassis', name: 'Chassis', source: "Shrine Defense (Saya's Visions, Terra)" },
            { id: 'systems', name: 'Sistemas', source: "Shrine Defense (Saya's Visions, Terra)" },
        ],
        prime: null,
    },
    {
        name: 'Kullervo',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Acrithis (Duviri)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Acrithis (Duviri)' },
            { id: 'chassis', name: 'Chassis', source: 'Acrithis (Duviri)' },
            { id: 'systems', name: 'Sistemas', source: 'Acrithis (Duviri)' },
        ],
        prime: null,
    },
    {
        name: 'Lavos',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Father (Necralisk, Deimos)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Father (Necralisk, Deimos)' },
            { id: 'chassis', name: 'Chassis', source: 'Father (Necralisk, Deimos)' },
            { id: 'systems', name: 'Sistemas', source: 'Father (Necralisk, Deimos)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Neo A16', 'Axi F3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi P10', 'Axi A20'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi D6', 'Lith G14'] },
                { id: 'systems', name: 'Sistemas', relics: ['Meso L5', 'Lith L5'] },
            ],
        },
    },
    {
        name: 'Limbo',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'The Limbo Theorem (Quest)' },
            { id: 'chassis', name: 'Chassis', source: 'The Limbo Theorem (Quest)' },
            { id: 'systems', name: 'Sistemas', source: 'The Limbo Theorem (Quest)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Meso T3', 'Neo A9'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi L3', 'Lith L3'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi L2', 'Lith K8'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi D3', 'Lith B3'] },
            ],
        },
    },
    {
        name: 'Loki',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Hyena Pack (Assassinato, Psamathe, Netuno)' },
            { id: 'chassis', name: 'Chassis', source: 'Hyena Pack (Assassinato, Psamathe, Netuno)' },
            { id: 'systems', name: 'Sistemas', source: 'Hyena Pack (Assassinato, Psamathe, Netuno)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi S2', 'Meso F3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith G2', 'Lith O2'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso O3', 'Neo E1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi L1', 'Axi L4'] },
            ],
        },
    },
    {
        name: 'Mag',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'The Sergeant (Assassinato, Iliad, Phobos)' },
            { id: 'chassis', name: 'Chassis', source: 'The Sergeant (Assassinato, Iliad, Phobos)' },
            { id: 'systems', name: 'Sistemas', source: 'The Sergeant (Assassinato, Iliad, Phobos)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith M1', 'Meso M1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Meso B1', 'Meso B3'] },
                { id: 'chassis', name: 'Chassis', relics: ['Neo B3', 'Axi D4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi R1', 'Axi S4'] },
            ],
        },
    },
    {
        name: 'Mesa',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Mutalist Alad V (Assassinato, Eris)' },
            { id: 'chassis', name: 'Chassis', source: 'Mutalist Alad V (Assassinato, Eris)' },
            { id: 'systems', name: 'Sistemas', source: 'Mutalist Alad V (Assassinato, Eris)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith C6', 'Meso P3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Neo H3', 'Axi H4'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith R1', 'Meso C4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith D5', 'Neo M2'] },
            ],
        },
    },
    {
        name: 'Mirage',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Hidden Messages (Quest)' },
            { id: 'chassis', name: 'Chassis', source: 'Hidden Messages (Quest)' },
            { id: 'systems', name: 'Sistemas', source: 'Hidden Messages (Quest)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi M1', 'Lith M7'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi A12', 'Lith K5'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi T2', 'Lith W1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi H5', 'Meso O2'] },
            ],
        },
    },
    {
        name: 'Nekros',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Lephantis (Assassinato, Deimos)' },
            { id: 'chassis', name: 'Chassis', source: 'Lephantis (Assassinato, Deimos)' },
            { id: 'systems', name: 'Sistemas', source: 'Lephantis (Assassinato, Deimos)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi N3', 'Lith H10'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi G1', 'Axi N4'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi N5', 'Lith K11'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith N2', 'Meso N16'] },
            ],
        },
    },
    {
        name: 'Nezha',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Pesquisa no Clã (Dojo)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Pesquisa no Clã (Dojo)' },
            { id: 'chassis', name: 'Chassis', source: 'Pesquisa no Clã (Dojo)' },
            { id: 'systems', name: 'Sistemas', source: 'Pesquisa no Clã (Dojo)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi G6', 'Axi M2'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi N7', 'Lith N11'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi N8', 'Lith N10'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi O5', 'Axi S12'] },
            ],
        },
    },
    {
        name: 'Nidus',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Quest The Glast Gambit / Simaris' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Infested Salvage (Eris)' },
            { id: 'chassis', name: 'Chassis', source: 'Infested Salvage (Eris)' },
            { id: 'systems', name: 'Sistemas', source: 'Infested Salvage (Eris)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi A14', 'Lith K10'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi N12', 'Lith N12'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi N10', 'Axi N9'] },
                { id: 'systems', name: 'Sistemas', relics: ['Meso A3', 'Meso B5'] },
            ],
        },
    },
    {
        name: 'Nokko',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Deepmines Bounties (Höllvania)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounty Weed The Gardens' },
            { id: 'chassis', name: 'Chassis', source: 'Bounty Critter Liberation' },
            { id: 'systems', name: 'Sistemas', source: 'Bounty Corporate Restructuring' },
        ],
        prime: null,
    },
    {
        name: 'Nova',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Raptor (Assassinato, Europa)' },
            { id: 'chassis', name: 'Chassis', source: 'Raptor (Assassinato, Europa)' },
            { id: 'systems', name: 'Sistemas', source: 'Raptor (Assassinato, Europa)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi S4', 'Meso D5'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith N1', 'Neo N12'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith C1', 'Meso C1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi S7', 'Meso B3'] },
            ],
        },
    },
    {
        name: 'Nyx',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Phorid (Assassinato, Invasão Infestada)' },
            { id: 'chassis', name: 'Chassis', source: 'Phorid (Assassinato, Invasão Infestada)' },
            { id: 'systems', name: 'Sistemas', source: 'Phorid (Assassinato, Invasão Infestada)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Neo V9', 'Lith B4'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi S8', 'Neo N1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso N11', 'Meso N1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith C7', 'Axi S3'] },
            ],
        },
    },
    {
        name: 'Oberon',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Earth Proxima (Empyrean)' },
            { id: 'chassis', name: 'Chassis', source: 'Saturn Proxima (Empyrean)' },
            { id: 'systems', name: 'Sistemas', source: 'Earth Proxima (Empyrean)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith H2', 'Meso H1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith O1', 'Meso O1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi H2', 'Axi N5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi O1', 'Axi O2'] },
            ],
        },
    },
    {
        name: 'Octavia',
        parts: [
            { id: 'bp', name: 'Blueprint', source: "Octavia's Anthem (Quest) / Simaris" },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Terrorem (Deimos)' },
            { id: 'chassis', name: 'Chassis', source: 'Music Puzzle Room (Lua)' },
            { id: 'systems', name: 'Sistemas', source: 'Plato (Lua)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi O5', 'Lith O3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi K8', 'Axi S11'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi K6', 'Axi P5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi N7', 'Lith C9'] },
            ],
        },
    },
    {
        name: 'Oraxia',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Isleweaver (Duviri)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Isleweaver (Duviri)' },
            { id: 'chassis', name: 'Chassis', source: 'Isleweaver (Duviri)' },
            { id: 'systems', name: 'Sistemas', source: 'Isleweaver (Duviri)' },
        ],
        prime: null,
    },
    {
        name: 'Protea',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'The Deadlock Protocol (Quest) / Simaris' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Granum Void' },
            { id: 'chassis', name: 'Chassis', source: 'Granum Void (Exemplar Crown)' },
            { id: 'systems', name: 'Sistemas', source: 'Granum Void (Zenith Crown)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi N13', 'Axi V13'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi P7', 'Axi P8'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi S16', 'Axi T12'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi P9', 'Lith P9'] },
            ],
        },
    },
    {
        name: 'Qorvex',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Whispers in the Walls (Quest)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Sanctum Anatomica (Bounty)' },
            { id: 'chassis', name: 'Chassis', source: 'Sanctum Anatomica (Bounty)' },
            { id: 'systems', name: 'Sistemas', source: 'Sanctum Anatomica (Bounty)' },
        ],
        prime: null,
    },
    {
        name: 'Revenant',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mask of the Revenant (Quest) / Simaris' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounty Cetus (Cambion Drift/Plains)' },
            { id: 'chassis', name: 'Chassis', source: 'Bounty Cetus / Plague Star' },
            { id: 'systems', name: 'Sistemas', source: 'Bounty Cetus' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith R2', 'Lith R3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi A16', 'Axi B8'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso C9', 'Meso H5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi D5', 'Lith S14'] },
            ],
        },
    },
    {
        name: 'Rhino',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Jackal (Assassinato, Fossa, Vênus)' },
            { id: 'chassis', name: 'Chassis', source: 'Jackal (Assassinato, Fossa, Vênus)' },
            { id: 'systems', name: 'Sistemas', source: 'Jackal (Assassinato, Fossa, Vênus)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi R1', 'Axi R4'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith E1', 'Meso M1'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith B1', 'Lith B4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi S3', 'Neo B3'] },
            ],
        },
    },
    {
        name: 'Saryn',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Kela De Thaym (Assassinato, Merrow, Sedna)' },
            { id: 'chassis', name: 'Chassis', source: 'Kela De Thaym (Assassinato, Merrow, Sedna)' },
            { id: 'systems', name: 'Sistemas', source: 'Kela De Thaym (Assassinato, Merrow, Sedna)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi N12', 'Axi N6'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Neo S2', 'Neo S10'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi V9', 'Lith C5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi G1', 'Axi S5'] },
            ],
        },
    },
    {
        name: 'Sevagoth',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão Call of the Tempestarii' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Void Storms (Netuno/Plutão/Véu Proxima)' },
            { id: 'chassis', name: 'Chassis', source: 'Void Storms (Netuno/Plutão/Véu Proxima)' },
            { id: 'systems', name: 'Sistemas', source: 'Void Storms (Netuno/Plutão/Véu Proxima)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi Y3', 'Axi Z2'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi S17', 'Axi S18'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi G14', 'Axi Y1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith A7', 'Lith C12'] },
            ],
        },
    },
    {
        name: 'Sirius & Orion',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão Jade Shadows: Constellations' },
            { id: 'neuroptics', name: 'Neuroptics', source: "Scoria's Angel / Kuva Wytch (Urano Proxima)" },
            { id: 'chassis', name: 'Chassis', source: "Scoria's Angel / Kuva Wytch (Urano Proxima)" },
            { id: 'systems', name: 'Sistemas', source: "Scoria's Angel / Kuva Wytch (Urano Proxima)" },
        ],
        prime: null,
    },
    {
        name: 'Styanax',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Chipper — Guarnição de Kahl (Stock)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Chipper — Guarnição de Kahl (Stock)' },
            { id: 'chassis', name: 'Chassis', source: 'Chipper — Guarnição de Kahl (Stock)' },
            { id: 'systems', name: 'Sistemas', source: 'Chipper — Guarnição de Kahl (Stock)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi A21'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Meso Y2'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith S18'] },
                { id: 'systems', name: 'Sistemas', relics: ['Neo Y1'] },
            ],
        },
    },
    {
        name: 'Temple',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Solstice Square — Defesa (Höllvania)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Solstice Square — Defesa (Höllvania)' },
            { id: 'chassis', name: 'Chassis', source: 'Solstice Square — Defesa (Höllvania)' },
            { id: 'systems', name: 'Sistemas', source: 'Solstice Square — Defesa (Höllvania)' },
        ],
        prime: null,
    },
    {
        name: 'Titania',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão The Silver Grove' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Missão The Silver Grove' },
            { id: 'chassis', name: 'Chassis', source: 'Missão The Silver Grove' },
            { id: 'systems', name: 'Sistemas', source: 'Missão The Silver Grove' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi V11', 'Lith H3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith G4', 'Lith N10'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi M2', 'Axi S9'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi T5', 'Lith T11'] },
            ],
        },
    },
    {
        name: 'Trinity',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Ambulas (Assassinato, Hades, Plutão)' },
            { id: 'chassis', name: 'Chassis', source: 'Ambulas (Assassinato, Hades, Plutão)' },
            { id: 'systems', name: 'Sistemas', source: 'Ambulas (Assassinato, Hades, Plutão)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi S1', 'Lith K1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi H1', 'Axi H2'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi C1', 'Axi V3'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi A1', 'Axi C2'] },
            ],
        },
    },
    {
        name: 'Uriel',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão The Old Peace' },
            { id: 'neuroptics', name: 'Neuroptics', source: "Roathe's Oblivion (Assassinato, Infernium 21, The Descendia)" },
            { id: 'chassis', name: 'Chassis', source: "Roathe's Oblivion (Assassinato, Infernium 21, The Descendia)" },
            { id: 'systems', name: 'Sistemas', source: "Roathe's Oblivion (Assassinato, Infernium 21, The Descendia)" },
        ],
        prime: null,
    },
    {
        name: 'Valkyr',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Alad V (Assassinato, Júpiter)' },
            { id: 'chassis', name: 'Chassis', source: 'Alad V (Assassinato, Júpiter)' },
            { id: 'systems', name: 'Sistemas', source: 'Alad V (Assassinato, Júpiter)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Lith C7', 'Axi V7'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Neo V9', 'Axi V5'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso N11', 'Lith C5'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi V10', 'Lith V3'] },
            ],
        },
    },
    {
        name: 'Vauban',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Mercado' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Nightwave (Cred Offerings)' },
            { id: 'chassis', name: 'Chassis', source: 'Nightwave (Cred Offerings)' },
            { id: 'systems', name: 'Sistemas', source: 'Nightwave (Cred Offerings)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi F1', 'Lith F2'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi V1', 'Lith V4'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith V7', 'Meso V8'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith V2', 'Lith V8'] },
            ],
        },
    },
    {
        name: 'Volt',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Pesquisa no Dojo (Tenno Lab)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Pesquisa no Dojo (Tenno Lab)' },
            { id: 'chassis', name: 'Chassis', source: 'Pesquisa no Dojo (Tenno Lab)' },
            { id: 'systems', name: 'Sistemas', source: 'Pesquisa no Dojo (Tenno Lab)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Neo O1', 'Axi N3'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi V8', 'Meso O3'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi V8', 'Axi V1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Neo O1', 'Axi L4'] },
            ],
        },
    },
    {
        name: 'Voruna',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Sobrevivência de Conjunção (Lua)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Sobrevivência de Conjunção (Lua)' },
            { id: 'chassis', name: 'Chassis', source: 'Sobrevivência de Conjunção (Lua)' },
            { id: 'systems', name: 'Sistemas', source: 'Sobrevivência de Conjunção (Lua)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi V14', 'Axi A21'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Meso A12', 'Meso D8'] },
                { id: 'chassis', name: 'Chassis', relics: ['Lith V11', 'Neo V12'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith V11', 'Neo V12'] },
            ],
        },
    },
    {
        name: 'Wisp',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Ropalolyst (Assassinato, Júpiter)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Ropalolyst (Assassinato, Júpiter)' },
            { id: 'chassis', name: 'Chassis', source: 'Ropalolyst (Assassinato, Júpiter)' },
            { id: 'systems', name: 'Sistemas', source: 'Ropalolyst (Assassinato, Júpiter)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi W3', 'Axi W4'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Lith W3', 'Lith W4'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi F2', 'Lith A7'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi A17', 'Axi B7'] },
            ],
        },
    },
    {
        name: 'Wukong',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Pesquisa no Dojo (Tenno Lab)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Pesquisa no Dojo (Tenno Lab)' },
            { id: 'chassis', name: 'Chassis', source: 'Pesquisa no Dojo (Tenno Lab)' },
            { id: 'systems', name: 'Sistemas', source: 'Pesquisa no Dojo (Tenno Lab)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi W1', 'Axi W2'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi A10', 'Axi T6'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi G2', 'Axi T4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi A11', 'Axi P3'] },
            ],
        },
    },
    {
        name: 'Xaku',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Missão Coração de Deimos' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Bounty (Cambion Drift)' },
            { id: 'chassis', name: 'Chassis', source: 'Bounty (Cambion Drift)' },
            { id: 'systems', name: 'Sistemas', source: 'Bounty (Cambion Drift)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Meso X1', 'Lith X1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Neo C9', 'Neo V12'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi T13', 'Meso K8'] },
                { id: 'systems', name: 'Sistemas', relics: ['Axi S20', 'Lith A12'] },
            ],
        },
    },
    {
        name: 'Yareli',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Quest The Waverider' },
            { id: 'neuroptics', name: 'Neuroptics', source: "Ventkids' Bash Lab (Dojo)" },
            { id: 'chassis', name: 'Chassis', source: "Ventkids' Bash Lab (Dojo)" },
            { id: 'systems', name: 'Sistemas', source: "Ventkids' Bash Lab (Dojo)" },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Meso D8', 'Neo T11'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Meso X1', 'Neo A16'] },
                { id: 'chassis', name: 'Chassis', relics: ['Meso Y2', 'Neo Y1'] },
                { id: 'systems', name: 'Sistemas', relics: ['Neo Y1', 'Axi Y1'] },
            ],
        },
    },
    {
        name: 'Zephyr',
        parts: [
            { id: 'bp', name: 'Blueprint', source: 'Tenno Lab (Dojo)' },
            { id: 'neuroptics', name: 'Neuroptics', source: 'Tenno Lab (Dojo)' },
            { id: 'chassis', name: 'Chassis', source: 'Tenno Lab (Dojo)' },
            { id: 'systems', name: 'Sistemas', source: 'Tenno Lab (Dojo)' },
        ],
        prime: {
            founderExclusive: false,
            parts: [
                { id: 'bp', name: 'Blueprint', relics: ['Axi G5', 'Meso Z1'] },
                { id: 'neuroptics', name: 'Neuroptics', relics: ['Axi L3', 'Axi O3'] },
                { id: 'chassis', name: 'Chassis', relics: ['Axi A4', 'Axi O4'] },
                { id: 'systems', name: 'Sistemas', relics: ['Lith Z1', 'Lith Z2'] },
            ],
        },
    },
];
