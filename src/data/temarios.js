import { getCollection } from 'astro:content';

// 1. Temarios MANUALES (Para cursos basados en HTML/Astro puro)

/**
 * Función principal para obtener el temario de un curso.
 * Combina datos manuales con datos automáticos de Content Collections.
 */
export async function getTemario(cursoId) {
    // B. Si no es manual, buscamos en las colecciones (Automatización para MDX)
    try {
        const [apuntes, cursos] = await Promise.all([
            getCollection('apuntes'),
            getCollection('cursos')
        ]);

        const todasLasLecciones = [...apuntes, ...cursos];

        // Filtrar por curso y procesar datos
        const lecciones = todasLasLecciones
            .filter(entry => {
                // El campo 'curso' en frontmatter debe coincidir con cursoId
                return entry.data.curso === cursoId;
            })
            .sort((a, b) => (a.data.orden || 999) - (b.data.orden || 999))
            .map(entry => ({
                id: entry.data.id_clase, // Usamos id_clase para compatibilidad con el sistema de rutas
                titulo: entry.data.titulo,
                subcurso: entry.data.subcurso,
                dificultad: entry.data.dificultad || "Fácil",
                duracion: entry.data.duracion // Por si existe
            }));

        return lecciones;
    } catch (e) {
        console.error(`Error cargando temario automático para ${cursoId}:`, e);
        return [];
    }
}

// Para retrocompatibilidad durante la transición (se irá eliminando)
export const todosLosTemarios = [];