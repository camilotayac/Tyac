---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Diseño Premium: Palette y Transitions en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "estilos"
---

# Diseño Premium: Palette y Transitions

La identidad visual de Tyac no es casualidad. Hemos construido un sistema de diseño basado en **Tokens de Color** y **Transiciones Fluidas** para que la plataforma se sienta coherente y profesional en cada rincón.

## El corazón del color: `palette.css`

En Tyac, evitamos definir colores de forma aleatoria. Todo nace en `src/styles/colors/palette.css`. Aquí definimos variables semánticas:

```css
:root {
  --clr-black-01: #0a0b10; /* Fondos profundos */
  --dracula-purple: #bd93f9; /* Color de acento principal */
  --dracula-cyan: #8be9fd; /* Para dificultad y detalles técnicos */
}
```

Al usar estas variables, si mañana queremos cambiar el tono de morado de Tyac, solo lo editamos en un lugar y toda la web (botones, bordes, iconos, sombras) se actualizará al instante.

## View Transitions: Magia en Tyac

Una de las características más amadas de Tyac es cómo "vuela" entre páginas. Usamos el componente `<ClientRouter />` de Astro para habilitar las **View Transitions**.

### Cómo lo aplicamos:
1.  **Directiva `transition:persist`**: La usamos en el Navbar y en el reproductor de video para que no se reinicien cuando cambias de lección.
2.  **Animaciones de página**: Al cambiar de tema, el contenido hace un sutil *fade-in* o un *slide*, eliminando el parpadeo blanco típico de la web antigua.

## Estilos Scoped vs Globales

- **Globales**: Se aplican a todo Tyac (como los colores base y la tipografía).
- **Scoped (Locales)**: Cada componente `.astro` en Tyac tiene su propio bloque `<style>`. Esto garantiza que los estilos de la "Tarjeta de Curso" no afecten por accidente al buscador.

---

En la última guía de estos apuntes, veremos cómo hemos personalizado el texto que estás leyendo ahora mismo.
