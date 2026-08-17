// Fonte: wiki.warframe.com/w/Reset — só resets recorrentes semanais
// (sem eventos, sem Baro Ki'Teer, sem itens únicos). Reset toda segunda 00:00 UTC.
export const WEEKLY_TASKS = [
    // Atividades
    { id: 'archon-hunt', name: 'Archon Hunt', category: 'atividade', note: '' },
    { id: 'netracells', name: 'Netracells', category: 'atividade', note: '' },
    { id: 'nightwave-weekly', name: 'Nightwave — Ato Semanal', category: 'atividade', note: '' },
    { id: 'nightwave-elite', name: 'Nightwave — Ato Semanal Elite', category: 'atividade', note: '' },
    { id: 'deep-archimedea', name: 'Deep Archimedea', category: 'atividade', note: '' },
    { id: 'temporal-archimedea', name: 'Temporal Archimedea', category: 'atividade', note: '' },
    { id: 'maroo-ayatan', name: "Caça ao Tesouro Ayatan da Maroo", category: 'atividade', note: '' },
    { id: 'help-clem', name: 'Alerta "Ajude o Clem"', category: 'atividade', note: '' },
    { id: 'clan-initiatives', name: 'Iniciativas Semanais do Clã', category: 'atividade', note: '' },
    { id: 'helminth-invigoration', name: 'Invigoration do Helminth', category: 'atividade', note: '' },
    { id: 'kahl-garrison', name: 'Guarnição do Kahl (Narmer)', category: 'atividade', note: '' },
    { id: 'descendia', name: 'Desafios da Descendia', category: 'atividade', note: '' },
    { id: 'circuit-normal', name: 'Circuito (Normal)', category: 'atividade', note: '', dynamic: 'normal-circuit' },
    { id: 'circuit-steel-path', name: 'Circuito (Steel Path)', category: 'atividade', note: '', dynamic: 'steel-path-circuit' },
    // Vendedores
    { id: 'nightwave-cred', name: 'Créditos da Nightwave (Mods Aura/Augmento)', category: 'vendedor', note: '' },
    { id: 'palladino', name: 'Ofertas da Palladino', category: 'vendedor', note: '' },
    { id: 'yonta-kuva', name: 'Kuva da Archimedean Yonta', category: 'vendedor', note: '' },
    { id: 'teshin-honors', name: 'Honras de Steel Path do Teshin', category: 'vendedor', note: '' },
    { id: 'bird3-archon-shard', name: 'Archon Shard do Bird 3', category: 'vendedor', note: '' },
    { id: 'kaya-arcane', name: 'Arcanes da Kaya', category: 'vendedor', note: '' },
    { id: 'acrithis-offerings', name: 'Catalisador/Reator da Acrithis', category: 'vendedor', note: '' },
    { id: 'cavalero-incarnon', name: 'Mercado de Incarnon do Cavalero', category: 'vendedor', note: '' },
];
