---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Frontmatter: Configuración y metadatos de lecciones en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "frontmatter"
---

# Frontmatter: Configuración de lecciones

El **Frontmatter** es el bloque de texto en formato YAML encerrado entre líneas `---` al principio de cada archivo Markdown. En Tyac, este bloque es el "panel de control" de la lección; sin él, Astro no sabría qué layout usar ni qué información mostrar en la barra superior.

## 1. Los Campos Obligatorios en Tyac

Para que un apunte de Tyac sea válido y se integre en el sistema, debe tener estos campos:

- **`layout`**: Ruta al componente de layout (generalmente `00-LayoutLessons.astro`).
- **`titulo`**: El nombre que aparecerá en la cabecera.
- **`materia`**: Define el icono y el color de acento.
- **`id_clase`**: Debe coincidir con el ID definido en `temarios.js` para que la navegación funcione.

## 2. Metadatos Opcionales

Podemos añadir campos extra que el layout leerá dinámicamente:
- **`dificultad`**: "Fácil", "Intermedio" o "Avanzado" para mostrar el nivel de estrella.
- **`updated_at`**: Para mostrar la fecha de la última actualización.
- **`description`**: Para mejorar el SEO individual de la lección.

## 3. Cómo Astro procesa esta información

Lo maravilloso del Frontmatter es que Astro lo convierte automáticamente en un objeto llamado `frontmatter` disponible dentro del Layout. De esta forma, el layout puede "leer la mente" del archivo Markdown:

```astro
---
// 00-LayoutLessons.astro
const { frontmatter } = Astro.props;
---
<h1>{frontmatter.titulo}</h1>
<p>Nivel: {frontmatter.dificultad}</p>
```

## 4. Consistencia es la clave

En Tyac, el Frontmatter actúa como una **Interface**. Si todos los archivos Markdown siguen la misma estructura de cabecera, podemos estar tranquilos de que todas las lecciones se verán y funcionarán de manera idéntica.

> [!TIP]
> **Dato Técnico**: El Frontmatter es procesado por el servidor. Esto significa que estos datos se utilizan para generar los Meta Tags de Google antes de que el usuario siquiera vea la página.

---

Una vez configurada la cabecera, entremos en el contenido técnico. En la siguiente guía, desvelaremos cómo logramos nuestro impactante resaltado de código.
