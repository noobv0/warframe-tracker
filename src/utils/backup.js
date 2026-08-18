const KEYS = ['warframeProgress', 'warframeWeeklyChecklist'];

// base64 seguro pra UTF-8 (acentos nas notas não quebram o encode/decode).
function utf8ToBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p) => String.fromCharCode('0x' + p)));
}

function base64ToUtf8(b64) {
    return decodeURIComponent(
        atob(b64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
    );
}

export function exportBackup() {
    const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        theme: localStorage.getItem('theme'),
    };
    KEYS.forEach(key => {
        try {
            payload[key] = JSON.parse(localStorage.getItem(key));
        } catch {
            payload[key] = null;
        }
    });

    const code = utf8ToBase64(JSON.stringify(payload));
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `warframe-tracker-backup-${payload.exportedAt.slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Lança erro se o arquivo não for um backup válido — quem chama decide como avisar o usuário.
export function importBackup(fileText) {
    let payload;
    try {
        payload = JSON.parse(base64ToUtf8(fileText.trim()));
    } catch {
        throw new Error('Código de backup inválido ou corrompido.');
    }
    if (!payload || typeof payload !== 'object' || !KEYS.some(key => key in payload)) {
        throw new Error('Esse arquivo não parece ser um backup do Warframe Tracker.');
    }

    KEYS.forEach(key => {
        if (payload[key] != null) localStorage.setItem(key, JSON.stringify(payload[key]));
    });
    if (payload.theme) localStorage.setItem('theme', payload.theme);
}
