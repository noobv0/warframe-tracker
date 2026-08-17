import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Check, FileText, Cpu, Shield, Zap } from 'lucide-react';

const PART_ICONS = { bp: FileText, neuroptics: Cpu, chassis: Shield, systems: Zap };

function PartRow({ part, checked, onToggle, sourceLabel }) {
    const Icon = PART_ICONS[part.id] || FileText;
    return (
        <button
            onClick={onToggle}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                checked
                    ? 'bg-green-500/10 border-green-500/40'
                    : 'bg-smoke dark:bg-black/40 border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40'
            }`}
        >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                checked ? 'bg-green-500 text-white' : 'bg-gradient-to-br from-mahogany to-strawberry text-white'
            }`}>
                <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${checked ? 'text-green-700 dark:text-green-300' : 'text-carbon dark:text-smoke'}`}>
                    {part.name}
                </p>
                <p className="text-xs text-carbon/50 dark:text-silver/60 truncate">{sourceLabel}</p>
            </div>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 ${
                checked ? 'bg-green-500 border-green-500' : 'border-dustgrey dark:border-white/20'
            }`}>
                {checked && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
        </button>
    );
}

export default function FrameDetailPanel({ mode, frame, entry, onTogglePart, onNotesChange, onClose }) {
    const [notesDraft, setNotesDraft] = useState(entry.notes);
    const isPrimeMode = mode === 'prime';
    const title = isPrimeMode ? `${frame.name} Prime` : frame.name;
    const parts = isPrimeMode ? frame.prime.parts : frame.parts;
    const checkedMap = isPrimeMode ? entry.primeParts : entry.baseParts;

    const handleNotesChange = (e) => {
        setNotesDraft(e.target.value);
        onNotesChange(e.target.value);
    };

    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-carbon rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-dustgrey/60 dark:border-white/10">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 bg-gradient-to-br from-mahogany to-strawberry text-white">
                        {frame.name.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="text-lg font-bold text-carbon dark:text-smoke flex-1">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-carbon/40 hover:text-carbon dark:text-silver dark:hover:text-white transition-colors p-1"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="px-6 py-5">
                    {isPrimeMode && frame.prime.founderExclusive ? (
                        <p className="text-sm text-carbon/60 dark:text-silver bg-smoke dark:bg-black/40 rounded-xl px-4 py-3 mb-5">
                            Exclusivo de Founders (programa encerrado em 2013) — indisponível via relíquias.
                        </p>
                    ) : (
                        <div className="flex flex-col gap-2 mb-5">
                            {parts.map(part => (
                                <PartRow
                                    key={part.id}
                                    part={part}
                                    checked={!!checkedMap[part.id]}
                                    onToggle={() => onTogglePart(part.id)}
                                    sourceLabel={isPrimeMode ? part.relics.join(', ') : part.source}
                                />
                            ))}
                        </div>
                    )}

                    <p className="text-xs font-semibold uppercase tracking-widest text-carbon/50 dark:text-silver/60 mb-2">
                        Notas
                    </p>
                    <textarea
                        value={notesDraft}
                        onChange={handleNotesChange}
                        placeholder="Anotações sobre esse frame..."
                        className="w-full h-20 rounded-xl bg-smoke dark:bg-black/40 text-carbon dark:text-smoke p-3 border border-dustgrey/60 dark:border-white/5 focus:border-mahogany dark:focus:border-strawberry focus:outline-none resize-none text-sm"
                    />

                    <button
                        onClick={onClose}
                        className="w-full mt-4 rounded-xl bg-smoke dark:bg-black/40 hover:bg-dustgrey/60 text-carbon dark:text-silver dark:hover:bg-black/70 font-semibold text-sm py-2.5 px-4 transition-colors border border-dustgrey/60 dark:border-white/5"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
