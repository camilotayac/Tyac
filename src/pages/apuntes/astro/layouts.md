---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Orquestación de vistas con Layouts en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "layouts"
---

# Layouts: Orquestación de vistas

En Tyac, no queremos repetir el Navbar y el Footer en cada una de las cientos de lecciones. Para eso usamos los **Layouts**, que actúan como "marcos" o "moldes" que envuelven nuestro contenido.

## El Layout Maestro (`00-Layout.astro`)

Todos los archivos de Tyac terminan envueltos por este layout. Es el encargado de:
- Cargar la paleta de colores (`palette.css`).
- Incluir la etiqueta `<head>` con los metadatos.
- Mostrar el **Navbar** y el **Footer**.
- Activar las **View Transitions**.

```astro
---
// 00-Layout.astro
import Navbar from './02-Navbar.astro';
import SearchModal from '../../components/SearchModal.astro';
---
<html>
  <body>
    <Navbar />
    <main>
      <slot /> <!-- Aquí es donde se "inyecta" el contenido de cada página -->
    </main>
    <SearchModal />
  </body>
</html>
```

## Nesting: Layouts dentro de Layouts

Tyac utiliza una técnica avanzada llamada **Layout Nesting**. Esta misma página que estás leyendo es un ejemplo:
1.  **Contenido Markdown**: Este texto.
2.  **Layout de Lección (`00-LayoutLessons.astro`)**: Envuelve el texto, añade el Sidebar, los Breadcrumbs y la Paginación.
3.  **Layout Base (`00-Layout.astro`)**: Envuelve todo lo anterior con la navegación global y el SEO.

## El Slot: La pieza clave

El elemento `<slot />` es un marcador de posición. Cuando definimos `layout: ...` en el frontmatter de este Markdown, Astro toma todo este texto y lo coloca exactamente donde pusimos el `<slot />` en el layout de destino.

> [!IMPORTANT]
> **Ventaja Tyac**: Gracias a este sistema, si mañana queremos cambiar de lugar el Sidebar en todas las lecciones, solo tenemos que mover una línea de código en un solo archivo.

---

En la siguiente guía, aprenderemos cómo Astro genera automáticamente las páginas para cada curso.
