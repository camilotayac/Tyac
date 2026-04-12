---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Navigation Flow: La barra superior persistente"
materia: "Astro"
curso: "astro"
id_clase: "navbar"
---

# Navigation Flow: La barra superior persistente

En Tyac, el **Navbar** no es solo una lista de enlaces; es el marco de referencia constante del usuario. Su diseño debe ser lo suficientemente limpio para no distraer, pero lo suficientemente presente para guiar.

## 1. Posicionamiento Sticky

Para que el usuario siempre tenga acceso a la navegación y a la búsqueda, usamos `position: sticky`. Esto fija la barra al tope de la ventana incluso mientras haces scroll en lecciones largas.

```css
.main-navigation {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--clr-black-01);
    height: 64px;
    display: flex;
    align-items: center;
}
```

## 2. Jerarquía de Elementos

El Navbar de Tyac se divide en tres zonas lógicas:
- **Izquierda (Branding)**: El logo que te lleva al inicio.
- **Centro (Utilidad)**: El buscador global (modo header).
- **Derecha (Navegación)**: Enlaces directos a las secciones de Cursos y Apuntes.

## 3. Persistencia con View Transitions

Aquí es donde ocurre la magia de Astro. Usamos la directiva `transition:persist` para que el Navbar no se "recargue" cada vez que cambias de página. 

```astro
<header class="main-navigation" transition:persist="main-header">
    ...
</header>
```

Gracias a esto, si escribes algo en el buscador y navegas, el Navbar mantiene su estado y posición, creando una experiencia fluida de "Single Page Application".

> [!TIP]
> **Detalle de Diseño**: Usamos un color de fondo ligeramente traslúcido con un borde inferior muy sutil para que el contenido pase por debajo del Navbar sin que se vea cortado bruscamente.

---

El Navbar debe funcionar en todas las pantallas. En la siguiente guía, veremos cómo adaptamos este flujo para dispositivos móviles.
