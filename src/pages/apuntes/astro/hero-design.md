---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "The Hero Section: Diseño de impacto (Spotlight)"
materia: "Astro"
curso: "astro"
id_clase: "hero-design"
---

# The Hero Section: Diseño de impacto

La primera impresión lo es todo. Para Tyac, nos inspiramos en estéticas modernas como las de Platzi o Stripe, buscando un diseño oscuro, vibrante y que gritara "¡Calidad!". El **Hero** es la pieza central de esta experiencia.

## 1. El concepto de "Spotlight" y "Blobs"

Para evitar que el fondo fuera un negro plano y aburrido, usamos dos técnicas de diseño premium:

### A. Blobs de Color (Mesh Gradients)
Usamos pseudoelementos (`::before` y `::after`) con fondos de colores degradados (púrpura y cian) y un filtro de **blur (desenfoque)** muy alto. Esto crea esas "manchas" suaves de luz que parecen flotar detrás del texto.

### B. Gradientes de Acento
El título principal no es blanco puro; usamos un degradado lineal que va de púrpura a cian, logrando ese efecto de "neón" que define la marca Tyac.

## 2. Implementación Técnica en CSS

```css
.hero-platzi::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--dracula-purple);
    filter: blur(80px); /* El secreto del efecto de luz */
    opacity: 0.4;
    z-index: 0;
}
```

## 3. Disposición Centrada y Jerarquía

Usamos **Flexbox** para asegurar que el contenido esté perfectamente alineado. La jerarquía visual sigue este orden:
1.  **Título Gigante**: El qué.
2.  **Subtítulo**: El cómo.
3.  **Pregunta Directa**: El call to action.
4.  **Buscador**: La herramienta.

> [!NOTE]
> **Dato de Diseño**: Al usar un fondo oscuro (`#0a0b10`) con acentos brillantes, reducimos la fatiga visual y proyectamos una imagen de herramientas modernas de desarrollo.

---

El Hero no solo debe verse bien, debe sentirse vivo. En la siguiente guía, veremos cómo añadimos movimiento con animaciones y elementos flotantes.
