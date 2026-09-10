import React from 'react';

// Glifos de polaridade desenhados em SVG (nada de imagem do jogo).
// Aproximações reconhecíveis dos símbolos in-game.
const PATHS = {
    madurai: 'M2 4 L8 13 L14 4',
    vazarin: 'M5 3 V13 M5 3 C12 3 12 13 5 13',
    naramon: 'M2 8 H14 M8 6 V10',
    zenurik: 'M3 3 H13 L4 13 H13',
    unairu: 'M3 3 L8 8 L3 13 M13 3 L8 8 L13 13',
    penjaga: 'M8 3 V13 M4 5 V10 M12 5 V10',
    umbra: 'M2 4 L8 13 L14 4 M3 8.5 H13',
    universal: 'M8 2 V14 M3 5 L13 11 M13 5 L3 11',
};

export function PolarityGlyph({ polarity, className = 'w-3 h-3' }) {
    const d = PATHS[polarity];
    if (!d) return <span className={className} />;
    return (
        <svg viewBox="0 0 16 16" className={className} fill="none"
             stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d={d} />
        </svg>
    );
}

// Cores por raridade — moldura estilo mod card do Warframe.
export const RARITY = {
    common: { edge: '#7c5c3e', glow: '#c69a6d', tint: '#3a2c1e' },
    uncommon: { edge: '#6b7c88', glow: '#b3c4ce', tint: '#26313a' },
    rare: { edge: '#b8912f', glow: '#f0d386', tint: '#3a2f12' },
    legendary: { edge: '#3f9aa8', glow: '#9fe8f2', tint: '#123037' },
};
export const rarityOf = (r) => RARITY[r] || { edge: '#555c66', glow: '#8b96a3', tint: '#232830' };
