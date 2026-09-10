import React, { useState } from 'react';

const wikiImg = (name) =>
    `https://wiki.warframe.com/images/${name.replace(/['’.]/g, '').replace(/\s+/g, '')}.png`;

const initials = (name) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();

export default function SubjectThumb({ subject, size = 56 }) {
    const [failed, setFailed] = useState(false);
    const px = { width: size, height: size };

    if (failed || !subject) {
        return (
            <div
                className="shrink-0 rounded-xl bg-gradient-to-br from-mahogany to-garnet text-white font-bold flex items-center justify-center"
                style={{ ...px, fontSize: size * 0.32 }}
            >
                {initials(subject || '?')}
            </div>
        );
    }
    return (
        <img
            src={wikiImg(subject)}
            alt={subject}
            loading="lazy"
            onError={() => setFailed(true)}
            className="shrink-0 rounded-xl object-cover bg-black/30"
            style={{ ...px, objectPosition: 'center 12%' }}
        />
    );
}
