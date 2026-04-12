// src/data/cursos.js
import { todosLosTemarios } from "./temarios.js";

// Lista de Cursos (Materias académicas)
export const cursosCiencia = [
    {
        id: "quimica_general",
        titulo: "Química General",
        descripcion: "Desde los átomos hasta las reacciones: comprende cómo funciona la materia a nivel fundamental.",
        icono: "🧪",
        materia: "Química",
        href: "/cursos/quimica_general",
        lecciones: todosLosTemarios.quimica_general.length,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
];
