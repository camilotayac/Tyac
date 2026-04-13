import { getTemario } from "./temarios.js";

// 1. Apuntes MANUALES (Definimos el "Card" aquí, pero el contenido viene de Markdown)
const manualApuntes = [
    {
        id: "astro",
        titulo: "Guía de Astro",
        descripcion: "Aprende a crear sitios web rápidos y modernos con Astro desde cero.",
        icono: "astro",
        materia: "Astro",
        href: "/apuntes/astro",
        nivel: "Básico",
        profesor: "Tyac Team",
        draft: false
    },
    {
        id: "quimica_general",
        titulo: "Química General",
        descripcion: "Desde los átomos hasta las reacciones: comprende la materia.",
        icono: "quimica",
        materia: "Química",
        href: "/apuntes/quimica_general",
        nivel: "Básico",
        profesor: "Tyac Team",
        draft: false
    },
    {
        id: "quimica_organica",
        parentId: "quimica_general",
        titulo: "Química Orgánica",
        descripcion: "Estudio de los compuestos del carbono y su impacto en la vida.",
        icono: "quimica",
        materia: "Química",
        href: "/apuntes/quimica_organica",
        nivel: "Intermedio",
        profesor: "Tyac Team",
        draft: false
    },
    {
        id: "quimica_cuantica",
        parentId: "quimica_general",
        titulo: "Química Cuántica",
        descripcion: "Explora el comportamiento subatómico y la mecánica de las moléculas.",
        icono: "quimica",
        materia: "Química",
        href: "/apuntes/quimica_cuantica",
        nivel: "Avanzado",
        profesor: "Tyac Team",
        draft: false
    },
];

/**
 * Obtiene la lista de apuntes técnicos, calculando lecciones.
 */
export async function getApuntesTecnicos(filter = { onlyTopLevel: false, parentId: null }) {
    let filteredApuntes = manualApuntes;

    if (filter.parentId) {
        filteredApuntes = manualApuntes.filter(a => a.parentId === filter.parentId);
    } else if (filter.onlyTopLevel) {
        filteredApuntes = manualApuntes.filter(a => !a.parentId);
    }

    const apuntesProcesados = await Promise.all(filteredApuntes.map(async (apunte) => {
        const temario = await getTemario(apunte.id);
        return {
            ...apunte,
            lecciones: temario.length
        };
    }));

    return apuntesProcesados.filter(apunte => !apunte.draft);
}

// Retrocompatibilidad
export const apuntesTecnicos = [];

