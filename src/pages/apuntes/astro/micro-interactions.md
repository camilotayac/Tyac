---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Micro-interacciones: Hover, focus y activos en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "micro-interactions"
---

# Micro-interacciones en Tyac

Las micro-interacciones son esos pequeños momentos en los que la interfaz de Tyac reconoce la presencia del usuario. No son solo adornos; sirven para dar **feedback**, indicando que un elemento es clickeable, está cargando o ha guardado un cambio.

## 1. El estado Hover (Flotación)

En Tyac, las tarjetas y botones nunca se quedan quietos al pasar el cursor. Usamos cambios sutiles en tres ejes:
- **Escala**: Un ligero agrandamiento (`scale(1.02)`).
- **Elevación**: Una sombra que crece (box-shadow).
- **Color**: El borde o el fondo se ilumina con el color de acento.

```css
.tarjeta:hover {
    transform: translateY(-4px) scale(1.01);
    border-color: var(--dracula-purple);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
```

## 2. El estado Focus (Accesibilidad)

Muchos usuarios navegan Tyac usando solo el teclado. Por eso, hemos blindado el estado `:focus-visible`. En lugar de dejar el borde azul genérico del navegador, aplicamos un "anillo" de color púrpura neón que hace que sea imposible perder de vista el elemento activo.

## 3. Estados Activos y de "Presión"

Al hacer clic en un botón, aplicamos un `transform: scale(0.95)`. Esta micro-interacción imita el mundo real, dando la sensación de que el botón es físico y se hunde bajo tu dedo/cursor. Es una respuesta táctil digital que mejora la satisfacción del usuario.

## 4. Transiciones de Curva (Bezier)

Para que estos movimientos no se sientan robóticos, usamos curvas de tiempo personalizadas (`cubic-bezier`). Esto hace que el movimiento empiece rápido y se suavice al final, imitando la inercia de los objetos reales.

> [!TIP]
> **Dato Maestro**: En Tyac, las micro-interacciones tienen un tiempo de respuesta de entre 150ms y 300ms. Más rápido se siente brusco, más lento se siente perezoso. Hemos encontrado el "punto dulce" de la fluidez cognitiva.

---

La fluidez de los elementos es genial, pero la fluidez entre páginas es magistral. En la siguiente guía: Transiciones de Vista y el poder de ClientRouter.
