import React, { useState } from 'react';
import { PolarityGlyph, rarityOf } from './polarity';

// true  = mostra a imagem do card completo do mod (wiki.warframe.com), como no Overframe.
// false = só o card desenhado em CSS, sem nenhuma requisição externa.
const SHOW_MOD_ART = true;

const CLIP = 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)';

function Pips({ rank }) {
    const n = Math.min(rank || 0, 12);
    if (!n) return null;
    return (
        <div className="flex gap-px mt-1">
            {Array.from({ length: n }).map((_, i) => (
                <span key={i} className="flex-1 h-[3px] rounded-[1px]" style={{ background: '#57d2e6' }} />
            ))}
        </div>
    );
}

// Card desenhado — usado quando a imagem não carrega, está desligada, ou o slot
// está vazio / com nome desconhecido.
function CssCard({ mod, name, unknown, empty, slotLabel }) {
    const r = rarityOf(mod?.rarity);
    return (
        <div
            className="h-full min-h-[150px] p-[1.5px]"
            style={{
                aspectRatio: '310 / 453',
                clipPath: CLIP,
                background: empty ? '#3a3f47' : `linear-gradient(150deg, ${r.glow}, ${r.edge} 45%, #0c0f13)`,
            }}
        >
            <div
                className="h-full flex flex-col px-2 py-2"
                style={{ clipPath: CLIP, background: `linear-gradient(160deg, ${empty ? '#20242b' : r.tint} -10%, #0c0f14 60%)` }}
            >
                <div className="flex items-start justify-end gap-1" style={{ color: empty ? '#6b7280' : r.glow }}>
                    <span className="text-[10px] font-bold tabular-nums leading-none mt-0.5">
                        {mod?.drain != null ? (mod.drain < 0 ? `+${-mod.drain}` : mod.drain) : ''}
                    </span>
                    <PolarityGlyph polarity={mod?.polarity} />
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1">
                    <div className="text-[11px] font-extrabold uppercase tracking-wide leading-tight text-white line-clamp-3"
                         style={{ textShadow: '0 1px 2px rgba(0,0,0,.9)' }}>
                        {empty ? <span className="text-white/25 normal-case font-semibold">{slotLabel || 'vazio'}</span> : name}
                        {unknown && <span title="Não encontrado no database" style={{ color: '#e5383b' }}> ?</span>}
                    </div>
                    {mod?.effect && <div className="text-[9px] leading-snug text-white/55 line-clamp-3">{mod.effect}</div>}
                    <Pips rank={mod?.maxRank} />
                </div>
            </div>
        </div>
    );
}

export default function ModCard({ mod, fallbackName, slotLabel }) {
    const [failed, setFailed] = useState(false);
    const name = mod?.name || fallbackName || '';
    const empty = !name;
    const unknown = !mod && Boolean(fallbackName);
    const r = rarityOf(mod?.rarity);
    const showImg = SHOW_MOD_ART && Boolean(mod?.card) && !failed;

    const link =
        mod?.wikiUrl ||
        (mod ? `https://wiki.warframe.com/w/${encodeURIComponent(mod.name.replace(/\s+/g, '_'))}` : null);

    const content = showImg ? (
        <img
            src={mod.card}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-full h-auto block select-none rounded-md transition-transform group-hover:-translate-y-0.5"
            style={{
                aspectRatio: '310 / 453',
                background: `linear-gradient(160deg, ${r.tint}, #0c0f14)`,
                filter: `drop-shadow(0 3px 8px ${r.edge}55)`,
            }}
        />
    ) : (
        <div className="transition-transform group-hover:-translate-y-0.5 h-full">
            <CssCard mod={mod} name={name} unknown={unknown} empty={empty} slotLabel={slotLabel} />
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noreferrer noopener" className="group block" title={`${name} — abrir wiki`}>
                {content}
            </a>
        );
    }
    return <div className="group">{content}</div>;
}
