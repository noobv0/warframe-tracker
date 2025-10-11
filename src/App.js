import React, { useState, useMemo, useEffect } from 'react';
import { Check, X, StickyNote, Save } from 'lucide-react';

const INITIAL_WARFRAMES = [
    { name: 'Ash', mastered: false, notes: '' },
    { name: 'Atlas', mastered: false, notes: '' },
    { name: 'Banshee', mastered: false, notes: '' },
    { name: 'Baruuk', mastered: false, notes: '' },
    { name: 'Caliban', mastered: false, notes: '' },
    { name: 'Chroma', mastered: false, notes: '' },
    { name: 'Citrine', mastered: false, notes: '' },
    { name: 'Cyte-09', mastered: false, notes: '' },
    { name: 'Dagath', mastered: false, notes: '' },
    { name: 'Dante', mastered: false, notes: '' },
    { name: 'Ember', mastered: false, notes: '' },
    { name: 'Equinox', mastered: false, notes: '' },
    { name: 'Excalibur', mastered: false, notes: '' },
    { name: 'Frost', mastered: false, notes: '' },
    { name: 'Gara', mastered: false, notes: '' },
    { name: 'Garuda', mastered: false, notes: '' },
    { name: 'Gauss', mastered: false, notes: '' },
    { name: 'Grendel', mastered: false, notes: '' },
    { name: 'Gyre', mastered: false, notes: '' },
    { name: 'Harrow', mastered: false, notes: '' },
    { name: 'Hildryn', mastered: false, notes: '' },
    { name: 'Hydroid', mastered: false, notes: '' },
    { name: 'Inaros', mastered: false, notes: '' },
    { name: 'Ivara', mastered: false, notes: '' },
    { name: 'Jade', mastered: false, notes: '' },
    { name: 'Khora', mastered: false, notes: '' },
    { name: 'Koumei', mastered: false, notes: '' },
    { name: 'Kullervo', mastered: false, notes: '' },
    { name: 'Lavos', mastered: false, notes: '' },
    { name: 'Limbo', mastered: false, notes: '' },
    { name: 'Loki', mastered: false, notes: '' },
    { name: 'Mag', mastered: false, notes: '' },
    { name: 'Mesa', mastered: false, notes: '' },
    { name: 'Mirage', mastered: false, notes: '' },
    { name: 'Nekros', mastered: false, notes: '' },
    { name: 'Nezha', mastered: false, notes: '' },
    { name: 'Nidus', mastered: false, notes: '' },
    { name: 'Nokku', mastered: false, notes: '' },
    { name: 'Nova', mastered: false, notes: '' },
    { name: 'Nyx', mastered: false, notes: '' },
    { name: 'Oberon', mastered: false, notes: '' },
    { name: 'Octavia', mastered: false, notes: '' },
    { name: 'Oraxia', mastered: false, notes: '' },
    { name: 'Protea', mastered: false, notes: '' },
    { name: 'Qorvex', mastered: false, notes: '' },
    { name: 'Revenant', mastered: false, notes: '' },
    { name: 'Rhino', mastered: false, notes: '' },
    { name: 'Saryn', mastered: false, notes: '' },
    { name: 'Sevagoth', mastered: false, notes: '' },
    { name: 'Styanax', mastered: false, notes: '' },
    { name: 'Temple', mastered: false, notes: '' },
    { name: 'Titania', mastered: false, notes: '' },
    { name: 'Trinity', mastered: false, notes: '' },
    { name: 'Valkyr', mastered: false, notes: '' },
    { name: 'Vauban', mastered: false, notes: '' },
    { name: 'Volt', mastered: false, notes: '' },
    { name: 'Voruna', mastered: false, notes: '' },
    { name: 'Wisp', mastered: false, notes: '' },
    { name: 'Wukong', mastered: false, notes: '' },
    { name: 'Xaku', mastered: false, notes: '' },
    { name: 'Yareli', mastered: false, notes: '' },
    { name: 'Zephyr', mastered: false, notes: '' }
];

const loadSavedData = () => {
    try {
        const saved = JSON.parse(sessionStorage.getItem('warframeProgress'));
        if (saved && Array.isArray(saved)) {
            return saved;
        }
    } catch (e) {
        console.error('Erro ao carregar dados:', e);
    }
    return INITIAL_WARFRAMES;
};

