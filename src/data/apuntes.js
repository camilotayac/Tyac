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
        href: "/apuntes/astro",
        lecciones: todosLosTemarios.astro.length,
        nivel: "Básico",
        profesor: "Tyac Team"
    },
];
