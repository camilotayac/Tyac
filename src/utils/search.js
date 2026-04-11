/**
 * Utilidades de búsqueda para Tyac
 * Implementa normalización de acentos y algoritmos de coincidencia difusa (Fuzzy Match)
 */

/**
 * Normaliza una cadena eliminando acentos y convirtiéndola a minúsculas.
 */
export function normalize(str) {
    if (!str) return "";
    return str
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Calcula la distancia de Levenshtein entre dos cadenas.
 * Representa cuántos cambios son necesarios para transformar una palabra en otra.
 */
export function levenshtein(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // sustitución
                    matrix[i][j - 1] + 1,     // inserción
                    matrix[i - 1][j] + 1      // eliminación
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

/**
 * Calcula una puntuación de coincidencia para un elemento de búsqueda.
 * @param {string} query - Lo que el usuario escribió (normalizado).
 * @param {object} item - El objeto de datos (titulo, descripcion, materia).
 */
export function calculateScore(query, item) {
    const q = normalize(query);
    const titulo = normalize(item.titulo);
    const materia = normalize(item.materia);
    const desc = normalize(item.descripcion || "");

    let score = 0;

    // 1. Coincidencias Exactas (Alta prioridad)
    if (titulo === q) score += 100;
    if (materia === q) score += 90;

    // 2. Empieza con la consulta
    if (titulo.startsWith(q)) score += 80;

    // 3. Contiene la consulta
    if (titulo.includes(q)) score += 50;
    if (materia.includes(q)) score += 40;
    if (desc.includes(q)) score += 20;

    // 4. Búsqueda Difusa (Tolerancia a errores ortográficos)
    // Solo si la palabra es suficientemente larga para evitar falsos positivos
    if (q.length >= 3) {
        const words = titulo.split(" ");
        for (const word of words) {
            const dist = levenshtein(q, word);
            
            // Distancia de 1 para palabras cortas (<= 5)
            // Distancia de 2 para palabras largas (> 5)
            const maxDist = word.length > 5 ? 2 : 1;
            
            if (dist <= maxDist) {
                // Cuanto menor la distancia, más puntos
                score += (maxDist - dist + 1) * 15;
            }
        }
    }

    return score;
}
