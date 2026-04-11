---
layout: ../../../layouts/LayoutVertical.astro
curso: astro
id_clase: introduccion
titulo: "¿Qué es Astro y por qué usarlo?"
descripcion: "Descubre las ventajas de Astro: velocidad extrema y Zero JavaScript por defecto."
materia: "Tecnología"
---

# ¿Qué es Astro y por qué usarlo?

Astro es un **framework web moderno** diseñado para construir sitios rápidos orientados principalmente a contenido: blogs, portafolios, documentación y plataformas educativas como Tyac.

Su característica más importante es algo que llaman **"Zero JavaScript by default"**: a diferencia de otros frameworks, Astro **no envía JavaScript al navegador** a menos que tú lo pidas explícitamente. El resultado es un sitio extremadamente rápido.

---

## ¿Cómo funciona?

Astro trabaja como un **compilador**. Tú escribes tus páginas usando su propio formato (`.astro`), y Astro las convierte en HTML puro en el momento del build.

El proceso es así:

```
Tu código .astro  →  Astro compila  →  HTML estático  →  Navegador
```

El navegador recibe HTML limpio, sin frameworks, sin bundles pesados. Solo la página.

---

## Comparación con otros frameworks

| Framework | Envía al navegador | Ideal para |
| --- | --- | --- |
| **Astro** | Solo HTML (0 JS por defecto) | Contenido estático, blogs, docs |
| React / Vue | JavaScript pesado | Aplicaciones interactivas complejas |
| Next.js | React + JS | Apps con servidor + contenido |

> **Regla práctica:** Si la página no necesita mucha interactividad (como esta plataforma), Astro es la mejor elección.

---

## Las ventajas principales

**1. Velocidad extrema**
Al no enviar JavaScript innecesario, las páginas cargan casi instantáneamente. Google premia esto con mejor posicionamiento en buscadores.

**2. Usa la sintaxis que ya conoces**
Dentro de Astro puedes usar Markdown, HTML normal y CSS. No necesitas aprender un sistema de templates extraño.

**3. Islas de interactividad**
Si en algún momento necesitas un componente interactivo (un contador, un formulario), puedes agregarlo puntualmente. Astro llama a esto **"Islas"** (*Island Architecture*).

**4. Archivos Markdown de primera clase**
Escribe contenido en `.md` y Astro lo convierte en páginas automáticamente. Así funciona toda la sección de lecciones de Tyac.

**5. Rutas basadas en archivos**
No necesitas configurar rutas manualmente. Si creas `src/pages/cursos.astro`, automáticamente existe la URL `/cursos`.

---

## ¿Qué estás usando en Tyac?

Este mismo sitio que estás viendo **está construido con Astro**. Las lecciones son archivos `.md`, los layouts son componentes `.astro`, y las rutas se generan solas a partir de la estructura de carpetas.

Conforme avances en este curso, vas a entender exactamente cómo funciona cada parte de Tyac.
