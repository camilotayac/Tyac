---
layout: ../../../layouts/LayoutCurso.astro
curso: astro
id_clase: markdown
titulo: "Markdown Nativo"
descripcion: "Cómo gestionar contenido educativo usando archivos .md."
materia: "Tecnología"
---

# Markdown en Astro

Astro tiene soporte nativo para Markdown. Puedes crear archivos `.md` dentro de `src/pages/` y automáticamente se convierten en páginas HTML, sin necesidad de configuración adicional.

---

## ¿Qué es Markdown?

Markdown es un lenguaje de marcado ligero que te permite escribir texto con formato usando símbolos simples. Astro lo convierte en HTML al hacer el build.

```md
# Esto se convierte en <h1>
## Esto en <h2>

**Negrita**  →  <strong>
*Cursiva*    →  <em>
`código`     →  <code>

- Lista
- de items

[Enlace](https://tyac.com)  →  <a href="...">
```

> Todas las lecciones de Tyac están escritas en Markdown y Astro las convierte en HTML automáticamente.

---

## El Frontmatter del Markdown

Al inicio de cada archivo `.md` puedes incluir un bloque de metadatos entre `---`. Se llama **frontmatter** y usa la sintaxis YAML.

```md
---
layout: ../../layouts/LayoutCurso.astro
curso: astro
id_clase: markdown
titulo: Mi lección
autor: Camilo Tayac
---

# Contenido de la lección
```

Astro lee estos metadatos y los pasa al layout como el objeto `frontmatter`. En `LayoutCurso.astro` usas esto para saber a qué curso pertenece la lección y calcular la navegación.

---

## Conectar un layout desde un `.md`

El campo `layout:` del frontmatter le dice a Astro qué layout usar para envolver el contenido:

```md
---
layout: ../../layouts/LayoutCurso.astro
---
```

La ruta es **relativa** al archivo `.md`. Desde `src/pages/astro/markdown.md`, hay que subir dos niveles (`../../`) para llegar a `src/layouts/`.

---

## Markdown enriquecido: tablas, citas y código

Astro soporta el Markdown extendido (GFM — GitHub Flavored Markdown):

**Tablas:**
```md
| Columna 1 | Columna 2 |
| --- | --- |
| Valor A   | Valor B   |
```

**Citas (blockquote):**
```md
> Esto es una cita o nota importante.
```

**Bloques de código con resaltado de sintaxis:**
````md
```javascript
const saludo = "Hola Tyac";
console.log(saludo);
```
````

**Código inline:**
```md
Usa el método `Array.map()` para iterar.
```

---

## Importar archivos Markdown como datos

También puedes importar archivos `.md` en un componente `.astro` para leer su frontmatter o contenido, sin renderizarlos directamente:

```astro
---
// Importamos el markdown como un módulo
import * as leccion from './introduccion.md';

// Accedemos a su frontmatter
const { titulo, curso } = leccion.frontmatter;
---

<p>Título de la lección: {titulo}</p>
```

Esto es útil para crear índices o listados de contenido dinámicamente.

---

## MDX: Markdown + Componentes

Si en el futuro necesitas usar componentes Astro dentro del markdown (como un gráfico interactivo o una animación), existe `.mdx`:

```mdx
---
layout: ../../layouts/LayoutCurso.astro
---

import GraficoInteractivo from '../../components/Grafico.astro';

# Mi Lección

Aquí el texto normal...

<GraficoInteractivo datos={[1, 2, 3]} />

Y aquí más texto.
```

> Para usar MDX en Astro se necesita instalar la integración `@astrojs/mdx`. Por ahora en Tyac usamos `.md` estándar, que es suficiente para contenido educativo.
