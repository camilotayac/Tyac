---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "La Carpeta Data: El cerebro de Tyac"
materia: "Astro"
curso: "astro"
id_clase: "data-brain"
---

# La Carpeta Data: El cerebro de Tyac

En el desarrollo web tradicional, mucha gente escribe el contenido directamente en el HTML. Esto es un error grave si quieres escalar. En Tyac, hemos separado el **Contenido** de la **Presentación** usando la carpeta `src/data/`.

## 1. Por qué no escribir contenido en los componentes?

Si escribes la lista de lecciones dentro del archivo de la barra lateral, y luego necesitas esa misma lista en la página de inicio, tendrías que copiar y pegar el código. Si cambias un título, tendrías que cambiarlo en dos lugares. Esto se llama "Código Sucio".

## 2. Los Archivos Maestros de Tyac

En `src/data/` guardamos archivos `.js` que exportan arrays de objetos. Por ejemplo:

### `temarios.js`
Es la fuente de verdad para todas las lecciones de la plataforma. Controla el ID, el título y la dificultad.

```javascript
export const todosLosTemarios = {
  astro: [
    { id: "introduccion", titulo: "1. El origen...", dificultad: "Fácil" },
    ...
  ]
};
```

### `cursos.js`
Define los metadatos de las materias: sus iconos, número de lecciones y descripciones.

## 3. Consumo Dinámico

En cualquier componente de Tyac, podemos importar estos datos y usarlos para generar la UI. Si mañana añadimos un curso nuevo al array en `src/data/cursos.js`, **toda la web se actualizará automáticamente**: aparecerá en el Index, en el buscador y en los filtros sin que toquemos ningún otro archivo.

> [!IMPORTANT]
> **Separación de Concernimientos**: Los desarrolladores manejan los layouts, pero los expertos en contenido solo necesitan editar los archivos de la carpeta `data/`.

---

Hemos terminado el Módulo 1. Ahora que Tyac tiene estructura y cerebro, vamos a diseñar la zona de mayor impacto: La Landing Page y su Hero.
