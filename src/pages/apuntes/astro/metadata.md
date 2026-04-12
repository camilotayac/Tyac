---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "HTML & Metadata: Anatomía de Metadata.astro"
materia: "Astro"
curso: "astro"
id_clase: "metadata"
---

# HTML & Metadata: El origen de todo

Cada página de Tyac, desde la landing hasta el reproductor de video, comparte un conjunto de reglas invisibles pero vitales: los **Metadatos**. En Tyac, no los escribimos en cada página; los centralizamos en un componente llamado `Metadata.astro`.

## 1. Por qué centralizar los Metadatos?

Imagina que mañana Tyac cambia su dominio o su logo de redes sociales. Si el `<head>` estuviera en cada archivo, tendríamos que editar cientos de páginas. Al usar un componente, lo hacemos en un solo lugar.

## 2. Anatomía de `Metadata.astro` en Tyac

Este componente se encuentra en `src/layouts/head/01-Metadata.astro`. Su estructura base es:

```astro
---
// 01-Metadata.astro
interface Props {
  title: string;
  description?: string;
}
const { title, description = "Aprende con Tyac" } = Astro.props;
---
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
<meta name="description" content={description} />
```

## 3. SEO Dinámico

En Tyac, el título de la pestaña cambia automáticamente según la lección. Por ejemplo, si estás en "Átomos", el layout le pasa ese título a `Metadata.astro`, y este se encarga de inyectarlo en el HTML final.

> [!IMPORTANT]
> **Rendimiento Tip**: Astro genera estos metadatos en el servidor. Cuando el usuario llega a Tyac, Google ya puede ver el título y la descripción correctos sin esperar a que cargue JavaScript.

---

Ahora que tenemos el "rostro" configurado, pasemos a construir el "cuerpo" de la web: El Layout Maestro.
