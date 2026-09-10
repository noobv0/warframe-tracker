import React from 'react';
import { Layers, StickyNote } from 'lucide-react';
import { useModDb } from '../../data/mods';
import ModCard from './ModCard';

// Layout tipo tela de mods: (aura|stance) + exilus centralizados no topo,
// 8 mods em grade, arcanas em círculo embaixo.
// build = { aura, stance, exilus, mods:[], arcanes:[], forma, obs }
export default function BuildView({ build }) {
    const db = useModDb();
    const hasContent =
        build && (build.aura || build.stance || build.exilus || (build.mods && build.mods.length > 0));
    if (!hasContent) return null;

    const special = build.aura
        ? { label: 'Aura', name: build.aura }
        : build.stance
        ? { label: 'Stance', name: build.stance }
        : null;
    const mods = (build.mods || []).slice(0, 8);
    const cell = (name, slotLabel) => (
        <ModCard mod={db?.get(name)} fallbackName={name} slotLabel={slotLabel} />
    );

    return (
        <div className="mt-3 rounded-xl border border-white/10 bg-[#0c1118] dark:bg-black/50 p-3 sm:p-4">
            {!db && <p className="text-[10px] text-white/40 mb-2">Carregando database de mods…</p>}

            {(special || build.exilus) && (
                <div className="flex justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {special && (
                        <div className="w-[30%] max-w-[150px]">{cell(special.name, special.label)}</div>
                    )}
                    {build.exilus && (
                        <div className="w-[30%] max-w-[150px]">{cell(build.exilus, 'Exilus')}</div>
                    )}
                </div>
            )}

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                    <React.Fragment key={i}>{cell(mods[i], `slot ${i + 1}`)}</React.Fragment>
                ))}
            </div>

            {build.arcanes?.length > 0 && (
                <div className="flex justify-center gap-6 sm:gap-10 mt-4">
                    {build.arcanes.map(arc => (
                        <div key={arc} className="flex flex-col items-center gap-1 w-24 text-center">
                            <span
                                className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                                style={{ borderColor: '#c9a24b', background: 'radial-gradient(circle at 35% 30%, #2b3a44, #0d141a)' }}
                            >
                                <span className="w-5 h-5 rounded-full" style={{ background: 'radial-gradient(circle,#67e8f9,#0e7490)' }} />
                            </span>
                            <span className="text-[10px] font-semibold text-white/70 leading-tight">{arc}</span>
                        </div>
                    ))}
                </div>
            )}

            {(build.forma != null || build.obs) && (
                <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/60">
                    {build.forma != null && (
                        <span className="flex items-center gap-1">
                            <Layers className="w-3 h-3" /> {build.forma} Forma{build.forma === 1 ? '' : 's'}
                        </span>
                    )}
                    {build.obs && (
                        <span className="flex items-center gap-1">
                            <StickyNote className="w-3 h-3" /> {build.obs}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
