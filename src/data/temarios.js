// src/data/temarios.js
// IMPORTANTE: el "id" de cada lección debe coincidir con el "id_clase" del frontmatter
// del archivo .md/mdx. La URL se construye como /{curso}/{id_clase}.

export const todosLosTemarios = {
    // 🧮 Curso de Conjuntos
    conjuntos: [
        { id: "proposicion", titulo: "1. Proposición y su negación", duracion: "05:00" },
        { id: "operaciones", titulo: "2. Operaciones con Conjuntos", duracion: "12:15" },
        { id: "diferencia", titulo: "3. Diferencia y Complemento", duracion: "09:40" }
    ],

    // 🧪 Curso de Dinámica Molecular (Ejemplo para el futuro)
    dinamica_molecular: [
        { id: "intro", titulo: "1. ¿Qué es la Dinámica Molecular?", duracion: "10:00" },
        { id: "fuerzas", titulo: "2. Campos de Fuerza", duracion: "15:30" }
    ],

    // 🧬 Agrega más cursos aquí a medida que los vayas creando...
};