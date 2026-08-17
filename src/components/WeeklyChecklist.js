import React, { useEffect, useState } from 'react';
import { Check, StickyNote } from 'lucide-react';
import { WEEKLY_TASKS } from '../data/weeklyTasks';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { applyWeeklyReset } from '../hooks/useWeeklyReset';
import { getCurrentNormalCircuit, getCurrentSteelPathCircuit } from '../data/circuitRotation';
import ProgressBar from './ProgressBar';
import NotesModal from './NotesModal';

const CATEGORY_LABELS = { atividade: 'Atividades', vendedor: 'Vendedores' };

function dynamicSubtitle(task, weekKey) {
    if (task.dynamic === 'normal-circuit') return getCurrentNormalCircuit(weekKey).join(', ');
    if (task.dynamic === 'steel-path-circuit') return getCurrentSteelPathCircuit(weekKey).join(', ');
    return null;
}

export default function WeeklyChecklist() {
    const [weeklyState, setWeeklyState] = useLocalStorage(
        'warframeWeeklyChecklist',
        () => applyWeeklyReset(null, WEEKLY_TASKS)
    );
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Confere se a semana virou desde a última visita e reseta os checks.
    useEffect(() => {
        setWeeklyState(prev => applyWeeklyReset(prev, WEEKLY_TASKS));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items = weeklyState.items;

    const toggleTask = (index) => {
        const updated = [...items];
        updated[index] = { ...updated[index], done: !updated[index].done };
        setWeeklyState({ ...weeklyState, items: updated });
    };

    const saveNote = (index, note) => {
        const updated = [...items];
        updated[index] = { ...updated[index], note };
        setWeeklyState({ ...weeklyState, items: updated });
    };

    const completedCount = items.filter(t => t.done).length;
    const totalCount = items.length;
    const mondayDate = new Date(`${weeklyState.weekKey}T00:00:00Z`);
    const weekLabel = mondayDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', timeZone: 'UTC' });

    return (
        <>
            <p className="text-xs text-carbon/40 dark:text-silver/70 -mt-2 mb-4">
                Semana de {weekLabel} · reseta toda segunda 00:00 UTC
            </p>

            <ProgressBar label="Progresso da semana" completed={completedCount} total={totalCount} />

            {['atividade', 'vendedor'].map(category => (
                <div key={category} className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-carbon/50 dark:text-silver/60 mb-3">
                        {CATEGORY_LABELS[category]}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {items.map((task, index) => {
                            if (task.category !== category) return null;
                            const subtitle = dynamicSubtitle(task, weeklyState.weekKey);
                            return (
                                <div
                                    key={task.id}
                                    onClick={() => toggleTask(index)}
                                    className={`rounded-2xl p-4 border cursor-pointer transition-all duration-150 hover:-translate-y-0.5 ${
                                        task.done
                                            ? 'bg-green-500/10 border-green-500/40'
                                            : 'bg-smoke dark:bg-black/40 border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border-2 ${
                                                task.done ? 'bg-green-500 border-green-500' : 'border-dustgrey dark:border-white/20'
                                            }`}>
                                                {task.done && <Check className="w-4 h-4 text-white" />}
                                            </div>
                                            <span className={`font-semibold truncate ${
                                                task.done ? 'text-green-700 dark:text-green-300' : 'text-carbon dark:text-smoke'
                                            }`}>
                                                {task.name}
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedIndex(index);
                                            }}
                                            className={`ml-2 p-2 rounded-lg transition-all shrink-0 ${
                                                task.note
                                                    ? 'bg-mahogany/15 text-mahogany hover:bg-mahogany/25 dark:bg-strawberry/20 dark:text-strawberry dark:hover:bg-strawberry/30'
                                                    : 'bg-dustgrey/40 text-carbon/40 hover:bg-dustgrey/70 dark:bg-white/5 dark:text-silver dark:hover:bg-white/10'
                                            }`}
                                            title="Adicionar nota"
                                        >
                                            <StickyNote className="w-4 h-4" />
                                        </button>
                                    </div>
                                    {subtitle && (
                                        <p className="text-xs text-mahogany dark:text-strawberry font-medium mt-1">
                                            Esta semana: {subtitle}
                                        </p>
                                    )}
                                    {task.note && (
                                        <p className="text-sm text-carbon/50 dark:text-silver/70 mt-2 line-clamp-2">
                                            {task.note}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            {selectedIndex !== null && (
                <NotesModal
                    name={items[selectedIndex].name}
                    notes={items[selectedIndex].note}
                    onNotesChange={(note) => saveNote(selectedIndex, note)}
                    onClose={() => setSelectedIndex(null)}
                />
            )}
        </>
    );
}
