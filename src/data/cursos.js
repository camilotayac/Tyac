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
        id: "quimica_organica",
        titulo: "Química Orgánica",
        descripcion: "Introducción a los hidrocarburos, enlaces y estructuras moleculares.",
        icono: "🧪",
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

// Lista de Apuntes (Tecnología y herramientas)
export const apuntesTecnicos = [
    {
        id: "astro",
        titulo: "Guía de Astro",
        descripcion: "Aprende a crear sitios web rápidos y modernos con Astro desde cero.",
        icono: "🚀",
        materia: "Astro",
        href: "/apuntes/astro", // Apunta a la landing técnica
        lecciones: todosLosTemarios.astro.length,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
    {
        id: "javascript",
        titulo: "JavaScript Moderno",
        descripcion: "Domina ES6+, callbacks, promesas y async/await.",
        icono: "🟨",
        materia: "JavaScript",
        href: "/apuntes/javascript",
        lecciones: 15,
        nivel: "Intermedio",
        profesor: "Tyac Team"
    },
    {
        id: "nodejs",
        titulo: "Node.js Backend",
        descripcion: "Construye APIs escalables con Express y bases de datos NoSQL.",
        icono: "🟢",
        materia: "Node.js",
        href: "/apuntes/nodejs",
        lecciones: 20,
        nivel: "Avanzado",
        profesor: "Tyac Team"
    },
    {
        id: "docker",
        titulo: "Docker para Devs",
        descripcion: "Contenedores, imágenes y despliegue continuo.",
        icono: "🐳",
        materia: "Docker",
        href: "/apuntes/docker",
        lecciones: 9,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
    {
        id: "git",
        titulo: "Git & GitHub",
        descripcion: "Control de versiones, flujo de ramas y colaboración en equipo.",
        icono: "🐙",
        materia: "Git",
        href: "/apuntes/git",
        lecciones: 5,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
];

// Unificar todo para fácil acceso por ID
export const todosLosCursos = [...cursosCiencia, ...apuntesTecnicos];
