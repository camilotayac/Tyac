---
layout: ../../../layouts/LayoutVertical.astro
curso: astro
id_clase: componentes
titulo: "Componentes .astro"
descripcion: "Estructura base y anatomía de los archivos de Astro."
materia: "Tecnología"
---

# Componentes `.astro`: la sintaxis base

Todo archivo `.astro` tiene la misma estructura: dos secciones separadas por `---`. Una para la lógica (JavaScript), y otra para el template (HTML).

---

## La anatomía de un componente

```astro
---
// SECCIÓN 1: FRONTMATTER (lógica JavaScript)
// Todo lo que escribas aquí se ejecuta en el SERVIDOR,
// antes de que la página se envíe al navegador.

const nombre = "Tyac";
const año = new Date().getFullYear();
---

<!-- SECCIÓN 2: TEMPLATE (HTML + expresiones) -->
<h1>Bienvenido a {nombre}</h1>
<p>Año actual: {año}</p>
```

> Las llaves `{ }` dentro del HTML son como "ventanas" al JavaScript del frontmatter. Dentro de ellas puedes poner cualquier expresión de JS.

---

## El Frontmatter: JavaScript del servidor

Todo el código entre los `---` se ejecuta **en el momento del build**, no en el navegador del usuario. Puedes:

- Importar componentes y datos
- Hacer cálculos
- Leer archivos
- Declarar variables

```astro
---
import MiComponente from './MiComponente.astro';
import { datos } from '../data/datos.js';

const lista = datos.filter(item => item.activo);
const titulo = "Mi Página";
---
```

Lo que **no puedes** hacer aquí: escuchar eventos del usuario, usar `document`, o hacer cosas que dependan del navegador. Para eso existe `<script>`.

---

## El Template: HTML con superpoderes

La parte de abajo es HTML estándar, pero con tres mejoras importantes:

**1. Expresiones con `{ }`**
```astro
<p>El año es {new Date().getFullYear()}</p>
<img src={imagenUrl} alt={descripcion} />
```

**2. Condicionales**
```astro
{esAdmin && <button>Eliminar</button>}

{logueado ? (
    <p>Bienvenido de vuelta</p>
) : (
    <p>Por favor inicia sesión</p>
)}
```

**3. Listas con `.map()`**
```astro
<ul>
    {frutas.map((fruta) => (
        <li>{fruta}</li>
    ))}
</ul>
```

---

## Estilos dentro del componente

Puedes escribir CSS directamente en el archivo `.astro`. Lo especial es que ese CSS es **automáticamente scoped**: solo afecta a este componente, nunca a otros.

```astro
---
// frontmatter...
---

<h1 class="titulo">Hola</h1>

<style>
    /* Este estilo SOLO afecta al h1 de ESTE componente */
    .titulo {
        color: #8e1dc1;
        font-size: 2rem;
    }
</style>
```

Astro lo logra agregando automáticamente un atributo único a tus elementos (como `data-astro-cid-xyz`), de modo que los estilos nunca se "filtran" hacia afuera.

---

## Un componente completo de ejemplo

Así luce `TarjetaCurso.astro` de forma simplificada:

```astro
---
// Recibimos datos desde quien usa el componente
const { titulo, descripcion, icono } = Astro.props;
---

<article class="tarjeta">
    <div class="icono">{icono}</div>
    <h3>{titulo}</h3>
    <p>{descripcion}</p>
</article>

<style>
    .tarjeta {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
    }
</style>
```

Y se usa desde otra página así:

```astro
---
import TarjetaCurso from '../components/TarjetaCurso.astro';
---

<TarjetaCurso
    titulo="Matemáticas"
    descripcion="Aprende conjuntos."
    icono="🔢"
/>
```

---

## Resumen

| Sección | Delimitado por | Se ejecuta en | Puede hacer |
| --- | --- | --- | --- |
| Frontmatter | `--- ... ---` | Servidor (build) | Imports, lógica, cálculos |
| Template | Debajo de `---` | Genera HTML estático | HTML, `{}`, `.map()`, condicionales |
| `<style>` | `<style>` tag | Compilado | CSS scoped automáticamente |
| `<script>` | `<script>` tag | Navegador | Interactividad del usuario |
