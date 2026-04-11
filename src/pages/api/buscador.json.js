// src/pages/api/buscador.json.js
// Este archivo genera el índice de búsqueda para Tyac
// Se ejecuta durante el build para crear un JSON estático.

import { cursosCiencia } from "../../data/cursos.js";
import { apuntesTecnicos } from "../../data/apuntes.js";

export async function GET() {
    // 1. Recoger todas las lecciones de ambos directorios: apuntes y cursos
    const archivos = import.meta.glob(['../apuntes/**/*.md', '../cursos/**/*.md'], { eager: true });
    
    // Mapeo de iconos dinámico desde cursos.js
    const cursoIcons = {};
    [...cursosCiencia, ...apuntesTecnicos].forEach(c => {
        cursoIcons[c.id] = c.icono;
    });
    
    const leccionesIndices = Object.values(archivos).map((archivo) => {
        const content = archivo.rawContent ? archivo.rawContent() : "";
        const contentWithoutCode = content.replace(/```[\s\S]*?```/g, '');
        const cleanContent = contentWithoutCode
            .replace(/[#*`>]/g, '')
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/\n+/g, ' ')
            .trim();

        const idCurso = archivo.frontmatter.curso || "";

        return {
            titulo: archivo.frontmatter.titulo || idCurso,
            descripcion: archivo.frontmatter.descripcion || "",
            cuerpo: cleanContent,
            url: archivo.url,
            tipo: "leccion",
            curso: idCurso,
            materia: archivo.frontmatter.materia || "General",
            icono: cursoIcons[idCurso] || "📄"
        };
    });

    // 2. Generar índices de cursos dinámicamente desde cursos.js
    const cursosIndices = [...cursosCiencia, ...apuntesTecnicos].map(curso => ({
        titulo: `Curso de ${curso.materia}`,
        subtitulo: curso.titulo,
        descripcion: curso.descripcion,
        cuerpo: `${curso.titulo} ${curso.descripcion} ${curso.materia} academia ciencia tecnologia`,
        url: curso.href, // Ahora apunta a la LANDING dinámica (/cursos/id o /apuntes/id)
        tipo: "curso",
        curso: curso.id,
        materia: curso.materia,
        icono: curso.icono
    }));

    const indiceCompleto = [...leccionesIndices, ...cursosIndices];

    return new Response(JSON.stringify(indiceCompleto), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
