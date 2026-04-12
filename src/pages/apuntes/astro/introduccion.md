---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Astro en Tyac: ¿Por qué esta tecnología?"
materia: "Astro"
curso: "astro"
id_clase: "introduccion"
---

# ¿Por qué Astro? El origen de Tyac

Cuando decidimos construir **Tyac**, teníamos un objetivo claro: crear una biblioteca de conocimiento que se sintiera moderna, pero que fuera increíblemente rápida. En la web actual, muchas páginas sufren de "fatiga de JavaScript", cargando megabytes de código solo para mostrar texto.

**Astro** fue nuestra elección porque invierte esta tendencia.

## La filosofía "Content-First"

Tyac es, en su corazón, una plataforma de contenido. Estás leyendo esto ahora mismo porque Astro generó este HTML en el servidor. 

### Beneficios clave para Tyac:

1.  **Zero JS por defecto**: A diferencia de React o Next.js, Astro no envía JavaScript al navegador a menos que sea estrictamente necesario (como en nuestro buscador interactivo).
2.  **Islas de Interactividad**: Componentes como el reproductor de video o el buscador son "islas". El resto de la página es HTML puro y estático.
3.  **Rendimiento Extremo**: Al no tener que procesar complejos frameworks en el cliente, la navegación inicial es instantánea.

## El toque "App" en un sitio estático

A pesar de ser un generador de sitios estáticos, Tyac se siente como una aplicación móvil gracias a los **View Transitions**. Esta tecnología de Astro permite que, al cambiar de página, los elementos se deslicen y transformen suavemente, manteniendo la persistencia de componentes como el reproductor de video o la barra de búsqueda.

> [!TIP]
> En Tyac, usamos Astro no solo para mostrar información, sino para orquestar una experiencia educativa fluida sin sacrificar la velocidad.

---

En la siguiente guía, veremos cómo organizamos las tripas de este proyecto para mantener el orden.
