---
layout: ../../../layouts/LayoutCurso.astro
curso: astro
id_clase: estructura
titulo: "Estructura de Proyecto"
descripcion: "Guía sobre la organización de carpetas y archivos en el framework."
materia: "Tecnología"
---

# Estructura de un proyecto Astro

Cuando creas un proyecto Astro, obtienes una carpeta con una estructura muy específica. Cada carpeta tiene un propósito claro y Astro la trata de forma especial.

---

## Vista general

```
mi-proyecto/
├── public/             ← Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/     ← Componentes reutilizables (.astro)
│   ├── layouts/        ← Esqueletos HTML que envuelven páginas
│   ├── pages/          ← Páginas del sitio (generan rutas automáticamente)
│   └── data/           ← Datos del proyecto (JS, JSON)
├── astro.config.mjs    ← Configuración de Astro
├── package.json        ← Dependencias del proyecto
└── tsconfig.json       ← Configuración de TypeScript
```

---

## `src/pages/` — El corazón del sitio

Esta es la carpeta más importante. **Cada archivo aquí se convierte en una página web.**

| Archivo | URL generada |
| --- | --- |
| `pages/index.astro` | `/` |
| `pages/cursos.astro` | `/cursos` |
| `pages/astro/introduccion.md` | `/astro/introduccion` |
| `pages/conjuntos/proposicion.md` | `/conjuntos/proposicion` |

> No necesitas configurar nada. El nombre del archivo **es** la ruta.

---

## `src/components/` — Piezas reutilizables

Aquí viven los componentes: bloques de HTML + CSS que puedes usar en múltiples páginas. En Tyac tienes:

- `TarjetaCurso.astro` → la tarjeta visual de cada curso
- `SidebarCurso.astro` → la barra lateral de navegación dentro de un curso

Si necesitas algo que se repite en más de un lugar, va aquí.

---

## `src/layouts/` — Esqueletos de página

Los layouts son componentes especiales que envuelven el contenido de las páginas. Definen la estructura compartida: el `<head>`, el header, el footer.

En Tyac tienes:

- `Layout.astro` → el esqueleto base de todo el sitio (header + variables CSS)
- `LayoutCurso.astro` → esqueleto para las lecciones (sidebar + área de contenido)

---

## `src/data/` — Datos del proyecto

Archivos JavaScript o JSON que guardan datos estructurados. En Tyac:

- `temarios.js` → la lista de todos los cursos y sus lecciones

Al no usar una base de datos todavía, este archivo actúa como la "fuente de verdad" del contenido.

---

## `public/` — Archivos que van directo al servidor

Todo lo que pongas en `public/` se sirve tal cual, sin que Astro lo procese. Úsalo para:

- Imágenes (`public/img/ejemplo.png` → accesible desde `/img/ejemplo.png`)
- Favicon (`public/favicon.ico`)
- Archivos PDF o fuentes locales

---

## `astro.config.mjs` — Configuración

Archivo donde configuras Astro: integraciones, modo de output, adaptadores de deploy, etc. Por ahora en Tyac está casi vacío porque el proyecto es simple.

---

## Resumen visual de Tyac

```
Tyac/
├── public/
│   └── img/            ← Imágenes de los cursos
├── src/
│   ├── components/
│   │   ├── TarjetaCurso.astro
│   │   └── SidebarCurso.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── LayoutCurso.astro
│   ├── pages/
│   │   ├── index.astro         → /
│   │   ├── astro/              → /astro/...
│   │   └── conjuntos/          → /conjuntos/...
│   └── data/
│       └── temarios.js
└── astro.config.mjs
```

Ahora que conoces la estructura, en la siguiente lección veremos cómo funciona la sintaxis de los archivos `.astro`.
