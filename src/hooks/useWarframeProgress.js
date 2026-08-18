import { useEffect, useState } from 'react';
import { WARFRAMES } from '../data/warframes';

const STORAGE_KEY = 'warframeProgress';

function partsMap(parts) {
    if (!parts) return null;
    return Object.fromEntries(parts.map(p => [p.id, false]));
}

function buildDefaultProgress() {
    const map = {};
    WARFRAMES.forEach(w => {
        map[w.name] = {
            baseParts: partsMap(w.parts),
            primeParts: w.prime && !w.prime.founderExclusive ? partsMap(w.prime.parts) : null,
            notes: '',
        };
    });
    return map;
}

// Formato antigo: array de {name, mastered, notes}. Migra pra peças base marcadas
// como obtidas quando o frame já estava "mastered", pra não perder progresso.
function migrateLegacyArray(oldArray) {
    const map = buildDefaultProgress();
    oldArray.forEach(item => {
        const entry = map[item.name];
        if (!entry) return;
        entry.notes = item.notes || '';
        if (item.mastered && entry.baseParts) {
            Object.keys(entry.baseParts).forEach(id => { entry.baseParts[id] = true; });
        }
    });
    return map;
}

function loadProgress() {
    let raw;
    try {
        raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
        console.error('Error loading warframeProgress:', e);
        return buildDefaultProgress();
    }

    if (Array.isArray(raw)) {
        return migrateLegacyArray(raw);
    }

    const defaults = buildDefaultProgress();
    if (raw && typeof raw === 'object') {
        Object.keys(defaults).forEach(name => {
            const saved = raw[name];
            if (!saved) return;
            defaults[name] = {
                baseParts: defaults[name].baseParts && { ...defaults[name].baseParts, ...saved.baseParts },
                primeParts: defaults[name].primeParts && { ...defaults[name].primeParts, ...saved.primeParts },
                notes: saved.notes || '',
            };
        });
    }
    return defaults;
}

export function useWarframeProgress() {
    const [progress, setProgress] = useState(loadProgress);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }, [progress]);

    const togglePart = (frameName, section, partId) => {
        setProgress(prev => ({
            ...prev,
            [frameName]: {
                ...prev[frameName],
                [section]: { ...prev[frameName][section], [partId]: !prev[frameName][section][partId] },
            },
        }));
    };

    // Marca (ou desmarca, se já estiver tudo marcado) todas as peças de uma vez — botão direito no card.
    const setAllParts = (frameName, section) => {
        setProgress(prev => {
            const current = prev[frameName][section];
            const allDone = Object.values(current).every(Boolean);
            const updated = Object.fromEntries(Object.keys(current).map(id => [id, !allDone]));
            return { ...prev, [frameName]: { ...prev[frameName], [section]: updated } };
        });
    };

    const setNotes = (frameName, notes) => {
        setProgress(prev => ({ ...prev, [frameName]: { ...prev[frameName], notes } }));
    };

    return { progress, togglePart, setAllParts, setNotes };
}

export function isBaseComplete(entry) {
    return !!entry?.baseParts && Object.values(entry.baseParts).every(Boolean);
}

export function isPrimeComplete(entry) {
    if (!entry?.primeParts) return false;
    return Object.values(entry.primeParts).every(Boolean);
}
