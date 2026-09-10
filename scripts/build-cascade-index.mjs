// Gera src/data/builds.cascade.js a partir do índice do
// "Void Cascade Builds Guide" (Cascade Club / SabreWalrus).
//
// Cada entrada vira uma build com link pro doc original + crédito.
// A grade de mods (campo build.mods) NÃO vem daqui — nos docs originais ela é
// print. Preencher manualmente depois, doc a doc.
//
//   node scripts/build-cascade-index.mjs

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'builds.cascade.js');

const CREDIT = {
    name: 'Void Cascade Builds Guide',
    org: 'Cascade Club',
    author: 'SabreWalrus',
    url: 'https://docs.google.com/document/d/1m11trfxy8_DeRQn9FarkiW7Bki5PMdgCHvxkbJ9e5D8/edit',
};

const DIFF = { '🟩': 'green', '🟨': 'yellow', '🟧': 'orange', '🟥': 'red' };

// [subject, difficulty(frame só), section, category, docId]
const ROWS = [
    // Warframes — Weapon Platforms
    ['Ash', '🟩', 'Weapon Platform', 'warframe', '1W3EoWw957qm4urDByC3GBEsqPvCN_Wpwz_4b_aiaTNc'],
    ['Caliban', '🟨', 'Weapon Platform', 'warframe', '10ObP-4MVcXTZA4tf7Je5FQ1PFgvkbYXCoga4VMM3h6I'],
    ['Cyte-09', '🟨', 'Weapon Platform', 'warframe', '1m5Hcn9A8BHz8gdw-mjcr30JtFPu_PuR01B4OsP1HDIY'],
    ['Dagath', '🟨', 'Weapon Platform', 'warframe', '1oXhQxeMWvlwS8DH_6FIufOhwEivEUEQgpAP-NEjZxoM'],
    ['Frost', '🟨', 'Weapon Platform', 'warframe', '1gUsBPWmLidGSaLQPtvfd05k9NPV6h5qceejPN1CKab8'],
    ['Gauss', '🟩', 'Weapon Platform', 'warframe', '1YmeV89cT0QMi1SeybAcQoHztiRA6QkpOZvl0tlBfmis'],
    ['Jade', '🟨', 'Weapon Platform', 'warframe', '1K6U0jSbq2lMoTdQLGZDZyMAte2KnI3qvJIzlQzAMkf4'],
    ['Koumei', '🟨', 'Weapon Platform', 'warframe', '1Ya7hY9glSzXqrZXE1pkRReCrQdkUteKCdq_BsVrVAJQ'],
    ['Loki', '🟩', 'Weapon Platform', 'warframe', '18e4sm3081CZ7vRmrPibW2ydSOpKaxgx7h0MTlGPu_oQ'],
    ['Mag', '🟧', 'Weapon Platform', 'warframe', '11aMWRXOAt4ZAsD1nx9yOna4kGUw0m-n88fu6TrSFsQs'],
    ['Nidus', '🟥', 'Weapon Platform', 'warframe', '1H6k7_6mCTfQNPHOIb-TL1q7AOV9RgtNvuYIb3o1zHjA'],
    ['Nova', '🟧', 'Weapon Platform', 'warframe', '1x4z7WyBCrQx9YaD9_qMheTc0R_CjbHFEVrcGohDm2HM'],
    ['Oberon', '🟨', 'Weapon Platform', 'warframe', '1CMT6oTzcEOQq90z6FIAOAg8NcHHvgaDAIAg50uQJyWY'],
    ['Octavia', '🟩', 'Weapon Platform', 'warframe', '1KpZyHb6bTTjwiknlywemsGNSWuifY_apXWdae-6yKZI'],
    ['Oraxia', '🟩', 'Weapon Platform', 'warframe', '1bpMXSAX3xIcI7OpEfcedu28_tLQQmybSH_ttjRiakuo'],
    ['Revenant', '🟩', 'Weapon Platform', 'warframe', '1myTXwi2edaA2_hrvPRL19-7e1YtmCJXtGMnIPA232Fg'],
    ['Rhino', '🟨', 'Weapon Platform', 'warframe', '13jbVBv2yDhsHoyXHTQIzfsmAnTxAijT35NVVANaLf6M'],
    ['Saryn', '🟧', 'Weapon Platform', 'warframe', '1g2f_t8wEkt3Xi3Qdz6kJGotSjM1APWBWuKBmlOl6FDU'],
    ['Titania', '🟨', 'Weapon Platform', 'warframe', '1UyUdUnvbXnDq5O5DaOhoBG2y0JFQLdvNI-YT05JfZUQ'],
    ['Volt', '🟨', 'Weapon Platform', 'warframe', '1lu1Cl1fIVWfiWtE07ND8ChihxZVSxO19RZw4aYtTvaM'],
    ['Voruna', '🟨', 'Weapon Platform', 'warframe', '17tgHDFj-OBe34H7MIgn0cJYC55EDFMx5eHRd37W7qko'],
    ['Wisp', '🟩', 'Weapon Platform', 'warframe', '1OfAUrDvTWZzVgAZeGkSjjlWovzhHGQnwl7yEMMP_7fM'],
    ['Wukong', '🟩', 'Weapon Platform', 'warframe', '1mpbqsJiCL_6MFwVQ28AVzLqSgx83x_55jcWiyVGs-gw'],
    ['Xaku', '🟨', 'Weapon Platform', 'warframe', '1NcBJTsLh_GHUvntFTX0dLUB69JFA8qgYxqr_gt4WhGw'],
    ['Yareli', '🟨', 'Weapon Platform', 'warframe', '1y4FmtXZ2AIugBTcqeokrUJz0o7nKkqXhc_6Wy_N3p90'],
    ['Zephyr', '🟩', 'Weapon Platform', 'warframe', '1iBVQOxqGfaqHfJdNF8Oc8ECsWOM-9fDs8mmgHeiUhjo'],
    // Warframes — Casters
    ['Dante', '🟨', 'Caster', 'warframe', '1u5dYi7U6lHQ-vwq0UxZEx98uu5NUU6yqCtph5sNs308'],
    ['Equinox', '🟧', 'Caster', 'warframe', '10MOSho0XtmkbAIwXYqHFWUAbj_yarOogVJtMUC_tE0Q'],
    ['Khora', '🟧', 'Caster', 'warframe', '1_8UORmttAHIP0uhd-aMXu98tIu7Ospb9lEnNJO-PFUE'],
    ['Sevagoth', '🟧', 'Caster', 'warframe', '1ET_lZyrAq2t8NuQgvN32LDitpg4RbW1tBZCBzMOjQR0'],
    ['Trinity', '🟨', 'Caster', 'warframe', '15rhJvpn9_tjEI1RjYMlVmqUWtEt2Y3nQwSQGOjkikAY'],
    // Thrax Killers — Primary
    ['Burston Incarnon', null, 'Thrax Killer', 'primary', '1Q340CPbUPra0aPv8YIOdbx7s-AaE1MIDeaRLszFA2Ok'],
    ['Kuva Hek', null, 'Thrax Killer', 'primary', '1DCJ_9X4mgP6pm_TCVK-J7pu8xqEdPxAtEnCJdTO_ODM'],
    ['Kuva Sobek', null, 'Thrax Killer', 'primary', '1Y3KVus3iZXs-apDzqbhsiUq-vBbiAYfdgI78nBqA4RA'],
    ['Latron Incarnon', null, 'Thrax Killer / Utility', 'primary', '1rCYqINCMm5LQRivKA0uMZYtxSa7R5JjE7U2utYtyuoI'],
    ['Miter Incarnon', null, 'Thrax Killer', 'primary', '1hcOn3aOWPOhOlPLrGhKAyB1GKxc3vqxt5NeCxoIXtLE'],
    ['Nataruk', null, 'Thrax Killer', 'primary', '1U1G9vH8P62NcrVia-4nZ9Rs13rqOjdUJJlpBfhcyw7w'],
    // Thrax Killers — Secondary
    ['Angstrum Incarnon', null, 'Thrax Killer', 'secondary', '1uidIR9v07QcXD57ETIsqQQHhEVU_IyuudnOdoE5NOEo'],
    ['Dual Toxocyst Incarnon', null, 'Thrax Killer', 'secondary', '1-TkodmcsNwFicChxe5kl5Gl43EYTgAH-2-sQOaxvoDk'],
    ['Furis Incarnon', null, 'Thrax Killer', 'secondary', '1xGkH-MiQ2aHjvN7VN_AFPDl7RmujiEOkIiygXPmelJs'],
    ['Laetum', null, 'Thrax Killer', 'secondary', '1v5uoqw4o2IyACOM8Zk-Enx5S2rTV0KZy4hqKiId-yBw'],
    ['Ocucor', null, 'Thrax Killer', 'secondary', '1BiQ8NqGL20KrHJb67Fpr5NM2FY0snJaCWunCKS79gNQ'],
    // Thrax Killers — Melee
    ['Ceramic Dagger Incarnon', null, 'Thrax Killer / Utility', 'melee', '1rO2unMUNwMDMOCF7Xm-b5JJU3urq9Fj9oQztkE3FeoU'],
    ['Dokrahm Zaw', null, 'Thrax Killer', 'melee', '1Yc_atYqe1vdgBvJxbiLgU4sbiqTZak1XWC6rbX3q8pA'],
    ['Ekhein', null, 'Thrax Killer', 'melee', '1ePzIUaPMQ502cWjihS_ffXtlflA6PzQxiXkMWa536o8'],
    ['Harmony', null, 'Thrax Killer', 'melee', '1OGQOtHUkvnG93LeWphJeZl2vDLaRsxPxU2NmteVX4vw'],
    ['Hate Incarnon', null, 'Thrax Killer', 'melee', '1mUGl6vJLjoy86FL6zpQgEMDPleeFM0kjVXyJCyqDwco'],
    ['Magistar Incarnon', null, 'Thrax Killer', 'melee', '1Y-g1mmPqA6n8p46wj9mFZ24mDmIMILBhky-04Lcg4-I'],
    ['Quassus Prime', null, 'Thrax Killer', 'melee', '1c8ZB5A5CQCdspyQxpZMtbfGwl6h3FwyQpPQh21nJBR8'],
    ['Rabvee Zaw', null, 'Thrax Killer', 'melee', '1yF3JrXYF1oQu7thVK18CgZKStG_W5xPOvKlT_ilt0KM'],
    ['Sibear Incarnon', null, 'Thrax Killer', 'melee', '1OIn133eZtrh04mXIMr0bCiQN0haOUvc3HFZxQFkav1Y'],
    ['Verdilac', null, 'Thrax Killer', 'melee', '1eWHsTivqDQE0iuUmXGjz3DmP9PgKkFY_oDtG_IhhrV0'],
    // Amps
    ['1x7 (Raplak)', null, 'Amp', 'amp', '1Bu5wkMSnhnBUTBjjvPR56b9nLmA8YkVXmClg4PVEmjc'],
    ['5x7 (Cantic)', null, 'Amp', 'amp', '1aWvoqHdh8omTVdsdBA7JMkZyeBqEaWdXPs3ZPQ9YShw'],
    ['4x7 (Rahn)', null, 'Amp', 'amp', '124zhJjXgDdd_gY6O5d9L_xolRriv7yg0B2F9d2HbPgE'],
    // Primers / Utility — Primary
    ['Amprex', null, 'Primer', 'primary', '1JOpWh2Y-7rF0WwaZE3JiZ5IjPrKLQG8CuWLpNRm-DOM'],
    ['Bubonico', null, 'Primer', 'primary', '1wESwD5_9C_Kmq-SDD5sEJpiDVGKQ8kJtfv9CZkCw2FA'],
    ['Cedo', null, 'Primer', 'primary', '10_NU0yZl5F_kyaN8DYPqxPxYcT_F0qeINeWOnqQCgrc'],
    ['Phage', null, 'Primer', 'primary', '1S-ivhSJpBN4yDVtveA8u4om2WX7DDlqBs1mQwzMlD-M'],
    ['Phantasma', null, 'Primer', 'primary', '1YBGpoB6nP9iyRXHg1XUBJXcPr5HBiTXbN4LYKVzIuHM'],
    ['Scourge', null, 'Utility', 'primary', '1CYgA8XgXQIRr_75NxBxluxUeImWf7roTYdbtqR8olOE'],
    ['Tenet Glaxion', null, 'Primer', 'primary', '1sJVzbY_pGLFVG4A1qJKcn4cOkg6s_CaKSCurxp93nkg'],
    // Primers / Utility — Secondary
    ['Bronco', null, 'Utility', 'secondary', '1wJHVz8DiNOXBMdLV9PBKaJI0liKt6Dqi6K6lVK3xdYs'],
    ['Catabolyst', null, 'Primer', 'secondary', '1wyj7meEmy5QiayBqNTqYYj227H8Lm8wf_cpLwFR84WI'],
    ['Epitaph', null, 'Primer', 'secondary', '1oVO2K1MCCaX5nAph6oKh9mjccFDMHtPeCOOjV25d-Mc'],
    ['Kompressa', null, 'Primer', 'secondary', '1DfVlTXfT2_KIzd6C6pXrhVCVc_jWp5G4bywkEwIKGg0'],
    ['Kuva Nukor', null, 'Primer', 'secondary', '1t_eXJYFmFCLgeAtGMoiKfgPe6TD1gQpG185hUgV7sHY'],
    ['Tenet Cycron', null, 'Primer', 'secondary', '18EVk_M3OB3uecioc22ySYS-kVzm4SZgBZImcxhtWz34'],
    // Primers / Utility — Melee
    ['Praedos', null, 'Utility', 'melee', '1k994cRXerrFHjadH6phpLG96mmOAYApYUOHRCmpO0Jw'],
    // Trash Killers
    ['Torid Incarnon', null, 'Trash Killer', 'primary', '1acx1s4_OC3hbdem1QmueO795h-_kuslzZGvszXC86EI'],
    ['Cerata', null, 'Trash Killer', 'melee', '1EoNbOYH7BIYsXpNGfki6mUOb1CojO6XiadWaKnLMUH8'],
    ['Falcor', null, 'Trash Killer', 'melee', '1Mu7_oVFIYniWkxQqWkwi0whRZryzwlUvOXZCTRSJm3s'],
    ['Glaive Prime', null, 'Trash Killer', 'melee', '11B9eSrQm7egkPh_m08exyR98aEcBGYhyyYWWymEFZv0'],
    ['Innodem', null, 'Trash Killer', 'melee', '1pfZk12BJYSUqyX1VAXXZvzUlTByOMTJud4b_ZAuXAwg'],
    ['Nami Solo Incarnon', null, 'Trash Killer', 'melee', '1uM2zrlzDRiOvttkwTbe_wjXG8C_FIoTslPk2mwh5XqI'],
    ['Okina Prime Incarnon', null, 'Trash Killer', 'melee', '11sTa3vqO5CPipquw5FJidpXfFD8Y7PNBJNAcDKtvoVI'],
    ['Tenet Livia', null, 'Trash Killer', 'melee', '1IvYTnwB_dWMLLs4CqOCbTFSUDUoXQOkdvJ2be8pDwgw'],
    ['Xoris', null, 'Trash Killer', 'melee', '18FVTRQvoa2ZW_FJB9Rw7gN6CBS84tY4_fohfyR9XjJE'],
    // Companions
    ['Diriga', null, 'Companion (Sentinel)', 'companion', '1MXE5U7aUXmvkGyAntCR-mO_oL2N46gHCHQcEH-shiww'],
    ['Wyrm', null, 'Companion (Sentinel)', 'companion', '1Y-0-5htfFI3sz6vETiFwNrGw3J-9_ByB9mjFkB6wX8I'],
    ['Hound (qualquer)', null, 'Companion (Hound)', 'companion', '1hNTezYrVy5QAG5TVGBoc1YtwSThWXCsSfr34GKbgJBw'],
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const builds = ROWS.map(([subject, diff, section, category, id]) => {
    const b = {
        id: `${slug(subject)}-void-cascade`,
        category,
        subject,
        title: subject,
        purpose: `${section} · Void Cascade`,
        source: `https://docs.google.com/document/d/${id}/edit`,
        credit: CREDIT,
    };
    if (diff) b.difficulty = DIFF[diff];
    return b;
});

const file = `// GERADO por scripts/build-cascade-index.mjs — não editar à mão.
// Índice do "Void Cascade Builds Guide" (Cascade Club / SabreWalrus).
// Cada entrada tem link pro doc original; a grade de mods entra manualmente
// depois em src/data/builds.js (ou aqui, quando transcrita).

export const CASCADE_CREDIT = ${JSON.stringify(CREDIT, null, 4)};

export const CASCADE_BUILDS = ${JSON.stringify(builds, null, 4)};
`;

writeFileSync(OUT, file);
console.log(`OK: ${builds.length} entradas -> ${OUT}`);
const byCat = builds.reduce((a, b) => ((a[b.category] = (a[b.category] || 0) + 1), a), {});
console.log('por categoria:', byCat);
