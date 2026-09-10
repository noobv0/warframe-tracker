import React, { useState } from 'react';
import { ArrowLeft, Layers, StickyNote } from 'lucide-react';
import { BUILD_CATEGORIES, BUILDS } from '../../data/builds';
import BuildRow from './BuildRow';
import BuildView from './BuildView';
import SubjectThumb from './SubjectThumb';

function BuildDetail({ build, onBack }) {
    const b = build.build || {};
    return (
        <>
            <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-sm font-semibold text-carbon/60 dark:text-silver/70 hover:text-mahogany dark:hover:text-strawberry transition-colors mb-4"
            >
                <ArrowLeft className="w-4 h-4" /> Builds
            </button>

            <div className="flex items-start gap-4">
                <SubjectThumb subject={build.subject} size={72} />
                <div className="min-w-0">
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mahogany to-strawberry leading-tight">
                        {build.title}
                    </h2>
                    <p className="text-sm text-carbon/60 dark:text-silver/70 mt-0.5">
                        <span className="font-semibold text-mahogany dark:text-strawberry">{build.subject}</span>
                        {build.purpose && <> · {build.purpose}</>}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        {build.event && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-mahogany/15 text-mahogany dark:bg-strawberry/20 dark:text-strawberry">
                                {build.event}
                            </span>
                        )}
                        {build.tags?.map(tag => (
                            <span key={tag} className="text-[10px] font-medium text-carbon/50 dark:text-silver/60 bg-dustgrey/40 dark:bg-white/5 rounded-full px-2 py-0.5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <BuildView build={b} />

            {(b.forma != null || b.obs || build.notes) && (
                <div className="mt-3 space-y-1.5 text-sm text-carbon/60 dark:text-silver/70">
                    {b.forma != null && (
                        <p className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> {b.forma} Forma{b.forma === 1 ? '' : 's'}</p>
                    )}
                    {b.obs && <p className="flex items-center gap-1.5"><StickyNote className="w-3.5 h-3.5" /> {b.obs}</p>}
                    {build.notes && <p className="leading-relaxed">{build.notes}</p>}
                </div>
            )}
        </>
    );
}

export default function BuildsTab() {
    const [activeCat, setActiveCat] = useState(BUILD_CATEGORIES[0].id);
    const [openId, setOpenId] = useState(null);

    const open = openId && BUILDS.find(x => x.id === openId);
    if (open) return <BuildDetail build={open} onBack={() => setOpenId(null)} />;

    const list = BUILDS.filter(x => x.category === activeCat);

    return (
        <>
            <div
                className="flex gap-4 sm:gap-5 border-b border-dustgrey/60 dark:border-white/10 overflow-x-auto -mx-1 px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {BUILD_CATEGORIES.map(cat => {
                    const count = BUILDS.filter(x => x.category === cat.id).length;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCat(cat.id)}
                            className={`relative pb-2.5 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${
                                activeCat === cat.id
                                    ? 'text-mahogany dark:text-strawberry'
                                    : 'text-carbon/50 dark:text-silver/60 hover:text-carbon dark:hover:text-silver'
                            }`}
                        >
                            {cat.label}
                            {count > 0 && <span className="ml-1.5 text-[10px] text-carbon/40 dark:text-silver/50">{count}</span>}
                            {activeCat === cat.id && (
                                <span className="absolute left-0 right-0 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-mahogany to-strawberry" />
                            )}
                        </button>
                    );
                })}
            </div>

            {list.length === 0 ? (
                <p className="mt-6 text-sm text-carbon/40 dark:text-silver/60 italic">Nenhuma build nesta categoria ainda.</p>
            ) : (
                <div className="mt-4 space-y-2.5">
                    {list.map(build => (
                        <BuildRow key={build.id} build={build} onOpen={() => setOpenId(build.id)} />
                    ))}
                </div>
            )}
        </>
    );
}
