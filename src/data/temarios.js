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

    // 🚀 Apuntes de Astro (lecciones que surgen de preguntas reales)
    astro: [
        { id: "introduccion", titulo: "1. ¿Qué es Astro y por qué usarlo?", duracion: "08:00" },
        { id: "estructura", titulo: "2. Estructura de un proyecto Astro", duracion: "10:00" },
        { id: "componentes", titulo: "3. Componentes .astro: la sintaxis base", duracion: "12:00" },
        { id: "props", titulo: "4. Props y Astro.props", duracion: "07:00" },
        { id: "layouts", titulo: "5. Layouts y <slot />", duracion: "09:00" },
        { id: "rutas", titulo: "6. Sistema de rutas en Astro", duracion: "08:00" },
        { id: "markdown", titulo: "7. Markdown en Astro", duracion: "10:00" },
        { id: "estilos", titulo: "8. Estilos en Astro: Scoped vs Global", duracion: "11:00" },
        { id: "estilos-markdown", titulo: "9. Personalizar Estilos de Markdown", duracion: "12:00" }
    ],

    // 🧪 Curso de Química General
    quimica_general: [
        { id: "materia", titulo: "1. ¿Qué es la Materia?", duracion: "08:00" },
        { id: "atomos", titulo: "2. Estructura Atómica", duracion: "12:00" },
        { id: "tabla_periodica", titulo: "3. La Tabla Periódica Moderna", duracion: "10:00" },
        { id: "enlaces", titulo: "4. Enlace Iónico y Covalente", duracion: "15:00" },
        { id: "reacciones", titulo: "5. Reacciones Químicas", duracion: "20:00" },
    ],
};