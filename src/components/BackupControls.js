import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Upload, X, Copy, Check } from 'lucide-react';
import { buildBackupCode, downloadBackupCode, importBackup } from '../utils/backup';

function ExportModal({ code, onClose }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-carbon rounded-3xl p-6 max-w-lg w-full shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-carbon dark:text-smoke">Backup do progresso</h3>
                    <button
                        onClick={onClose}
                        className="text-carbon/40 hover:text-carbon dark:text-silver dark:hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-sm text-carbon/60 dark:text-silver mb-3">
                    Copie esse código e guarde em algum lugar seguro, ou baixe como arquivo — os dois servem pra importar de volta depois.
                </p>

                <textarea
                    readOnly
                    value={code}
                    onClick={(e) => e.target.select()}
                    className="w-full h-32 rounded-xl bg-smoke dark:bg-black/40 text-carbon dark:text-smoke p-3 border border-dustgrey/60 dark:border-white/5 focus:outline-none resize-none text-xs font-mono break-all"
                />

                <div className="flex gap-3 mt-4">
                    <button
                        onClick={handleCopy}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-mahogany hover:bg-mahogany-light dark:bg-strawberry dark:hover:bg-mahogany-light text-white font-semibold text-sm py-2.5 px-4 transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copiado!' : 'Copiar código'}
                    </button>
                    <button
                        onClick={() => downloadBackupCode(code)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-smoke dark:bg-black/40 hover:bg-dustgrey/60 text-carbon dark:text-silver dark:hover:bg-black/70 font-semibold text-sm py-2.5 px-4 transition-colors border border-dustgrey/60 dark:border-white/5"
                    >
                        <Download className="w-4 h-4" />
                        Baixar .txt
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default function BackupControls() {
    const fileInputRef = useRef(null);
    const [exportCode, setExportCode] = useState(null);

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
                onClick={() => setExportCode(buildBackupCode())}
                title="Exportar progresso"
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

            {exportCode && <ExportModal code={exportCode} onClose={() => setExportCode(null)} />}
        </div>
    );
}
