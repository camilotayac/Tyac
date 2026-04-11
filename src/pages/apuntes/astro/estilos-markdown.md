---
layout: ../../../layouts/LayoutVertical.astro
curso: astro
id_clase: estilos-markdown
titulo: "Estilismo de Markdown"
descripcion: "Personaliza la apariencia de tus lecciones con CSS específico."
materia: "Tecnología"
---

# Cómo personalizar el estilo del Markdown

Una de las preguntas más comunes es cómo cambiar la apariencia del contenido que escribes en Markdown (colores, fuentes, bloques de código, etc.). En Tyac, esto se controla desde los **Layouts** usando **CSS Global**.

---

## 🎨 1. Cambiar la paleta de colores (Variables CSS)

La forma más rápida de cambiar el estilo de todo el sitio y del Markdown es modificando las variables en `src/layouts/Layout.astro`. 

Busca el bloque `:root` y cambia los valores:

```css
:root {
    --bg-page:      #f4f4f9; /* Color de fondo */
    --text-main:    #334155; /* Color del texto */
    --markdown-titulo:  #0f172a; /* Color de los títulos */
    --markdown-texto:   #334155; /* Color del texto del párrafo */
    --code-bg:      #e2e8f0; /* Fondo del código pequeño */
    --code-text:    #be123c; /* Color del código pequeño */
}
```

Si cambias estos valores, **todo el Markdown se actualizará automáticamente** porque ya está configurado para usar estas variables.

---

## 💻 2. Personalizar el Código (Sintaxis)

En Astro, el código en Markdown se divide en dos tipos:

### Código en línea (Inline Code)
Es el que escribes entre una sola comilla simple: `` `código` ``. 
Para cambiarlo, edita el estilo de `.markdown-container code` en `LayoutVertical.astro`.

### Bloques de código (Code Blocks)
Es el que escribes entre tres comillas simples: 
````md
```javascript
console.log("Hola");
```
````

Astro usa **Shiki** por defecto para el resaltado de colores. Si quieres cambiar el tema (por ejemplo, a uno oscuro como Dracula o GitHub Dark), debes ir a `astro.config.mjs`:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula', // Cambia 'github-dark', 'nord', etc.
    },
  },
});
```

---

## 🛠️ 3. Personalizar elementos específicos

Si quieres cambiar cómo se ve una tabla o una cita (`blockquote`), debes ir a la sección `<style is:global>` de tu layout.

Por ejemplo, para cambiar el color de la barra lateral de las citas:

```css
/* Dentro de LayoutVertical.astro */
.markdown-container blockquote {
    border-left: 5px solid #ff5733; /* Cambia el púrpura por naranja */
    background-color: #fff5f0;      /* Un fondo más cálido */
}
```

---

## 📝 Resumen: ¿Dónde toco cada cosa?

1.  **Colores generales:** Edita `:root` en `Layout.astro`.
2.  **Fuentes y tamaños:** Edita `.markdown-container` en `Layout.astro`.
3.  **Temas de código (colores de las letras):** Edita `astro.config.mjs`.
4.  **Diseño del código (bordes, padding):** Edita el CSS de `code` y `pre` en el layout.

---

### Ejercicio para ti:
Prueba cambiar el color de `--markdown-titulo` en `tokens.css` a un púrpura profundo (`#4a0e66`) y verás cómo todos los títulos de tus lecciones cambian al instante.
