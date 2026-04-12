---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Debugging: Resolviendo el ciclo de vida de Astro en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "debugging"
---

# Debugging: El ciclo de vida de Astro

Durante la construcción de Tyac, nos enfrentamos a desafíos técnicos que requirieron entender a fondo cómo funciona Astro. El error más común ocurre al intentar usar JavaScript en el navegador ocultando scripts que Astro cree que solo deben existir en el servidor.

## 1. El misterio del Servidor vs Cliente

Astro ejecuta todo su código entre las líneas `---` solo una vez: cuando construye la página. Ese código **nunca llega al navegador**. Si intentas usar `document` o `window` ahí dentro, Tyac fallará.

- **Servidor (Build)**: Fetch de datos, lectura de Markdown, generación de HTML.
- **Cliente (Navegador)**: Eventos de clic, apertura de modales, búsqueda live.

## 2. Depurando el Buscador

El buscador de Tyac fue el componente más difícil de depurar. Como usamos **View Transitions**, el navegador no recarga los scripts al navegar. Tuvimos que aprender a usar el evento `astro:page-load` para asegurar que los botones de apertura del buscador sigan funcionando tras cambiar de lección.

## 3. Herramientas de diagnóstico

En Tyac usamos tres niveles de depuración:
- **Consola del Servidor (Terminal)**: Para ver errores de rutas y carga de datos.
- **Chrome DevTools (Consola)**: Para inspeccionar errores de JavaScript en el buscador.
- **Astro Dev Toolbar (Navegador)**: La pequeña barra inferior de Astro que nos ayuda a inspeccionar las islas y los componentes de una forma visual.

## 4. El "Error de Tipado" en Layouts

¿Recuerdas cuando las lecciones no querían compilar porque no encontraban la propiedad `dificultad`? Lo depuramos usando TypeScript de forma estricta, lo que nos obligó a definir interfaces claras para nuestros datos. Esto salvó a Tyac de fallos catastróficos durante el despliegue.

> [!TIP]
> **Consejo Senior**: El 90% de los errores en Tyac se resuelven reiniciando el servidor de desarrollo (`npm run dev`) para limpiar la caché o revisando que no estemos intentando usar APIs del navegador en el script del servidor.

---

Hemos superado miles de líneas de código y decenas de desafíos. Es hora de mirar atrás. En la siguiente guía: Repaso del camino recorrido.
