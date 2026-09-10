import React from 'react';

// Dificuldade de jogar (do Void Cascade guide): verde relaxado -> vermelho punitivo.
export const DIFFICULTY = {
    green: { color: '#22c55e', label: 'Relaxado — sobrevive por stealth / evitando dano' },
    yellow: { color: '#eab308', label: 'Shield gate + outras ferramentas (overguard, i-frames, CC)' },
    orange: { color: '#f97316', label: 'Depende só de shield gate — posição e energia importam' },
    red: { color: '#ef4444', label: 'Não faz shield gate — passiva / overguard gate / i-frames' },
};

export function DifficultyDot({ level, className = 'w-2.5 h-2.5' }) {
    const d = DIFFICULTY[level];
    if (!d) return null;
    return (
        <span
            className={`inline-block rounded-full shrink-0 ${className}`}
            style={{ background: d.color }}
            title={d.label}
        />
    );
}
