---
layout: ../../../layouts/LayoutCurso.astro
curso: astro
id_clase: props
titulo: "Props y Astro.props"
descripcion: "Cómo pasar datos dinámicos entre componentes y layouts."
materia: "Tecnología"
---

# Props y `Astro.props`

Cuando creas un componente o layout en Astro, a veces necesitas que la página que lo usa le **envíe información**. Por ejemplo, el título de la página, o el nombre del autor.

Esa información viaja a través de los **props** (abreviatura de *properties* — propiedades).

`Astro.props` es el objeto que **contiene todo lo que le enviaron** a tu componente desde afuera.

---

## El problema que resuelve

Imagina que tienes un layout que se usa en 10 páginas diferentes. Cada página necesita un título diferente en la pestaña del navegador.

Sin props, tendrías que escribir el título **dentro** del layout y sería igual para todas:

```html
<title>Tyac</title>  <!-- Siempre el mismo, sin importar la página -->
```

Con props, cada página le **pasa su propio título** al layout:

```astro
<!-- En index.astro -->
<Layout titulo="Inicio - Tyac">...</Layout>

<!-- En otra página -->
<Layout titulo="Conjuntos - Tyac">...</Layout>
```

Y el layout lo recibe y lo usa:

```astro
---
const { titulo } = Astro.props;
---
<title>{titulo}</title>
```

---

## La sintaxis explicada

```astro
const { titulo, frontmatter } = Astro.props;
```

Esto usa **desestructuración** de JavaScript. Es equivalente a escribir:

```js
const titulo      = Astro.props.titulo;
const frontmatter = Astro.props.frontmatter;
```

Solo es una forma más corta de extraer valores de un objeto.

---

## Definir qué props acepta un componente

Es buena práctica declarar explícitamente los props con su tipo. Astro usa TypeScript para esto:

```astro
---
// Declaramos la "firma" de los props
interface Props {
    titulo: string;
    descripcion?: string;  // El "?" significa que es opcional
    icono: string;
}

// Los extraemos de Astro.props
const { titulo, descripcion = "Sin descripción", icono } = Astro.props;
//                          ↑ Valor por defecto si no se pasa
---
```

En Tyac, `SidebarCurso.astro` hace exactamente esto:

```astro
export interface Props {
    claseActualId?: string;
    cursoActualId: string;
    lecciones?: Leccion[];
}
```

---

## ¿Qué es `frontmatter`?

`frontmatter` es especial. Aparece cuando un archivo `.md` usa este layout directamente.

Cuando escribes un archivo Markdown así:

```md
---
layout: ../../layouts/Layout.astro
titulo: Mi Lección
---
```

Astro convierte ese bloque `---` en un objeto llamado `frontmatter` y se lo manda al layout automáticamente. Puedes acceder a toda esa información:

```astro
---
const { frontmatter } = Astro.props;
---

<h1>{frontmatter.titulo}</h1>     <!-- "Mi Lección" -->
<p>Curso: {frontmatter.curso}</p> <!-- el valor de "curso:" en el .md -->
```

---

## La línea completa de tu proyecto

```astro
const tituloFinal = titulo || frontmatter?.titulo || "Tyac";
```

Esta línea elige el título con este orden de prioridad:

| Prioridad | Origen | Cuándo ocurre |
| :---: | --- | --- |
| 1° | `titulo` | Cuando una página `.astro` pasa `<Layout titulo="...">` |
| 2° | `frontmatter.titulo` | Cuando un `.md` define `titulo:` en su encabezado |
| 3° | `"Tyac"` | Cuando no se pasa ningún título (valor por defecto) |

> El símbolo `?` en `frontmatter?.titulo` es el **operador de encadenamiento opcional**. Significa: *"si `frontmatter` existe, dame `.titulo`; si no existe, no rompas la página, solo devuelve `undefined`"*.
