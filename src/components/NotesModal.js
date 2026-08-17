import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function NotesModal({ name, notes, onNotesChange, onClose }) {
    const [draft, setDraft] = useState(notes);

    const handleChange = (e) => {
        setDraft(e.target.value);
        onNotesChange(e.target.value);
    };

    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-carbon rounded-3xl p-6 max-w-md w-full shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-carbon dark:text-smoke">
                        {name}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-carbon/40 hover:text-carbon dark:text-silver dark:hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <textarea
                    value={draft}
                    onChange={handleChange}
                    placeholder="Adicione suas notas aqui... (ex. mods necessários, recursos faltando, etc.)"
                    className="w-full h-32 rounded-xl bg-smoke dark:bg-black/40 text-carbon dark:text-smoke p-3 border border-dustgrey/60 dark:border-white/5 focus:border-mahogany dark:focus:border-strawberry focus:outline-none resize-none"
                    autoFocus
                />

                <button
                    onClick={onClose}
                    className="w-full mt-4 rounded-xl bg-smoke dark:bg-black/40 hover:bg-dustgrey/60 text-carbon dark:text-silver dark:hover:bg-black/70 font-semibold text-sm py-2.5 px-4 transition-colors border border-dustgrey/60 dark:border-white/5"
                >
                    Fechar
                </button>
            </div>
        </div>,
        document.body
    );
}
