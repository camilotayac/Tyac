---
layout: ../../../layouts/LayoutVertical.astro
curso: astro
id_clase: rutas
titulo: "Sistema de Rutas"
descripcion: "Enrutamiento basado en el sistema de archivos de Astro."
materia: "Tecnología"
---

# Sistema de rutas en Astro

Astro usa un sistema de rutas **basado en archivos**. Esto significa que no tienes que configurar rutas manualmente: la URL de una página la determina directamente la ubicación del archivo dentro de `src/pages/`.

---

## La regla básica

```
src/pages/[archivo]  →  URL en el navegador
```

| Archivo | URL |
| --- | --- |
| `src/pages/index.astro` | `/` |
| `src/pages/cursos.astro` | `/cursos` |
| `src/pages/sobre-nosotros.astro` | `/sobre-nosotros` |
| `src/pages/astro/introduccion.md` | `/astro/introduccion` |
| `src/pages/conjuntos/proposicion.md` | `/conjuntos/proposicion` |

> Las subcarpetas crean segmentos en la URL. No necesitas configurar nada.

---

## Tipos de páginas soportadas

Astro acepta varios formatos de archivo como páginas:

| Extensión | Descripción |
| --- | --- |
| `.astro` | Componente Astro completo (lógica + template) |
| `.md` | Markdown — ideal para contenido como lecciones |
| `.mdx` | Markdown con componentes — markdown + JSX |
| `.html` | HTML puro |

En Tyac usamos `.astro` para páginas con lógica (index) y `.md` para el contenido de las lecciones.

---

## `index.astro` es especial

El archivo `index.astro` dentro de cualquier carpeta representa la raíz de esa carpeta:

```
pages/index.astro           →  /
pages/astro/index.astro     →  /astro
pages/conjuntos/index.astro →  /conjuntos
```

---

## Rutas dinámicas

Hasta ahora vimos rutas **estáticas** (URLs fijas). Astro también soporta rutas **dinámicas**: páginas que se generan a partir de datos.

Se crean usando corchetes en el nombre del archivo:

```
src/pages/curso/[id].astro  →  /curso/cualquier-cosa
```

Dentro del archivo puedes obtener ese valor dinámico:

```astro
---
// La URL es /curso/conjuntos
const { id } = Astro.params;
// id === "conjuntos"
---

<h1>Mostrando el curso: {id}</h1>
```

Para que funcionen en modo estático, debes decirle a Astro qué páginas generar usando `getStaticPaths()`:

```astro
---
export function getStaticPaths() {
    return [
        { params: { id: "conjuntos" } },
        { params: { id: "astro" } },
        { params: { id: "quimica" } },
    ];
}

const { id } = Astro.params;
---

<h1>Curso: {id}</h1>
```

> En Tyac usamos rutas estáticas por ahora (un archivo `.md` por lección), lo cual es más simple y directo.

---

## El archivo `404.astro`

Si creas `src/pages/404.astro`, Astro lo usa automáticamente cuando alguien visita una URL que no existe:

```astro
---
// src/pages/404.astro
---
<h1>Página no encontrada</h1>
<a href="/">Volver al inicio</a>
```

---

## Resumen del sistema de rutas

```
¿Quieres una página en /cursos?
  → Crea src/pages/cursos.astro

¿Quieres una lección en /astro/introduccion?
  → Crea src/pages/astro/introduccion.md

¿Quieres algo dinámico como /usuario/camilo?
  → Crea src/pages/usuario/[nombre].astro
```

El sistema de archivos **es** el sistema de rutas. Sin configuración, sin confusión.
