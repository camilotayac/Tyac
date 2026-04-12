---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Breadcrumbs: Guía de navegación dinámica en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "breadcrumbs-nav"
---

# Breadcrumbs: Guía de navegación

Los **Breadcrumbs** (o Migas de Pan) son una herramienta de orientación vital en Tyac. Permiten que el estudiante sepa exactamente en qué nivel de la jerarquía educativa se encuentra y le ofrecen un camino rápido para volver atrás.

## 1. Estructura Jerárquica

En Tyac, los breadcrumbs siempre siguen este camino lógico:
`Inicio > Materia > Tema actual`

Esto refuerza la estructura mental del usuario, recordándole que el tema que está leyendo pertenece a una materia más grande.

## 2. Generación Dinámica en Astro

No escribimos los nombres a mano. El componente `Breadcrumbs.astro` recibe las props de la lección actual y genera los enlaces:

```astro
---
const { materia, titulo } = Astro.props;
---
<nav class="breadcrumbs">
  <a href="/">Inicio</a>
  <span class="separator">/</span>
  <a href={`/apuntes/${materia.toLowerCase()}`}>{materia}</a>
  <span class="separator">/</span>
  <span class="current">{titulo}</span>
</nav>
```

## 3. Estética Minimalista

En Tyac, los breadcrumbs son sutiles. Usamos un color gris suave (`--clr-white-soft` con opacidad reducida) para que no compitan visualmente con el título de la lección, pero que sean fácilmente legibles cuando el usuario los busca deliberadamente.

## 4. Accesibilidad y SEO

- **Aria-label**: El componente usa `aria-label="Breadcrumb"` para que los lectores de pantalla entiendan su función.
- **Rastro de Google**: Los motores de búsqueda detectan esta estructura y la muestran en los resultados de búsqueda, mejorando la presencia de Tyac en internet.

> [!IMPORTANT]
> **Detalle Tyac**: El último elemento de la miga de pan (el tema actual) no es un enlace. Esto evita que el usuario haga clic por error en la página donde ya se encuentra, ahorrando recargas innecesarias.

---

Complementando al mapa tenemos el flujo. En la siguiente guía: Paginación y la lógica de secuencia (Siguiente/Anterior).
