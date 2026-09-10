import React, { useState } from 'react';
import { Bug, Info, Wrench } from 'lucide-react';
import { PLAGUE_STAR } from '../../data/plagueStar';
import BuildView from './BuildView';

const LABEL_STYLE = {
    core: 'bg-mahogany/15 text-mahogany dark:bg-strawberry/20 dark:text-strawberry border-mahogany/30 dark:border-strawberry/30',
    suporte: 'bg-dustgrey/50 text-carbon/60 dark:bg-white/5 dark:text-silver border-dustgrey dark:border-white/10',
};
const LABEL_TEXT = { core: 'Core', suporte: 'Suporte' };
const LABEL_ORDER = { core: 0, suporte: 1 };

function LabelBadge({ label }) {
    return (
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 ${LABEL_STYLE[label] || LABEL_STYLE.suporte}`}>
            {LABEL_TEXT[label] || label}
        </span>
    );
}

function PickCard({ pick }) {
    return (
        <div className="rounded-2xl p-4 border bg-smoke dark:bg-black/40 border-dustgrey/60 dark:border-white/5">
            <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-bold text-carbon dark:text-smoke truncate">{pick.name}</span>
                <LabelBadge label={pick.label} />
            </div>
            {pick.role && (
                <p className="text-xs font-semibold text-mahogany dark:text-strawberry mb-1.5">{pick.role}</p>
            )}
            {pick.why && (
                <p className="text-sm text-carbon/70 dark:text-silver/80 leading-relaxed">{pick.why}</p>
            )}
            {pick.tags?.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {pick.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-medium text-carbon/50 dark:text-silver/60 bg-dustgrey/40 dark:bg-white/5 rounded-full px-2 py-0.5">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {pick.build && (
                <>
                    <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-carbon/40 dark:text-silver/60">
                        <Wrench className="w-3 h-3" /> Build
                    </p>
                    <BuildView build={pick.build} />
                </>
            )}
        </div>
    );
}

export default function PlagueStarGuide() {
    const { eventName, updatedAt, intro, tips, categories, picks } = PLAGUE_STAR;
    const [active, setActive] = useState(categories[0].id);
    const list = [...(picks[active] || [])].sort(
        (a, b) => (LABEL_ORDER[a.label] ?? 9) - (LABEL_ORDER[b.label] ?? 9)
    );

    return (
        <>
            <div className="flex items-center gap-2 mb-1">
                <Bug className="w-5 h-5 text-mahogany dark:text-strawberry" />
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mahogany to-strawberry">
                    {eventName}
                </h2>
            </div>
            {updatedAt && (
                <p className="text-xs text-carbon/40 dark:text-silver/70 mb-3">Atualizado em {updatedAt}</p>
            )}
            {intro && <p className="text-sm text-carbon/70 dark:text-silver/80 leading-relaxed">{intro}</p>}

            <div className="mt-3 flex flex-wrap gap-2">
                <LabelBadge label="core" />
                <LabelBadge label="suporte" />
            </div>

            {tips?.length > 0 && (
                <div className="mt-5 flex gap-2.5 bg-mahogany/5 dark:bg-strawberry/10 border border-mahogany/20 dark:border-strawberry/20 rounded-2xl p-4">
                    <Info className="w-4 h-4 shrink-0 mt-0.5 text-mahogany dark:text-strawberry" />
                    <ul className="text-sm text-carbon/70 dark:text-silver/80 space-y-1.5 leading-relaxed">
                        {tips.map((tip, i) => <li key={i}>{tip}</li>)}
                    </ul>
                </div>
            )}

            {/* sub-abas por categoria */}
            <div className="mt-6 flex gap-5 border-b border-dustgrey/60 dark:border-white/10">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActive(cat.id)}
                        className={`relative pb-2.5 text-sm font-semibold tracking-wide transition-colors ${
                            active === cat.id
                                ? 'text-mahogany dark:text-strawberry'
                                : 'text-carbon/50 dark:text-silver/60 hover:text-carbon dark:hover:text-silver'
                        }`}
                    >
                        {cat.label}
                        {active === cat.id && (
                            <span className="absolute left-0 right-0 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-mahogany to-strawberry" />
                        )}
                    </button>
                ))}
            </div>

            {list.length === 0 ? (
                <p className="mt-6 text-sm text-carbon/40 dark:text-silver/60 italic">Recomendações em breve.</p>
            ) : (
                <div className="mt-5 space-y-4">
                    {list.map((pick, i) => <PickCard key={`${pick.name}-${i}`} pick={pick} />)}
                </div>
            )}
        </>
    );
}
