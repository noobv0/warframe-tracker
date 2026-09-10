// Coleção de builds — estilo Overframe. Conteúdo em maior parte AUTORAL, só leitura.
// As builds importadas de guias de terceiros trazem `source` (link) e `credit`.
//
// Cada build:
//   id         : identificador único (kebab-case)
//   category   : 'warframe' | 'primary' | 'secondary' | 'melee' | 'amp' | 'archwing' | 'companion'
//   subject    : nome exato do frame/arma (usado no thumbnail e no subtítulo)
//   title      : título da build (aparece na lista)
//   purpose    : (opcional) pra que serve, em uma linha
//   event      : (opcional) etiqueta de contexto, ex: 'Plague Star'
//   update     : (opcional) versão do jogo, ex: '39.0'
//   difficulty : (opcional) 'green' | 'yellow' | 'orange' | 'red' (dificuldade de jogar)
//   tags       : (opcional) ['solo', 'squad', 'baixo MR', ...]
//   notes      : (opcional) texto mais longo, aparece só na tela de detalhe
//   source     : (opcional) URL da build original (aparece um botão na tela de detalhe)
//   credit     : (opcional) { name, org, author, url } — crédito de quem fez
//   build      : {
//     aura    : mod de aura            (warframe)
//     stance  : stance                 (melee)
//     exilus  : mod de exilus
//     mods    : [ até 8 nomes de mod ] — nome exato em inglês, o card puxa do DB
//     arcanes : [ nomes de arcana ]    — texto livre
//     forma   : número de formas
//     obs     : observação curta
//   }
// Sem `build` (ou sem mods), a tela de detalhe mostra só os dados + link da fonte.

import { CASCADE_BUILDS } from './builds.cascade';

export const BUILD_CATEGORIES = [
    { id: 'warframe', label: 'Warframes' },
    { id: 'primary', label: 'Primárias' },
    { id: 'secondary', label: 'Secundárias' },
    { id: 'melee', label: 'Melee' },
    { id: 'amp', label: 'Amps' },
    { id: 'archwing', label: 'Archwing' },
    { id: 'companion', label: 'Companheiros' },
];

const MY_BUILDS = [
    {
        id: 'nova-plague-star',
        category: 'warframe',
        subject: 'Nova Prime',
        title: 'Nova Slow — Plague Star',
        purpose: 'Lentidão global + amplificação de dano',
        event: 'Plague Star',
        tags: ['solo', 'squad'],
        build: {
            aura: 'Brief Respite',
            exilus: 'Primed Sure Footed',
            mods: [
                'Adaptation', 'Intensify', 'Escape Velocity', 'Molecular Fission',
                'Primed Continuity', 'Primed Flow', 'Augur Secrets', 'Equilibrium',
            ],
            arcanes: ['Precisão Arcana', 'Ampliação Exúvia'],
            obs: '',
        },
    },
    {
        id: 'afentis-plague-star',
        category: 'primary',
        subject: 'Afentis',
        title: 'Afentis Status — Plague Star',
        purpose: 'Dano de status à distância',
        event: 'Plague Star',
        tags: ['squad'],
        build: {
            exilus: 'Vigilante Supplies',
            mods: [
                'Semi-Rifle Cannonade', 'Galvanized Chamber', 'Critical Delay', 'Vital Sense',
                'Hunter Munitions', 'Malignant Force', 'Rime Rounds', 'Rifle Elementalist',
            ],
            arcanes: ['Impiedade'],
            obs: '',
        },
    },
    {
        id: 'pyrana-plague-star',
        category: 'secondary',
        subject: 'Pyrana Prime',
        title: 'Pyrana Prime DPS — Plague Star',
        purpose: 'DPS single-target no Hemocyte',
        event: 'Plague Star',
        tags: ['solo', 'squad'],
        build: {
            exilus: 'Pistol Ammo Mutation',
            mods: [
                'Hornet Strike', 'Galvanized Diffusion', 'Primed Pistol Gambit', 'Primed Target Cracker',
                'Lethal Torrent', 'Scorch', 'Primed Heated Charge', 'Galvanized Crosshairs',
            ],
            arcanes: ['Precisão Letal'],
            obs: '',
        },
    },
    {
        id: 'sarpa-plague-star',
        category: 'melee',
        subject: 'Sarpa',
        title: 'Sarpa CO — Plague Star',
        purpose: 'Remoção de armadura + Condition Overload',
        event: 'Plague Star',
        tags: ['squad'],
        build: {
            stance: 'High Noon',
            mods: [
                'Shattering Impact', 'Gladiator Vice', 'Condition Overload', 'Weeping Wounds',
                'Blood Rush', 'Organ Shatter', 'Virulent Scourge', 'Vicious Frost',
            ],
            arcanes: [],
            obs: 'Slot de arcana melee travado (falta Adaptador Arcano).',
        },
    },
];

