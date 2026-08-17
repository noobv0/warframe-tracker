import React from 'react';

export default function ProgressBar({ label, completed, total }) {
    const progress = total ? (completed / total) * 100 : 0;

    return (
        <div className="rounded-2xl bg-smoke dark:bg-black/40 border border-dustgrey/60 dark:border-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-carbon/50 dark:text-silver/60 mb-1">{label}</p>
            <p className="text-2xl font-bold text-mahogany dark:text-strawberry mb-3">{completed}<span className="text-carbon/30 dark:text-silver/40 text-lg">/{total}</span></p>
            <div className="w-full h-1.5 rounded-full bg-dustgrey dark:bg-white/10 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-mahogany to-strawberry h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
