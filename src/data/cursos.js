import { getCollection } from 'astro:content';
import { getTemario } from "./temarios.js";

// 1. Cursos MANUALES (HTML / Control Total)
const manualCursos = [];

/**
 * Obtiene la lista de cursos de ciencia, combinando manuales y automáticos.
 */
export async function getCursosCiencia() {
    // Procesar cursos manuales y calcular sus lecciones automáticamente
    const cursosProcesados = await Promise.all(manualCursos.map(async (curso) => {
        const temario = await getTemario(curso.id);
        return {
            ...curso,
            lecciones: temario.length
        };
    }));

    return cursosProcesados.filter(curso => !curso.draft);
}

// Retrocompatibilidad (solo para avisar que cambió a async)
export const cursosCiencia = [];

