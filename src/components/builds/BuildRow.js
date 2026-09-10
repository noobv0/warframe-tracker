import React from 'react';
import { ChevronRight, Layers } from 'lucide-react';
import SubjectThumb from './SubjectThumb';

// Linha da lista de builds — estilo Overframe.
export default function BuildRow({ build, onOpen }) {
    const forma = build.build?.forma;
    return (
        <button
            onClick={onOpen}
            className="w-full text-left flex items-center gap-3 sm:gap-4 rounded-2xl p-3 border bg-smoke dark:bg-black/40 border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40 hover:-translate-y-0.5 transition-all"
        >
            <SubjectThumb subject={build.subject} />

            <div className="flex-1 min-w-0">
                <p className="font-bold text-carbon dark:text-smoke leading-snug line-clamp-2">
                    {build.title}
                </p>
                <p className="text-xs text-carbon/55 dark:text-silver/70 mt-0.5">
                    <span className="text-mahogany dark:text-strawberry font-semibold">{build.subject}</span>
                    {build.purpose && <> · {build.purpose}</>}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    {build.event && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-mahogany/15 text-mahogany dark:bg-strawberry/20 dark:text-strawberry">
                            {build.event}
                        </span>
                    )}
                    {build.update && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-green-500/15 text-green-600 dark:text-green-400">
                            UPDATE {build.update}
                        </span>
                    )}
                    {build.tags?.map(tag => (
                        <span key={tag} className="text-[10px] font-medium text-carbon/50 dark:text-silver/60 bg-dustgrey/40 dark:bg-white/5 rounded-full px-2 py-0.5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 pr-1 text-carbon/40 dark:text-silver/50">
                {forma != null && (
                    <span className="hidden sm:flex flex-col items-end leading-none">
                        <span className="text-lg font-bold text-carbon/70 dark:text-silver tabular-nums">{forma}</span>
                        <span className="text-[9px] font-semibold uppercase tracking-wider">Forma{forma === 1 ? '' : 's'}</span>
                    </span>
                )}
                {forma != null && (
                    <span className="sm:hidden flex items-center gap-1 text-xs">
                        <Layers className="w-3 h-3" />{forma}
                    </span>
                )}
                <ChevronRight className="w-5 h-5" />
            </div>
        </button>
    );
}