// Grades de mod transcritas dos docs do Void Cascade guide (prints).
// Chave = id da entrada em builds.cascade.js. Merge por cima da entrada gerada.
// Lidas de screenshots pequenos — algum nome pode precisar de ajuste (o card
// mostra "?" se não bater com o database de mods).
const CASCADE_MODS = {
    'nova-void-cascade': {
        purpose: 'Silence Slowva — Weapon Platform · Void Cascade',
        build: {
            aura: 'Brief Respite',
            exilus: 'Primed Sure Footed',
            mods: ['Primed Flow', 'Stretch', 'Narrow Minded', 'Augur Reach',
                'Primed Continuity', 'Umbral Intensify', 'Rolling Guard', 'Catalyzing Shields'],
            arcanes: ['Arcane Energize', 'Molt Efficiency'],
            obs: 'Subsume Silence sobre a 1. Shards: 2x corrosivo, 2x casting speed, 1x força (Tau).',
        },
    },
    'ash-void-cascade': {
        build: {
            aura: 'Growing Power',
            exilus: 'Primed Sure Footed',
            mods: ['Primed Continuity', 'Narrow Minded', 'Augur Secrets', 'Umbral Intensify',
                'Seeking Shuriken', 'Equilibrium', 'Primed Flow', 'Rolling Guard'],
            arcanes: ['Arcane Fury', 'Arcane Precision'],
            obs: 'Seeking Shuriken pra armor strip. Subsume flexível sobre Teleport/Bladestorm. Shards: 5x livre.',
        },
    },
    'saryn-void-cascade': {
        purpose: 'Secondary DPS Platform (Nourish) · Void Cascade',
        build: {
            aura: 'Brief Respite',
            exilus: 'Power Drift',
            mods: ['Equilibrium', 'Fast Deflection', 'Vigilante Vigor', 'Venom Dose',
                'Catalyzing Shields', 'Narrow Minded', 'Transient Fortitude', 'Rolling Guard'],
            arcanes: ['Arcane Velocity', 'Arcane Precision'],
            obs: 'Subsume Nourish sobre a 4. Shards: 2x corrosivo, 3x dano de status de toxina. Build: Sugliee.',
        },
    },
    'revenant-void-cascade': {
        build: {
            aura: 'Growing Power',
            exilus: 'Power Drift',
            mods: ['Umbral Intensify', 'Primed Continuity', 'Primed Flow', 'Equilibrium',
                'Blind Rage', 'Transient Fortitude', 'Narrow Minded', 'Mesmer Shield'],
            arcanes: [],
            obs: 'Arcanas e subsume flexíveis conforme as armas. Shards: 5x livre.',
        },
    },
    'octavia-void-cascade': {
        build: {
            aura: 'Corrosive Projection',
            exilus: 'Primed Sure Footed',
            mods: ['Rolling Guard', 'Primed Continuity', 'Stretch', 'Augur Reach',
                'Umbral Intensify', 'Primed Flow', 'Equilibrium', 'Augur Secrets'],
            arcanes: ['Molt Augmented', 'Molt Efficiency'],
            obs: 'Subsume sobre a 4 (não Nourish). Stretch → Archon Stretch. Shards: 2x corrosivo, 1x casting speed, 1x parkour, 1x duração.',
        },
    },
    'wisp-void-cascade': {
        purpose: 'Secondary DPS Platform · Void Cascade',
        build: {
            aura: 'Brief Respite',
            exilus: 'Primed Sure Footed',
            mods: ['Primed Continuity', 'Blind Rage', 'Augur Message', 'Rolling Guard',
                'Primed Flow', 'Archon Stretch', 'Precision Intensify', 'Equilibrium'],
            arcanes: ['Arcane Precision', 'Molt Augmented'],
            obs: "Subsume sobre a 4 (Nourish/Roar/Xata's Whisper). Shards: 2x corrosivo, 1x casting speed (Tau), 2x duração (Tau).",
        },
    },
    'loki-void-cascade': {
        build: {
            aura: 'Growing Power',
            exilus: 'Primed Sure Footed',
            mods: ['Narrow Minded', 'Precision Intensify', 'Equilibrium', 'Primed Continuity',
                'Primed Flow', 'Augur Secrets', 'Safeguard Switch'],
            arcanes: ['Arcane Precision', 'Arcane Fury'],
            obs: "8º slot flexível: Augur Message / Nira's Hatred / Vigorous Swap. Subsume sobre a 4 (ou mantém a 4 com Umbral Intensify). Shards: 2x corrosivo, 3x livre.",
        },
    },
    'khora-void-cascade': {
        build: {
            aura: 'Corrosive Projection',
            exilus: 'Primed Sure Footed',
            mods: ['Rolling Guard', 'Primed Flow', 'Precision Intensify', 'Primed Continuity',
                'Catalyzing Shields', 'Equilibrium', 'Accumulating Whipclaw', 'Archon Stretch'],
            arcanes: ['Molt Efficiency', 'Arcane Fury'],
            obs: 'Subsume Nourish sobre a 4. Shards: 4x dano crítico de melee (Tau), 1x livre.',
        },
    },
    'dante-void-cascade': {
        build: {
            aura: 'Growing Power',
            exilus: 'Speed Drift',
            mods: ['Primed Continuity', 'Streamline', 'Primed Flow', 'Rolling Guard',
                'Transient Fortitude', 'Umbral Intensify', 'Stretch', 'Equilibrium'],
            arcanes: ['Arcane Steadfast', 'Molt Augmented'],
            obs: 'Subsume Roar sobre a 1. Shards: 2x casting speed (Tau), 2x corrosivo, 1x força.',
        },
    },
    'gauss-void-cascade': {
        purpose: 'General Secondary Platform · Void Cascade',
        build: {
            aura: 'Corrosive Projection',
            exilus: 'Mobilize',
            mods: ['Primed Continuity', 'Umbral Intensify', 'Primed Flow', 'Vigorous Swap',
                'Narrow Minded', 'Fast Deflection', 'Thermal Transfer', 'Energy Nexus'],
            arcanes: ['Arcane Aegis', 'Arcane Precision'],
            obs: 'Subsume Nourish sobre a 2. Shards: 5x livre. Build: Permasick.',
        },
    },
    'rhino-void-cascade': {
        purpose: 'High Range Stomp · Void Cascade',
        build: {
            aura: 'Ready Steel',
            exilus: 'Ice Spring',
            mods: ['Overextended', 'Archon Stretch', 'Energy Nexus', 'Primed Continuity',
                'Blind Rage', 'Streamline', 'Primed Flow', 'Umbral Intensify'],
            arcanes: ['Arcane Precision', 'Molt Augmented'],
            obs: 'Subsume Nourish sobre a 1. Shards: 1x casting speed (Tau), 1x parkour, 3x crit de secundária (ou 2x casting speed + 3x livre).',
        },
    },
};

export const BUILDS = [
    ...MY_BUILDS,
    ...CASCADE_BUILDS.map(b => (CASCADE_MODS[b.id] ? { ...b, ...CASCADE_MODS[b.id] } : b)),
];
