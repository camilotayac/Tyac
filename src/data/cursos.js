// src/data/cursos.js
// Fuente única de verdad para todos los cursos visibles en la plataforma.
// Agrega aquí cada curso nuevo para que aparezca automáticamente en
// la página de inicio, catálogo, temas y buscador.

export const todosCursosPlataforma = [
    {
        titulo: "Matemáticas: Conjuntos",
        descripcion: "Lógica proposicional, unión, intersección y teoría de conjuntos.",
        icono: "🔢",
        categoria: "matematicas",
        profesor: "Camilo Tayac",
        nivel: "Básico",
        etiqueta: "Curso",
        href: "/conjuntos/proposicion",
    },
    {
        titulo: "Dinámica Molecular",
        descripcion: "Simulación del movimiento de los átomos con GROMACS.",
        icono: "⚛️",
        categoria: "quimica",
        profesor: "Camilo Tayac",
        nivel: "Avanzado",
        etiqueta: "Curso",
        href: null, // Aún no disponible
    },
    {
        titulo: "Química Computacional",
        descripcion: "Bases teóricas y herramientas in silico.",
        icono: "💻",
        categoria: "quimica",
        profesor: "Camilo Tayac",
        nivel: "Intermedio",
        etiqueta: "Curso",
        href: null,
    },
    {
        titulo: "Fisiología Vegetal",
        descripcion: "Comportamiento celular a nivel biofísico.",
        icono: "🌱",
        categoria: "biologia",
        profesor: "Camilo Tayac",
        nivel: "Intermedio",
        etiqueta: "Curso",
        href: null,
    },
    {
        titulo: "Bioinformática Básica",
        descripcion: "Análisis de secuencias y estructuras con Python.",
        icono: "🧬",
        categoria: "biologia",
        profesor: "Camilo Tayac",
        nivel: "Básico",
        etiqueta: "Curso",
        href: null,
    },
];
