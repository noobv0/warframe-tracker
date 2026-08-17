import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(key));
            if (saved) {
                return saved;
            }
        } catch (e) {
            console.error(`Error loading "${key}" from localStorage:`, e);
        }
        return typeof initialValue === 'function' ? initialValue() : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
