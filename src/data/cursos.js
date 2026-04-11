// src/data/cursos.js
import { todosLosTemarios } from "./temarios.js";

// Lista de Cursos (Materias académicas)
export const cursosCiencia = [
    {
        id: "conjuntos",
        titulo: "Matemáticas: Conjuntos",
        descripcion: "Lógica proposicional, unión, intersección y teoría de conjuntos.",
        icono: "🔢",
        materia: "Matemáticas",
        href: "/cursos/conjuntos", // Apunta a la landing
        lecciones: todosLosTemarios.conjuntos.length,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
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
    {
        id: "quimica_organica",
        titulo: "Química Orgánica",
        descripcion: "Introducción a los hidrocarburos, enlaces y estructuras moleculares.",
        icono: "🧬",
        materia: "Química",
        href: "/cursos/quimica_organica",
        lecciones: 12,
        nivel: "Intermedio",
        profesor: "Tyac Team"
    },
    {
        id: "biologia_celular",
        titulo: "Biología Celular",
        descripcion: "Estudio de la célula, orgánulos y procesos metabólicos básicos.",
        icono: "🧬",
        materia: "Biología",
        href: "/cursos/biologia_celular",
        lecciones: 10,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
    {
        id: "fisica_mecanica",
        titulo: "Física Mecánica",
        descripcion: "Leyes de Newton, cinemática y dinámica de partículas.",
        icono: "🎡",
        materia: "Física",
        href: "/cursos/fisica_mecanica",
        lecciones: 15,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
];
