---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Auditoría Responsiva: Tyac en Móviles"
materia: "Astro"
curso: "astro"
id_clase: "responsive-audit"
---

# Auditoría Responsiva: Tyac en Móviles

En el desarrollo de Tyac, seguimos la filosofía **Mobile First**. Esto significa que no "adaptamos" la web a móviles al final, sino que diseñamos pensando en el smartphone desde el primer día. En esta lección veremos cómo logramos que la experiencia sea igual de premium en 6.5 pulgadas que en 27.

## 1. El Grid Adaptativo

Usamos **CSS Grid** con unidades relativas (`fr`, `%`) en lugar de píxeles fijos. Esto permite que el contenido se estire o se rompa en nuevas filas automáticamente. 

### El ejemplo del Index:
En escritorio tenemos 3 columnas de tarjetas; en tablets bajamos a 2; y en móviles nos quedamos con 1 sola columna de ancho completo para maximizar la legibilidad.

## 2. Tipografía Dinámica

No usamos el mismo tamaño de letra en móvil que en PC. Gracias al uso de la unidad `rem` y técnicas de **Fluid Typography**, el texto de Tyac se ajusta sutilmente para que los títulos no ocupen toda la pantalla en un móvil, manteniendo la jerarquía visual.

## 3. Elementos Ocultos y "Off-Canvas"

En móviles, eliminamos los elementos decorativos menos importantes (como algunos blobs de fondo) para mejorar el rendimiento y evitar distracciones. El Sidebar de lecciones se mueve a un sistema **Off-Canvas** (un menú lateral oculto) que se activa mediante un botón flotante.

## 4. Pruebas Multi-Dispositivo

Durante la construcción de Tyac, realizamos auditorías usando las herramientas de desarrollador de Chrome para simular:
- **iPhone SE**: Nuestra medida mínima de seguridad.
- **iPad / Tablets**: Para asegurar el diseño de dos columnas.
- **Pantallas Ultrawide**: Para evitar que el contenido se estire demasiado.

> [!IMPORTANT]
> **Punto Clave**: Hemos asegurado que nunca exista un scroll horizontal involuntario. Todo el contenido de Tyac se queda dentro de los bordes del dispositivo, garantizando una navegación limpia.

---

La responsividad es visual. El siguiente paso es la velocidad pura. En la siguiente guía: Performance Tuning y optimización de carga.
