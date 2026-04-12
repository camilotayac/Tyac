---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Sidebar de Temario: Navegación vertical en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "sidebar-nav"
---

# Sidebar de Temario: Navegación vertical

El **Sidebar** de Tyac es el compañero fiel del estudiante. Ubicado a la izquierda (según la psicología de lectura occidental), este panel permite saltar entre lecciones sin perder el contexto del curso completo. Es un componente dinámico que respira con el progreso del alumno.

## 1. Generación Dinámica

El Sidebar no es una lista estática. En Tyac, el componente lee el array de lecciones correspondiente a la materia actual desde `temarios.js` y genera la lista de enlaces automáticamente:

```astro
---
// SidebarVertical.astro
import { todosLosTemarios } from "../data/temarios.js";
const lecciones = todosLosTemarios[materiaActual];
---
<nav>
  {lecciones.map(leccion => (
    <a href={`/apuntes/${materiaActual}/${leccion.id}`}>
      {leccion.titulo}
    </a>
  ))}
</nav>
```

## 2. El Estado "Activo"

Es fundamental que el estudiante sepa exactamente en qué lección se encuentra. En Tyac, comparamos la URL actual con el ID de la lección en el bucle. Si coinciden, inyectamos la clase `.activo`:

```astro
<a class={currentId === leccion.id ? "activo" : ""}>
```

El CSS se encarga del resto: añade un borde izquierdo de color púrpura y un fondo sutil que resalta la lección seleccionada.

## 3. Comportamiento Sticky y Scroll

En pantallas de escritorio, el Sidebar es **Sticky**. Se queda fijo a la izquierda mientras lees el apunte central. Además, Tyac tiene un diseño de "doble scroll": el sidebar puede tener su propia barra de desplazamiento si el temario es muy largo, sin afectar el movimiento de la lección principal.

## 4. Mobile Off-Canvas

En dispositivos móviles, el Sidebar se oculta por defecto para ganar espacio. Se activa mediante un botón de "Menú de Lecciones", permitiendo una experiencia de lectura despejada.

> [!TIP]
> **Toque Maestro**: Hemos añadido una micro-animación de escala al pasar el cursor por los enlaces del sidebar. Esto lo hace sentir más como una aplicación nativa que como una simple lista de texto.

---

Para que nunca pierdas el camino de vuelta, Tyac usa una miga de pan inteligente. En la siguiente guía: Breadcrumbs y navegación dinámica.
