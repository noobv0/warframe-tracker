// Guia de recomendações da Operação: Plague Star — conteúdo AUTORAL, só leitura.
// Os amigos abrem a aba e veem o que você recomenda. Pra atualizar, mexe só aqui.
//
// 4 sub-abas: warframe, primary, secondary, melee.
//
// Cada pick:
//   name  : nome do frame/arma
//   label : 'core' | 'suporte'   ('core' = carrega a run; 'suporte' = complementa)
//   role  : frase curta do papel (ex: "Limpeza de área", "Priming de status")
//   why   : por que recomenda (1-3 frases)
//   tags  : (opcional) etiquetas livres — ['solo', 'squad', 'baixo MR', ...]
//   build : (opcional) {
//             aura    : nome do mod de aura       (só warframe)
//             stance  : nome da stance            (só melee)
//             exilus  : nome do mod de exilus
//             mods    : [ até 8 nomes de mod ]    — nome exato (inglês), o card puxa o resto do DB
//             arcanes : [ nomes de arcana ]       — texto livre (não estão no DB de mods)
//             forma   : número de formas          (opcional)
//             obs     : observação curta          (opcional)
//           }
//
// role / why / tags abaixo são um primeiro rascunho meu — ajusta pro teu texto.
// As builds foram transcritas dos teus prints.

export const PLAGUE_STAR = {
    eventName: 'Operação: Plague Star',
    updatedAt: '2026-09-09',
    intro:
        'Minhas recomendações pra farmar o Plague Star com eficiência — do jeito que eu rodo. ' +
        'Foco em derrubar o Hemocyte rápido e limpar o trash infestado no caminho.',
    tips: [
        'Exemplo: leve o Eidolon Phylaxis (Operativo em Cetus) pra +100% de standing por run.',
        'Exemplo: monte vários Bilhetes de Serviço no Foundry antes — cada um aumenta a recompensa.',
    ],

    categories: [
        { id: 'warframe', label: 'Warframes' },
        { id: 'primary', label: 'Primárias' },
        { id: 'secondary', label: 'Secundárias' },
        { id: 'melee', label: 'Melee' },
    ],

    picks: {
        warframe: [
            {
                name: 'Nova Prime',
                label: 'core',
                role: 'Lentidão global + amplificação de dano',
                why:
                    'Molecular Prime deixa todo o boil lento e faz os infestados explodirem em cadeia, ' +
                    'além de aumentar todo o dano que o Hemocyte recebe. Setup tanky com Molecular Fission ' +
                    'e Brief Respite pra segurar a fase de canalização.',
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
        ],
        primary: [
            {
                name: 'Afentis',
                label: 'suporte',
                role: 'Dano de status à distância',
                why:
                    'Cadência alta com Hunter Munitions e status corrosivo/gelo raspa o Hemocyte de longe ' +
                    'enquanto a Nova segura o campo. Vigilante Supplies mantém a munição.',
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
        ],
        secondary: [
            {
                name: 'Pyrana Prime',
                label: 'core',
                role: 'DPS single-target no Hemocyte',
                why:
                    'Com Precisão Letal e o orbe do modo Prime, despeja dano altíssimo na fase de canalização ' +
                    'e ainda limpa trash. Corrosivo + Calor pra status.',
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
        ],
        melee: [
            {
                name: 'Sarpa',
                label: 'suporte',
                role: 'Remoção de armadura + Condition Overload',
                why:
                    'Shattering Impact tira armadura do Hemocyte a cada acerto e Condition Overload multiplica ' +
                    'pelo status que a Pyrana aplicou. High Noon (gunblade) pra alcance.',
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
        ],
    },
};
