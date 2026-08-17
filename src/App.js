import React, { useState } from 'react';
import Header from './components/Header';
import WarframeGrid from './components/WarframeGrid';
import WeeklyChecklist from './components/WeeklyChecklist';
import { useTheme } from './hooks/useTheme';

const PANELS = {
    warframes: WarframeGrid,
    weekly: WeeklyChecklist,
};

export default function App() {
    const [activeTab, setActiveTab] = useState('warframes');
    const [theme, toggleTheme] = useTheme();
    const ActivePanel = PANELS[activeTab];

    return (
        <div className="min-h-screen w-full bg-smoke dark:bg-black text-carbon dark:text-smoke transition-colors">
            <div className="bg-dotted text-dustgrey/70 dark:text-carbon/60 fixed inset-0 pointer-events-none" />
            <div className="relative min-h-screen bg-gradient-to-b from-transparent via-white/40 dark:via-black/60 to-white dark:to-black">
                <div className="max-w-5xl mx-auto p-4 md:p-8">
                    <div className="bg-white dark:bg-carbon/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-black/5 dark:shadow-black/40 border border-dustgrey/60 dark:border-white/5 p-6 md:p-8">
                        <Header
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                            theme={theme}
                            onToggleTheme={toggleTheme}
                        />

                        <ActivePanel />
                    </div>
                </div>
            </div>
        </div>
    );
}
