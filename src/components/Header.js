import React from 'react';
import { Save, Sun, Moon } from 'lucide-react';

const TABS = [
    { id: 'warframes', label: 'Warframes' },
    { id: 'weekly', label: 'Semanais' },
];

export default function Header({ activeTab, onTabChange, theme, onToggleTheme }) {
    return (
        <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-mahogany to-strawberry mb-1">
                        Warframe Tracker
                    </h1>
                    <p className="text-carbon/60 dark:text-silver text-sm">Acompanhe seu progresso</p>
                    <p className="text-xs text-carbon/40 dark:text-silver/70 mt-1 flex items-center gap-1">
                        <Save className="w-3 h-3" /> Salvo automaticamente
                    </p>
                </div>

                <button
                    onClick={onToggleTheme}
                    title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                    className="p-3 rounded-xl bg-smoke dark:bg-black/40 text-carbon hover:bg-dustgrey/60 dark:text-smoke dark:hover:bg-black/70 transition-colors shrink-0 border border-dustgrey/60 dark:border-white/5"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>

            <div className="flex gap-6 border-b border-dustgrey/60 dark:border-white/10">
                {TABS.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`relative pb-3 text-sm font-semibold tracking-wide transition-colors ${
                            activeTab === tab.id
                                ? 'text-mahogany dark:text-strawberry'
                                : 'text-carbon/50 dark:text-silver/60 hover:text-carbon dark:hover:text-silver'
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <span className="absolute left-0 right-0 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-mahogany to-strawberry shadow-[0_0_8px_rgba(229,56,59,0.6)]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
