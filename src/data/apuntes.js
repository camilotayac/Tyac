// src/data/apuntes.js
import { todosLosTemarios } from "./temarios.js";

// Lista base de todos los apuntes
const allApuntes = [
    {
        id: "astro",
        titulo: "Guía de Astro",
        descripcion: "Aprende a crear sitios web rápidos y modernos con Astro desde cero.",
        icono: "🚀",
        materia: "Astro",
        href: "/apuntes/astro",
        lecciones: todosLosTemarios.astro.length,
        nivel: "Básico",
        profesor: "Tyac Team",
        draft: false //<-- Puedes descomentar esta línea para ocultar temporalmente la guía
    },
];

// Solo exportamos los que NO están en draft
export const apuntesTecnicos = allApuntes.filter(apunte => !apunte.draft);
