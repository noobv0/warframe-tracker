// Fonte: wiki.warframe.com/w/The_Circuit — rotação fixa que se repete.
// Calibrado com a semana de 2026-08-17 (index 7, base 0), confirmada ao vivo.
const REFERENCE_MONDAY = '2026-08-17';

export const NORMAL_CIRCUIT_ROTATION = [
    ['Excalibur', 'Trinity', 'Ember'],
    ['Loki', 'Mag', 'Rhino'],
    ['Ash', 'Frost', 'Nyx'],
    ['Saryn', 'Vauban', 'Nova'],
    ['Nekros', 'Valkyr', 'Oberon'],
    ['Hydroid', 'Mirage', 'Limbo'],
    ['Mesa', 'Chroma', 'Atlas'],
    ['Ivara', 'Inaros', 'Titania'],
    ['Nidus', 'Octavia', 'Harrow'],
    ['Gara', 'Khora', 'Revenant'],
    ['Garuda', 'Baruuk', 'Hildryn'],
];
const REFERENCE_NORMAL_INDEX = 7;

export const STEEL_PATH_CIRCUIT_ROTATION = [
    ['Braton', 'Lato', 'Skana', 'Paris', 'Kunai'],
    ['Boar', 'Gammacor', 'Angstrum', 'Gorgon', 'Anku'],
    ['Bo', 'Latron', 'Furis', 'Furax', 'Strun'],
    ['Lex', 'Magistar', 'Boltor', 'Bronco', 'Ceramic Dagger'],
    ['Torid', 'Dual Toxocyst', 'Dual Ichor', 'Miter', 'Atomos'],
    ['Ack & Brunt', 'Soma', 'Vasto', 'Nami Solo', 'Burston'],
    ['Zylok', 'Sibear', 'Dread', 'Despair', 'Hate'],
    ['Dera', 'Sybaris', 'Cestra', 'Sicarus', 'Okina'],
];
const REFERENCE_SP_INDEX = 7;

function mod(n, m) {
    return ((n % m) + m) % m;
}

function weeksBetween(weekKey) {
    const ms = Date.parse(`${weekKey}T00:00:00Z`) - Date.parse(`${REFERENCE_MONDAY}T00:00:00Z`);
    return Math.round(ms / (7 * 24 * 60 * 60 * 1000));
}

export function getCurrentNormalCircuit(weekKey) {
    const index = mod(REFERENCE_NORMAL_INDEX + weeksBetween(weekKey), NORMAL_CIRCUIT_ROTATION.length);
    return NORMAL_CIRCUIT_ROTATION[index];
}

export function getCurrentSteelPathCircuit(weekKey) {
    const index = mod(REFERENCE_SP_INDEX + weeksBetween(weekKey), STEEL_PATH_CIRCUIT_ROTATION.length);
    return STEEL_PATH_CIRCUIT_ROTATION[index];
}
