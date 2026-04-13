// src/pages/api/buscador.json.js
// Este archivo genera el índice de búsqueda para Tyac
// Se ejecuta durante el build para crear un JSON estático.

import { getCursosCiencia } from "../../data/cursos.js";
import { getApuntesTecnicos } from "../../data/apuntes.js";

import { getCollection } from 'astro:content';

export async function GET() {
    // Top-level async values for data
    const allCursos = await getCursosCiencia();
    const allApuntes = await getApuntesTecnicos();
    const cursoIcons = {};
    
    [...allCursos, ...allApuntes].forEach(c => {
        cursoIcons[c.id] = c.icono;
    });

    // 1. Recoger todas las lecciones de ambos directorios mediante Content Collections
    const apuntes = await getCollection('apuntes');
    const cursos = await getCollection('cursos');
    
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
        const idClase = entry.data.id_clase;
        const collectionPath = apuntes.some(a => a.id === entry.id) ? 'apuntes' : 'cursos';

        return {
            titulo: entry.data.titulo || idClase,
            descripcion: entry.data.descripcion || "",
            cuerpo: extractContent(entry.body),
            url: `/${collectionPath}/${idCurso}/${idClase}`,
            tipo: "leccion",
            curso: idCurso,
            materia: entry.data.materia || "General",
            icono: cursoIcons[idCurso] || "📄"
        };
    });

    // 2. Generar índices de cursos dinámicamente
    const cursosIndices = [...allCursos, ...allApuntes].map(curso => ({
        titulo: `Curso de ${curso.materia}`,
        subtitulo: curso.titulo,
        descripcion: curso.descripcion,
        cuerpo: `${curso.titulo} ${curso.descripcion} ${curso.materia} academia ciencia tecnologia`,
        url: curso.href,
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
