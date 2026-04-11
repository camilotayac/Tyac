---
layout: ../../../layouts/LayoutCurso.astro
curso: astro
id_clase: layouts
titulo: "Layouts y Slots"
descripcion: "Reutiliza esqueletos HTML para envolver tus páginas."
materia: "Tecnología"
---

# Layouts y `<slot />`

Un **layout** es un componente especial que actúa como el "esqueleto" de una página. Define las partes que se repiten en todas las páginas (header, footer, estilos globales) y deja un hueco para el contenido único de cada página.

Ese hueco se llama `<slot />`.

---

## ¿Por qué existen los layouts?

Sin layouts, cada página tendría que copiar el mismo HTML estructural:

```astro
<!-- Sin layouts: repites esto en CADA página -->
<!DOCTYPE html>
<html>
    <head>
        <title>Página 1</title>
        <link rel="stylesheet" ... />
    </head>
    <body>
        <header>...</header>
        <main>
            <!-- contenido único -->
        </main>
    </body>
</html>
```

Con un layout, escribes esa estructura **una sola vez** y las páginas solo pasan su contenido:

```astro
<!-- Página 1 -->
<Layout titulo="Página 1">
    <p>Contenido único de esta página.</p>
</Layout>
```

---

## Cómo funciona `<slot />`

El `<slot />` es el marcador de posición donde el layout inserta el contenido que le pasan.

**El layout define dónde va el contenido:**
```astro
<!-- Layout.astro -->
<body>
    <header>Logo Tyac</header>

    <main>
        <slot />  <!-- ← aquí se inyecta el contenido de la página -->
    </main>
</body>
```

**La página envía su contenido:**
```astro
<!-- index.astro -->
<Layout>
    <h1>Bienvenido</h1>    <!-- esto va al <slot /> -->
    <p>Hola mundo</p>      <!-- esto también -->
</Layout>
```

**El resultado HTML final:**
```html
<body>
    <header>Logo Tyac</header>
    <main>
        <h1>Bienvenido</h1>
        <p>Hola mundo</p>
    </main>
</body>
```

---

## Layouts anidados

Puedes usar un layout dentro de otro. Así funciona Tyac:

```
Layout.astro (base: header + estilos)
  └── LayoutCurso.astro (sidebar + área de contenido)
        └── proposicion.md (el contenido de la lección)
```

`LayoutCurso.astro` importa y usa `Layout.astro`:

```astro
---
import Layout from './Layout.astro';
---

<Layout titulo="Mi Lección - Tyac">
    <div class="contenedor-curso">
        <!-- sidebar -->
        <aside>...</aside>

        <!-- contenido de la lección -->
        <main>
            <slot />  ← aquí va el contenido del .md
        </main>
    </div>
</Layout>
```

---

## Layouts en archivos Markdown

Los archivos `.md` usan el layout de forma especial: lo declaran en su frontmatter.

```md
---
layout: ../../layouts/LayoutCurso.astro
curso: astro
id_clase: layouts
---

# Contenido de la lección...
```

Astro detecta el `layout:` y automáticamente envuelve el contenido del markdown con ese layout, pasando todo el frontmatter como props.

---

## Named slots (slots con nombre)

Si necesitas inyectar contenido en más de un lugar, puedes usar slots con nombre:

```astro
<!-- Layout con dos slots -->
<header>
    <slot name="navegacion" />  ← slot específico para nav
</header>
<main>
    <slot />                    ← slot principal (sin nombre)
</main>
```

```astro
<!-- Página usando ambos slots -->
<Layout>
    <nav slot="navegacion">...</nav>  ← va al slot "navegacion"
    <p>Contenido principal</p>        ← va al slot principal
</Layout>
```

> En Tyac no usamos named slots por ahora, pero es útil saberlos para cuando el proyecto crezca.
