// src/data/apuntes.js
import { todosLosTemarios } from "./temarios.js";

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
