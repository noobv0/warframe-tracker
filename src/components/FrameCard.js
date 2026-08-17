import React from 'react';

export default function FrameCard({ name, done, total, complete, note, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`group text-left rounded-2xl p-4 border transition-all duration-150 hover:-translate-y-0.5 ${
                complete
                    ? 'bg-green-500/10 border-green-500/40 hover:shadow-lg hover:shadow-green-500/10'
                    : 'bg-smoke dark:bg-black/40 border-dustgrey/60 dark:border-white/5 hover:border-mahogany/40 dark:hover:border-strawberry/40 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30'
            }`}
        >
            <div className="flex items-center justify-between gap-2 mb-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    complete
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-br from-mahogany to-strawberry text-white'
                }`}>
                    {name.slice(0, 2).toUpperCase()}
                </div>
            </div>
            <p className={`font-semibold truncate ${complete ? 'text-green-700 dark:text-green-300' : 'text-carbon dark:text-smoke'}`}>
                {name}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
                <div className="flex-1 h-1 rounded-full bg-dustgrey dark:bg-white/10 overflow-hidden">
                    <div
                        className={`h-full rounded-full ${complete ? 'bg-green-500' : 'bg-gradient-to-r from-mahogany to-strawberry'}`}
                        style={{ width: `${total ? (done / total) * 100 : 0}%` }}
                    />
                </div>
                <span className="text-xs text-carbon/50 dark:text-silver/60 shrink-0">{done}/{total}</span>
            </div>
            {note && (
                <p className="text-xs text-carbon/50 dark:text-silver/60 mt-2 line-clamp-1">{note}</p>
            )}
        </button>
    );
}
