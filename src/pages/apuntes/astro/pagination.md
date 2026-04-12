---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Paginación: Lógica de secuencia (Siguiente y Anterior) en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "pagination"
---

# Paginación: Lógica de secuencia

La **Paginación** en Tyac es el motor que impulsa el flujo de aprendizaje. Al final de cada lección, presentamos dos botones claros: "Anterior" y "Siguiente". Esta pieza de ingeniería asegura que el estudiante pueda progresar de forma lineal por el temario sin tener que volver al menú principal.

## 1. El desafío del orden

Como Tyac genera páginas dinámicamente, cada página es independiente. Para saber cuál es la lección anterior o posterior, realizamos un cálculo matemático en el Layout comparando el ID actual con el array de `temarios.js`.

## 2. Cálculo de Índices

En el servidor, obtenemos el índice de la lección actual:

```javascript
const currentIndex = lecciones.findIndex(l => l.id === idActual);
const prevLeccion = lecciones[currentIndex - 1];
const nextLeccion = lecciones[currentIndex + 1];
```

Si estamos en la primera lección, el botón "Anterior" se oculta. Si estamos en la última, el botón "Siguiente" puede cambiar a un mensaje de "¡Curso Finalizado!".

## 3. Experiencia Visual (Cards de Navegación)

En Tyac, estos no son simples botones. Son pequeñas tarjetas que muestran el título de la siguiente lección. Esto genera curiosidad y reduce la fricción, ya que el estudiante sabe qué viene a continuación.

## 4. Rapidez con View Transitions

Al hacer clic en "Siguiente", la transición es instantánea. Como el Layout es persistente, solo cambia el contenido central del apunte, dando la sensación de que estás pasando las páginas de un libro digital perfectamente orquestado.

> [!TIP]
> **UX Avanzada**: Hemos diseñado los botones para que ocupen todo el ancho en móviles, facilitando el avance con una sola mano mientras se estudia en movimiento.

---

Hemos terminado el Módulo 8. Ya tenemos una UI maestra. Ahora, pasemos a la fase de auditoría técnica: Pulido, Producción y SEO.
