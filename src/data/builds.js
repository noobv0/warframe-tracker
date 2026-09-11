// Coleção de builds — estilo Overframe. Conteúdo AUTORAL, só leitura:
// os amigos abrem a aba, escolhem a categoria e clicam numa build pra ver os mods.
// Pra adicionar/editar, mexe só neste arquivo.
//
// Cada build:
//   id       : identificador único (kebab-case)
//   category : 'warframe' | 'primary' | 'secondary' | 'melee' | 'archwing' | 'companion'
//   subject  : nome exato do frame/arma (usado no thumbnail e no subtítulo)
//   title    : título da build (aparece na lista)
//   purpose  : (opcional) pra que serve, em uma linha
//   event    : (opcional) etiqueta de contexto, ex: 'Plague Star'
//   update   : (opcional) versão do jogo, ex: '39.0'
//   tags     : (opcional) ['solo', 'squad', 'baixo MR', ...]
//   notes    : (opcional) texto mais longo, aparece só na tela de detalhe
//   build    : {
//     aura    : mod de aura            (warframe)
//     stance  : stance                 (melee)
//     exilus  : mod de exilus
//     mods    : [ até 8 nomes de mod ] — nome exato em inglês, o card puxa do DB
//     arcanes : [ nomes de arcana ]    — texto livre
//     forma   : número de formas
//     obs     : observação curta
//   }

export const BUILD_CATEGORIES = [
    { id: 'warframe', label: 'Warframes' },
    { id: 'primary', label: 'Primárias' },
    { id: 'secondary', label: 'Secundárias' },
    { id: 'melee', label: 'Melee' },
    { id: 'archwing', label: 'Archwing' },
    { id: 'companion', label: 'Companheiros' },
];

export const BUILDS = [
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
