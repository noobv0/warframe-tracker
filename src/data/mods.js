import { useEffect, useState } from 'react';

// Carrega o database de mods (src/data/mods.generated.json) sob demanda —
// só quando a aba Plague Star abre, via import() dinâmico (code-split do webpack).
// O JSON é gerado por `node scripts/build-mods.mjs`.

let cache = null;
let inflight = null;

function buildIndex(list) {
    const byKey = new Map();
    const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
    for (const mod of list) byKey.set(norm(mod.name), mod);
    return {
        list,
        count: list.length,
        get: (name) => byKey.get(norm(name)) || null,
        search: (q, fits) => {
            const n = norm(q);
            return list.filter(
                (m) => (!fits || m.fits === fits || m.fits === 'set') && norm(m.name).includes(n)
            );
        },
    };
}

export function useModDb() {
    const [db, setDb] = useState(cache);
    useEffect(() => {
        if (cache) return;
        if (!inflight) {
            inflight = import('./mods.generated.json').then((m) => {
                cache = buildIndex(m.default);
                return cache;
            });
        }
        let alive = true;
        inflight.then((d) => alive && setDb(d));
        return () => { alive = false; };
    }, []);
    return db; // null enquanto carrega
}
