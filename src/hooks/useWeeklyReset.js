// Chave da semana atual = data (UTC) da segunda-feira mais recente.
// O reset do jogo acontece toda segunda 00:00 UTC.
export function getCurrentWeekKey() {
    const now = new Date();
    const day = now.getUTCDay(); // 0 = domingo ... 6 = sábado
    const diffToMonday = day === 0 ? 6 : day - 1;
    const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - diffToMonday));
    return monday.toISOString().slice(0, 10);
}

// Recebe o estado salvo { weekKey, items } e a lista de itens padrão.
// Sempre sincroniza com a lista atual de itens padrão (adiciona itens novos
// que não existiam antes). Se a semana salva for diferente da atual,
// desmarca tudo (mantendo as notas) — reset semanal de verdade.
export function applyWeeklyReset(stored, defaultTasks) {
    const currentWeekKey = getCurrentWeekKey();

    if (!stored || !Array.isArray(stored.items)) {
        return {
            weekKey: currentWeekKey,
            items: defaultTasks.map(t => ({ ...t, done: false })),
        };
    }

    const weekChanged = stored.weekKey !== currentWeekKey;
    const existingById = new Map(stored.items.map(item => [item.id, item]));
    const items = defaultTasks.map(t => {
        const existing = existingById.get(t.id);
        if (!existing) return { ...t, done: false };
        return { ...t, note: existing.note ?? t.note, done: weekChanged ? false : existing.done };
    });

    return { weekKey: currentWeekKey, items };
}
