// Gera src/data/mods.generated.json a partir do dataset da WarframeCommunityDevelopers
// (pacote `warframe-items`, derivado da API pública de export do jogo).
//
// Uso:  node scripts/build-mods.mjs
//
// Baixa o Mods.json completo (~6.7 MB), corta pros campos que a aba Plague Star
// usa e salva um arquivo enxuto (~150-250 KB) versionado no repo. Roda de novo
// só quando quiser atualizar a base (raro — os mods de Plague Star são antigos).

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SRC = 'https://cdn.jsdelivr.net/npm/warframe-items@latest/data/json/Mods.json';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'mods.generated.json');

// Tipos de mod que NÃO interessam pra builds de frame/arma normais.
const SKIP_TYPES = new Set([
    'Focus Way', 'Archwing Mod', 'Arch-Gun Mod', 'Arch-Melee Mod', 'K-Drive Mod',
    'Plexus Mod', 'Railjack Mod', 'Necramech Mod', 'Parazon Mod', 'Peculiar Mod',
    'Transmutation Mod', 'Posture Mod', 'Companion Mod', 'Companion Weapon Mod',
]);
const isRiven = (t = '') => t.includes('Riven');
const stripTags = (s = '') => s.replace(/<[^>]+>/g, '').replace(/\\n|\s+/g, ' ').trim();
const POLARITIES = new Set(['madurai', 'vazarin', 'naramon', 'zenurik', 'unairu', 'penjaga', 'umbra', 'universal']);

// Imagem do card completo do mod na wiki (arte + moldura + nome + descrição + pips).
// Formato consistente 310x453. Padrão: <NomeSemEspaço/Apóstrofo>Mod.png
const wikiCard = (name) =>
    `https://wiki.warframe.com/images/${name.replace(/['’.]/g, '').replace(/\s+/g, '')}Mod.png`;

// Normaliza onde o mod encaixa, pra alimentar as 4 sub-abas + slots especiais.
function resolveFits(mod) {
    const t = mod.type || '';
    const c = mod.compatName || '';
    if (c === 'AURA') return 'aura';
    if (t === 'Stance Mod') return 'stance';
    if (t === 'Warframe Mod' || c === 'WARFRAME') return 'warframe';
    if (/(Primary|Rifle|Shotgun|Bow)/.test(t) || /(RIFLE|SHOTGUN|BOW)/i.test(c)) return 'primary';
    if (/(Secondary|Pistol)/.test(t) || /PISTOL/i.test(c)) return 'secondary';
    if (t === 'Melee Mod' || /MELEE/i.test(c)) return 'melee';
    if (t === 'Mod Set Mod') return 'set';
    if (/Companion|Sentinel|Kubrow|Kavat|MOA|Predasite|Vulpaphyla/i.test(c)) return 'companion';
    return 'other';
}

function trimMod(mod) {
    const effect =
        mod.description ||
        mod.levelStats?.at(-1)?.stats?.join(' · ') ||
        mod.levelStats?.[0]?.stats?.join(' · ') ||
        '';
    return {
        name: mod.name,
        polarity: POLARITIES.has(mod.polarity) ? mod.polarity : null, // madurai | vazarin | naramon | zenurik | unairu | penjaga | umbra | universal
        rarity: (mod.rarity || '').toLowerCase() || null, // common | uncommon | rare | legendary
        drain: typeof mod.baseDrain === 'number' ? mod.baseDrain : null,
        maxRank: typeof mod.fusionLimit === 'number' ? mod.fusionLimit : null,
        fits: resolveFits(mod),
        compat: mod.compatName || null,
        isAugment: /Augment/i.test(mod.type || '') || Boolean(mod.isAugment),
        effect: stripTags(effect),
        wikiUrl: mod.wikiaUrl || null,
        card: wikiCard(mod.name),
    };
}

// O dataset traz variantes de baixo MR com o MESMO nome (ex: 3 "Serration":
// beginner rank 3, intermediate rank 5, e a real rank 10). Fica só a "melhor":
// maior rank máximo, depois maior drain.
function dedupeByName(list) {
    const best = new Map();
    for (const m of list) {
        const cur = best.get(m.name);
        if (!cur) { best.set(m.name, m); continue; }
        const score = x => (x.maxRank ?? 0) * 100 + (x.drain ?? 0);
        if (score(m) > score(cur)) best.set(m.name, m);
    }
    return [...best.values()];
}

const res = await fetch(SRC);
if (!res.ok) {
    console.error(`Falha ao baixar Mods.json: HTTP ${res.status}`);
    process.exit(1);
}
const all = await res.json();

const mods = dedupeByName(
    all
        .filter(m => m.name && !SKIP_TYPES.has(m.type) && !isRiven(m.type))
        .map(trimMod)
        .filter(m => m.fits !== 'other' && m.fits !== 'companion')
).sort((a, b) => a.name.localeCompare(b.name));

const byFits = mods.reduce((acc, m) => ((acc[m.fits] = (acc[m.fits] || 0) + 1), acc), {});

writeFileSync(OUT, JSON.stringify(mods));
const kb = (JSON.stringify(mods).length / 1024).toFixed(0);
console.log(`OK: ${mods.length} mods -> ${OUT} (${kb} KB)`);
console.log('por encaixe:', byFits);
console.log('exemplo:', JSON.stringify(mods.find(m => m.name === 'Serration'), null, 2));
