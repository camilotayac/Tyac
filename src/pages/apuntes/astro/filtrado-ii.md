---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Filtrado Dinámico II: Transiciones y Estados en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "filtrado-ii"
---

# Filtrado Dinámico II: Transiciones y Estados

En la guía anterior vimos la lógica de "mostrar y ocultar". Pero en una plataforma premium como Tyac, no queremos saltos bruscos. El cambio de tarjetas debe ser fluido y el botón activo debe estar claramente identificado.

## 1. Transiciones con CSS

Para evitar el parpadeo, usamos una técnica de **Clases de Transición**. En lugar de simplemente cambiar el `display`, aplicamos clases que manejan la opacidad y la escala:

```css
.tarjeta-link {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hidden-card {
    opacity: 0;
    transform: scale(0.95);
    pointer-events: none;
}
```

## 2. Gestión del Estado Activo

Un error común es que el usuario haga clic en un filtro y no sepa cuál está seleccionado. En Tyac, gestionamos la clase `.activo` dinámicamente:

```javascript
filterBtns.forEach((b) => b.classList.remove("activo"));
btn.classList.add("activo");
```

## 3. Estilos del Botón Activo

En Tyac, el botón activo recibe un brillo (box-shadow) y un borde sólido del color de la marca, mientras que los botones inactivos mantienen una opacidad reducida (`0.4`). Esto crea un contraste visual claro que guía al usuario.

```css
.filtro-btn.activo {
    opacity: 1 !important;
    border-color: var(--dracula-purple) !important;
    background-color: rgba(189, 147, 249, 0.15) !important;
    box-shadow: 0 0 20px rgba(189, 147, 249, 0.3) !important;
}
```

## 4. Persistencia con View Transitions

Si el usuario filtra por "Astro", navega a una lección y luego vuelve atrás, Astro intenta mantener el estado gracias al `transition:persist`. Sin embargo, para los filtros del Index, preferimos una recarga limpia para asegurar que el usuario vea siempre todo el catálogo al reingresar, a menos que implementemos una lógica de URL persistente.

> [!IMPORTANT]
> **Accesibilidad**: Al usar `pointer-events: none` en las tarjetas ocultas, nos aseguramos de que no puedan ser enfocadas con el tabulador ni clickeadas accidentalmente mientras están invisibles.

---

Ya dominamos el filtrado. Ahora analicemos la unidad básica de estas cuadrículas: la Tarjeta Horizontal.
