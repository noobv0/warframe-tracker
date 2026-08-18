import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { WARFRAMES } from '../data/warframes';
import { useWarframeProgress, isBaseComplete, isPrimeComplete } from '../hooks/useWarframeProgress';
import ProgressBar from './ProgressBar';
import FrameCard from './FrameCard';
import FrameDetailPanel from './FrameDetailPanel';

// Cada frame vira um grupo [base, prime?] pra sempre manter o prime logo após o normal.
const GROUPS = WARFRAMES.map(frame => {
    const group = [{ kind: 'base', frame }];
    if (frame.prime) group.push({ kind: 'prime', frame });
    return group;
});

function isEntryComplete(entry, progressEntry) {
    if (entry.kind === 'base') return isBaseComplete(progressEntry);
    if (entry.frame.prime.founderExclusive) return false;
    return isPrimeComplete(progressEntry);
}

// Proporção de peças obtidas (0 a 1) — usa proporção, não contagem crua, pra
// não misturar frames com números de peças diferentes (Equinox tem 8, os outros 4).
function progressRatio(entry, progressEntry) {
    if (entry.kind === 'prime' && entry.frame.prime.founderExclusive) return 0;
    const map = entry.kind === 'base' ? progressEntry.baseParts : progressEntry.primeParts;
    const values = Object.values(map);
    return values.length ? values.filter(Boolean).length / values.length : 0;
}

export default function WarframeGrid() {
    const { progress, togglePart, setAllParts, setNotes } = useWarframeProgress();
    const [selected, setSelected] = useState(null);
    const [sortOrder, setSortOrder] = useState('progress');
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const visibleEntries = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        const groups = query
            ? GROUPS.filter(g => g[0].frame.name.toLowerCase().includes(query))
            : GROUPS;

        const orderedGroups = sortOrder === 'name-desc' ? [...groups].reverse() : groups;
        let entries = orderedGroups.flat();

        if (filter === 'completed') {
            entries = entries.filter(e => isEntryComplete(e, progress[e.frame.name]));
        } else if (filter === 'pending') {
            entries = entries.filter(e => !(e.kind === 'prime' && e.frame.prime.founderExclusive) && !isEntryComplete(e, progress[e.frame.name]));
        }

        if (sortOrder === 'status-asc' || sortOrder === 'status-desc') {
            entries = [...entries].sort((a, b) => {
                const aDone = isEntryComplete(a, progress[a.frame.name]);
                const bDone = isEntryComplete(b, progress[b.frame.name]);
                if (aDone === bDone) return 0;
                if (sortOrder === 'status-asc') return aDone ? 1 : -1;
                return aDone ? -1 : 1;
            });
        } else if (sortOrder === 'progress') {
            entries = [...entries].sort((a, b) =>
                progressRatio(b, progress[b.frame.name]) - progressRatio(a, progress[a.frame.name])
            );
        }

        return entries;
    }, [progress, sortOrder, filter, searchQuery]);

    const totalBase = WARFRAMES.length;
    const completedBase = WARFRAMES.filter(w => isBaseComplete(progress[w.name])).length;
    const primeFrames = WARFRAMES.filter(w => w.prime && !w.prime.founderExclusive);
    const completedPrime = primeFrames.filter(w => isPrimeComplete(progress[w.name])).length;

    const selectedEntry = selected ? GROUPS.flat().find(e => e.kind === selected.kind && e.frame.name === selected.name) : null;

    return (
        <>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <ProgressBar label="Warframes obtidos" completed={completedBase} total={totalBase} />
                <ProgressBar label="Primes obtidos" completed={completedPrime} total={primeFrames.length} />
            </div>

            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-carbon/40 dark:text-silver" />
                    <input
                        type="text"
                        placeholder="Buscar Warframe..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-smoke dark:bg-black/40 text-carbon dark:text-smoke border border-dustgrey/60 dark:border-white/5 focus:border-mahogany dark:focus:border-strawberry focus:outline-none placeholder-carbon/40 dark:placeholder-silver/60"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-carbon/40 hover:text-carbon dark:text-silver dark:hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex gap-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                            filter === 'all'
                                ? 'bg-mahogany dark:bg-strawberry text-white'
                                : 'bg-smoke dark:bg-black/40 text-carbon/70 dark:text-silver border border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40'
                        }`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setFilter('pending')}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                            filter === 'pending'
                                ? 'bg-garnet text-white'
                                : 'bg-smoke dark:bg-black/40 text-carbon/70 dark:text-silver border border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40'
                        }`}
                    >
                        Pendentes
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                            filter === 'completed'
                                ? 'bg-green-600 text-white'
                                : 'bg-smoke dark:bg-black/40 text-carbon/70 dark:text-silver border border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40'
                        }`}
                    >
                        Completos
                    </button>
                </div>

                <div className="flex gap-2 ml-auto">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-4 py-2 rounded-xl bg-smoke dark:bg-black/40 text-carbon dark:text-silver border border-dustgrey/60 dark:border-white/5 focus:border-mahogany dark:focus:border-strawberry focus:outline-none font-medium text-sm"
                    >
                        <option value="name-asc">Nome A-Z</option>
                        <option value="name-desc">Nome Z-A</option>
                        <option value="status-asc">Pendentes primeiro</option>
                        <option value="status-desc">Completos primeiro</option>
                        <option value="progress">Progresso (completos primeiro)</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {visibleEntries.map((entry) => {
                    const progressEntry = progress[entry.frame.name];
                    const isPrimeEntry = entry.kind === 'prime';
                    const founderExclusive = isPrimeEntry && entry.frame.prime.founderExclusive;
                    const name = isPrimeEntry ? `${entry.frame.name} Prime` : entry.frame.name;
                    const done = founderExclusive
                        ? 0
                        : Object.values(isPrimeEntry ? progressEntry.primeParts : progressEntry.baseParts).filter(Boolean).length;
                    const total = founderExclusive ? 0 : (isPrimeEntry ? entry.frame.prime.parts.length : entry.frame.parts.length);

                    return (
                        <FrameCard
                            key={`${entry.frame.name}-${entry.kind}`}
                            name={name}
                            done={done}
                            total={total}
                            complete={isEntryComplete(entry, progressEntry)}
                            note={founderExclusive ? 'Exclusivo de Founders — indisponível' : progressEntry.notes}
                            onClick={() => setSelected({ kind: entry.kind, name: entry.frame.name })}
                            onFullMark={founderExclusive ? undefined : () => setAllParts(entry.frame.name, isPrimeEntry ? 'primeParts' : 'baseParts')}
                        />
                    );
                })}
            </div>

            {visibleEntries.length === 0 && (
                <div className="text-center py-12 text-carbon/50 dark:text-silver">
                    {searchQuery ? (
                        <>
                            Nenhum Warframe encontrado com "<span className="text-mahogany dark:text-strawberry font-semibold">{searchQuery}</span>"
                        </>
                    ) : (
                        'Nenhum Warframe encontrado com esse filtro.'
                    )}
                </div>
            )}

            {selectedEntry && (
                <FrameDetailPanel
                    mode={selectedEntry.kind}
                    frame={selectedEntry.frame}
                    entry={progress[selectedEntry.frame.name]}
                    onTogglePart={(partId) => togglePart(selectedEntry.frame.name, selectedEntry.kind === 'prime' ? 'primeParts' : 'baseParts', partId)}
                    onNotesChange={(notes) => setNotes(selectedEntry.frame.name, notes)}
                    onClose={() => setSelected(null)}
                />
            )}
        </>
    );
}
