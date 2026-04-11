---
layout: ../../../layouts/LayoutCurso.astro
curso: astro
id_clase: estilos
---

# Estilos en Astro: Scoped vs Global

Astro ofrece dos formas de escribir CSS, cada una con un comportamiento diferente. Entender cuándo usar cada una es fundamental para que los estilos de tu proyecto no se mezclen de formas inesperadas.

---

## Estilos Scoped (por defecto)

Cuando escribes un `<style>` dentro de un componente `.astro`, los estilos son **automáticamente scoped**: solo afectan a los elementos de ese componente, y no pueden "escapar" hacia otros componentes.

```astro
<!-- TarjetaCurso.astro -->
<article class="tarjeta">
    <h3>Título</h3>
</article>

<style>
    /* Este .tarjeta SOLO aplica a este componente */
    .tarjeta {
        background: white;
        border-radius: 12px;
    }

    /* Este h3 SOLO afecta a los h3 dentro de este componente */
    h3 {
        color: #1e293b;
    }
</style>
```

Astro logra esto internamente agregando un atributo único a cada elemento:

```html
<!-- HTML resultante -->
<article class="tarjeta" data-astro-cid-abc123>
    <h3 data-astro-cid-abc123>Título</h3>
</article>

<style>
    .tarjeta[data-astro-cid-abc123] { background: white; }
    h3[data-astro-cid-abc123] { color: #1e293b; }
</style>
```

**Ventaja:** Nunca tienes conflictos de CSS entre componentes. Puedes usar el mismo nombre de clase en dos componentes diferentes sin problema.

---

## Estilos Globales con `is:global`

A veces necesitas que un estilo afecte a elementos fuera del componente. Por ejemplo, los estilos del contenido Markdown que Astro genera internamente.

Para eso usas la directiva `is:global`:

```astro
<style is:global>
    /* Este estilo afecta a TODA la página */
    .markdown-container h2 {
        color: var(--title-color);
    }

    body {
        overflow: hidden;
    }
</style>
```

> En `LayoutCurso.astro` se usa `is:global` para los estilos del contenido markdown porque ese HTML lo genera Astro, y los estilos scoped no pueden alcanzarlo.

---

## Variables CSS (Custom Properties)

Las variables CSS son valores reutilizables que puedes definir una vez y usar en todo el proyecto. Se definen en `:root` (el elemento raíz del documento) y se accede a ellas con `var()`.

```css
:root {
    --color-primario: #3b82f6;
    --bg-page: #f4f4f9;
    --text-main: #334155;
}

/* Uso en cualquier parte del CSS */
h1 {
    color: var(--color-primario);
}
body {
    background-color: var(--bg-page);
}
```

En Tyac, las variables están definidas en `Layout.astro` dentro de `:root`, lo que las hace disponibles en **toda la plataforma**:

```css
:root {
    --bg-page:      #f4f4f9;
    --text-main:    #334155;
    --header-bg:    #1e293b;
    --title-color:  #0f172a;
    --card-bg:      #ffffff;
    --border-color: #e2e8f0;
}
```

**Ventaja clave:** Si quieres cambiar el color de fondo de todo el sitio, cambias `--bg-page` en un solo lugar y se actualiza en todos lados automáticamente.

---

## `:global()` dentro de estilos scoped

Hay una tercera opción: usar `:global()` para "romper el scope" de forma puntual, sin declarar todo el bloque como global:

```astro
<style>
    /* Scoped: solo afecta a este componente */
    .sidebar-curso {
        width: 320px;
    }

    /* Global puntual: afecta al .sidebar-curso en cualquier parte */
    :global(html.dark) .sidebar-curso {
        background: #1e293b;
    }
</style>
```

Esto es exactamente lo que hace `SidebarCurso.astro` para el modo oscuro.

---

## Fuentes externas (Google Fonts)

Para cargar fuentes externas, se añaden los `<link>` en el `<head>` del layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
```

Y luego se aplica con CSS:

```css
body {
    font-family: 'Inter', system-ui, sans-serif;
}
```

El `system-ui` es el respaldo: si Inter no carga, el navegador usa la fuente del sistema.

---

## Resumen de decisión

| Situación | Solución |
| --- | --- |
| Estilos de un componente específico | `<style>` normal (scoped automático) |
| Estilos que afectan contenido generado (Markdown) | `<style is:global>` |
| Un selector global dentro de un bloque scoped | `:global(.clase)` |
| Colores compartidos en todo el sitio | Variables CSS en `:root` |
| Fuente tipográfica global | `<link>` en el `<head>` del layout |
