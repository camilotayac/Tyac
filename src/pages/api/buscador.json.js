// src/pages/api/buscador.json.js
// Este archivo genera el índice de búsqueda para Tyac
// Se ejecuta durante el build para crear un JSON estático.

import { cursosCiencia } from "../../data/cursos.js";
import { apuntesTecnicos } from "../../data/apuntes.js";

import { getCollection } from 'astro:content';

export async function GET() {
    // 1. Recoger todas las lecciones de ambos directorios mediante Content Collections
    const apuntes = await getCollection('apuntes');
    const cursos = await getCollection('cursos');
    
    // Mapeo de iconos dinámico desde cursos.js
    const cursoIcons = {};
    [...cursosCiencia, ...apuntesTecnicos].forEach(c => {
        cursoIcons[c.id] = c.icono;
    });
    
    // Función auxiliar para extraer el cuerpo de MDX
    const extractContent = (rawContent) => {
        if (!rawContent) return "";
        const contentWithoutCode = rawContent.replace(/```[\s\S]*?```/g, '');
        return contentWithoutCode
            .replace(/[#*`>]/g, '')
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/\n+/g, ' ')
            .trim();
    };

    const leccionesAgrupadas = [...apuntes, ...cursos];

    const leccionesIndices = leccionesAgrupadas.map((entry) => {
        const idCurso = entry.data.curso || "";
        const idClase = entry.id.split('/')[1].replace(/\.(md|mdx)$/, '');
        const collectionPath = apuntes.includes(entry) ? 'apuntes' : 'cursos';

        return {
            titulo: entry.data.titulo || idCurso,
            descripcion: entry.data.descripcion || "",
            cuerpo: extractContent(entry.body),
            url: `/${collectionPath}/${idCurso}/${idClase}`,
            tipo: "leccion",
            curso: idCurso,
            materia: entry.data.materia || "General",
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