export default function WarframeTracker() {
    const [warframes, setWarframes] = useState(loadSavedData);
    const [selectedWarframe, setSelectedWarframe] = useState(null);
    const [sortOrder, setSortOrder] = useState('name-asc');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        sessionStorage.setItem('warframeProgress', JSON.stringify(warframes));
    }, [warframes]);

    const toggleWarframe = (index) => {
        const updated = [...warframes];
        updated[index].mastered = !updated[index].mastered;
        setWarframes(updated);
    };

    const updateNotes = (index, notes) => {
        const updated = [...warframes];
        updated[index].notes = notes;
        setWarframes(updated);
        setSelectedWarframe(null);
    };

    const sortedAndFiltered = useMemo(() => {
        let filtered = [...warframes];

        if (filter === 'completed') {
            filtered = filtered.filter(w => w.mastered);
        } else if (filter === 'pending') {
            filtered = filtered.filter(w => !w.mastered);
        }

        filtered.sort((a, b) => {
            if (sortOrder === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else if (sortOrder === 'name-desc') {
                return b.name.localeCompare(a.name);
            } else if (sortOrder === 'status-asc') {
                return a.mastered === b.mastered ? 0 : a.mastered ? 1 : -1;
            } else if (sortOrder === 'status-desc') {
                return a.mastered === b.mastered ? 0 : a.mastered ? -1 : 1;
            }
            return 0;
        });

        return filtered;
    }, [warframes, sortOrder, filter]);

    const completedCount = warframes.filter(w => w.mastered).length;
    const totalCount = warframes.length;
    const progress = (completedCount / totalCount) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-500/20 p-6 md:p-8">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                            Warframe Collection
                        </h1>
                        <p className="text-slate-400">Acompanhe seu progresso de builds</p>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                            <Save className="w-3 h-3" /> Progresso salvo automaticamente
                        </p>
                    </div>

                    <div className="mb-6 bg-slate-700/50 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium">Progresso</span>
                            <span className="text-cyan-400 font-bold">{completedCount}/{totalCount}</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    filter === 'all'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                            >
                                Todos ({totalCount})
                            </button>
                            <button
                                onClick={() => setFilter('pending')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    filter === 'pending'
                                        ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/50'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                            >
                                Pendentes ({totalCount - completedCount})
                            </button>
                            <button
                                onClick={() => setFilter('completed')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    filter === 'completed'
                                        ? 'bg-green-600 text-white shadow-lg shadow-green-500/50'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                            >
                                Completos ({completedCount})
                            </button>
                        </div>

                        <div className="flex gap-2 ml-auto">
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none font-medium"
                            >
                                <option value="name-asc">Nome A-Z</option>
                                <option value="name-desc">Nome Z-A</option>
                                <option value="status-asc">Pendentes Primeiro</option>
                                <option value="status-desc">Completos Primeiro</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sortedAndFiltered.map((warframe, idx) => {
                            const originalIndex = warframes.findIndex(w => w.name === warframe.name);
                            return (
                                <div
                                    key={warframe.name}
                                    onClick={() => toggleWarframe(originalIndex)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                                        warframe.mastered
                                            ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/50 hover:border-green-400'
                                            : 'bg-slate-700/30 border-slate-600/50 hover:border-blue-500/50 hover:bg-slate-700/50'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 flex-1">
                      <span className={`font-semibold text-lg ${
                          warframe.mastered ? 'text-green-300' : 'text-slate-200'
                      }`}>
                        {warframe.name}
                      </span>
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                                warframe.mastered
                                                    ? 'bg-green-500 shadow-lg shadow-green-500/50'
                                                    : 'bg-slate-600'
                                            }`}>
                                                {warframe.mastered ? (
                                                    <Check className="w-4 h-4 text-white" />
                                                ) : (
                                                    <X className="w-4 h-4 text-slate-400" />
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedWarframe(originalIndex);
                                            }}
                                            className={`ml-2 p-2 rounded-lg transition-all ${
                                                warframe.notes
                                                    ? 'bg-blue-500/30 text-blue-300 hover:bg-blue-500/50'
                                                    : 'bg-slate-600/50 text-slate-400 hover:bg-slate-600'
                                            }`}
                                            title="Adicionar nota"
                                        >
                                            <StickyNote className="w-4 h-4" />
                                        </button>
                                    </div>
                                    {warframe.notes && (
                                        <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                                            {warframe.notes}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {sortedAndFiltered.length === 0 && (
                        <div className="text-center py-12 text-slate-400">
                            Nenhum warframe encontrado com este filtro.
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de Notas */}
            {selectedWarframe !== null && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-slate-800 rounded-2xl border-2 border-blue-500/30 p-6 max-w-md w-full shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-blue-300">
                                {warframes[selectedWarframe].name}
                            </h3>
                            <button
                                onClick={() => setSelectedWarframe(null)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <textarea
                            defaultValue={warframes[selectedWarframe].notes}
                            placeholder="Adicione suas notas aqui... (ex: mods necessários, recursos faltando, etc.)"
                            className="w-full h-32 bg-slate-700 text-slate-200 rounded-lg p-3 border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
                            autoFocus
                        />

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={(e) => {
                                    const textarea = e.target.parentElement.previousElementSibling;
                                    updateNotes(selectedWarframe, textarea.value);
                                }}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                            >
                                Salvar
                            </button>
                            <button
                                onClick={() => setSelectedWarframe(null)}
                                className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold py-2 px-4 rounded-lg transition-colors"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}