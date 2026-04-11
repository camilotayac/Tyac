// src/pages/api/buscador.json.js
// Este archivo genera el índice de búsqueda para Tyac
// Se ejecuta durante el build para crear un JSON estático.

import { todosLosTemarios } from "../../data/temarios.js";

export async function GET() {
    // 1. Recoger todas las lecciones de los archivos Markdown
    // Usamos import.meta.glob para encontrar todos los .md en la carpeta apuntes
    const archivos = import.meta.glob('../apuntes/**/*.md', { eager: true });
    
    // Mapeo de iconos por curso para que las lecciones hereden el icono principal
    const cursoIcons = {
        "astro": "🚀",
        "conjuntos": "🔢",
        "quimica": "🧪",
        "biologia": "🧬"
    };
    
    const leccionesIndices = Object.values(archivos).map((archivo) => {
        // ... (limpieza de contenido existente) ...
        const content = archivo.rawContent ? archivo.rawContent() : "";
        const contentWithoutCode = content.replace(/```[\s\S]*?```/g, '');
        const cleanContent = contentWithoutCode
            .replace(/[#*`>]/g, '')
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/\n+/g, ' ')
            .trim();

        const idCurso = archivo.frontmatter.curso || "";

        return {
            titulo: archivo.frontmatter.titulo || archivo.url.split('/').pop(),
            descripcion: archivo.frontmatter.descripcion || "",
            cuerpo: cleanContent,
            url: archivo.url,
            tipo: "leccion",
            curso: idCurso,
            materia: archivo.frontmatter.materia || "General",
            icono: cursoIcons[idCurso] || "📄"
        };
    });

    // 2. Recoger metadatos de los Cursos (desde temarios.js o constantes)
    // Para simplificar, añadiremos los cursos base aquí
    const cursosIndices = [
        {
            titulo: "Curso de Conjuntos",
            descripcion: "Lógica proposicional, unión, intersección y teoría de conjuntos.",
            cuerpo: "matematicas logica union interseccion conjuntos academia ciencia",
            url: "/apuntes/conjuntos/proposicion",
            tipo: "curso",
            curso: "conjuntos",
            materia: "Matemáticas"
        },
        {
            titulo: "Curso de Astro",
            descripcion: "Aprende a crear sitios web rápidos y modernos con Astro desde cero.",
            cuerpo: "tecnologia frontend javascript static site generator componentes islas web",
            url: "/apuntes/astro/introduccion",
            tipo: "curso",
            curso: "astro",
            materia: "Tecnología"
        }
    ];

    const indiceCompleto = [...leccionesIndices, ...cursosIndices];

    return new Response(JSON.stringify(indiceCompleto), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
