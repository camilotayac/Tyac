// src/data/cursos.js
import { todosLosTemarios } from "./temarios.js";

// Lista base de todos los cursos
const allCursos = [
    {
        id: "quimica_general",
        titulo: "Química General",
        descripcion: "Desde los átomos hasta las reacciones: comprende cómo funciona la materia a nivel fundamental.",
        icono: "🧪",
        materia: "Química",
        href: "/cursos/quimica_general",
        lecciones: todosLosTemarios.quimica_general.length,
        nivel: "Básico",
        profesor: "Tyac Team",
        draft: true // Al estar en TRUE, el curso se vuelve "oculto" en toda la plataforma
    },
];

// Solo exportamos los que NO están en draft
export const cursosCiencia = allCursos.filter(curso => !curso.draft);
