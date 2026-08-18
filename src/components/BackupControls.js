import React, { useRef } from 'react';
import { Download, Upload } from 'lucide-react';
import { exportBackup, importBackup } from '../utils/backup';

export default function BackupControls() {
    const fileInputRef = useRef(null);

    const handleImportClick = () => fileInputRef.current?.click();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        e.target.value = '';
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            try {
                importBackup(reader.result);
                window.alert('Backup importado! A página vai recarregar.');
                window.location.reload();
            } catch (err) {
                window.alert(err.message);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={exportBackup}
                title="Exportar progresso (.txt)"
                className="p-3 rounded-xl bg-smoke dark:bg-black/40 text-carbon hover:bg-dustgrey/60 dark:text-smoke dark:hover:bg-black/70 transition-colors shrink-0 border border-dustgrey/60 dark:border-white/5"
            >
                <Download className="w-5 h-5" />
            </button>
            <button
                onClick={handleImportClick}
                title="Importar progresso (.txt)"
                className="p-3 rounded-xl bg-smoke dark:bg-black/40 text-carbon hover:bg-dustgrey/60 dark:text-smoke dark:hover:bg-black/70 transition-colors shrink-0 border border-dustgrey/60 dark:border-white/5"
            >
                <Upload className="w-5 h-5" />
            </button>
            <input
                ref={fileInputRef}
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}
