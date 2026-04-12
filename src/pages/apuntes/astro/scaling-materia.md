---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Escalamiento: Soportando 10+ materias en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "scaling-materia"
---

# Escalamiento: Soportando materias

Tyac fue diseñado para crecer. Lo que empezó como un pequeño proyecto de Astro y Química, tiene una arquitectura capaz de albergar decenas de materias y miles de lecciones sin volverse lento ni difícil de mantener.

## 1. Modularización por Datos

La clave del escalamiento en Tyac es que **el código no cambia cuando el contenido crece**. 
- Si quieres añadir una materia de "Física", no creas carpetas nuevas ni layouts nuevos.
- Solo añades el objeto "física" en `src/data/temarios.js` y `cursos.js`.
- La lógica de rutas dinámicas se encarga de crear las páginas por ti.

## 2. Abstracción de Componentes

Nuestros componentes (como el Sidebar o las Tarjetas) son agnósticos. No saben de qué materia están hablando; simplemente reciben un color y un título y se pintan. Esto permite que el mismo componente funcione para un curso de "Cálculo Integral" o una guía de "Cocina Molecular".

## 3. Build Incremental

Al usar Astro, el tiempo de construcción de Tyac se mantiene bajo control incluso con cientos de páginas. Gracias a la generación estática, el servidor solo tiene que trabajar una vez (al deployar). Para el usuario final, la web siempre pesará lo mismo de entrada.

## 4. Estilos Compartidos

Al tener una sola `palette.css` y variables semánticas, las nuevas materias heredan automáticamente la "estética Tyac". Esto garantiza que, aunque la plataforma crezca masivamente, siempre se sienta como un producto único y coherente, no como un Frankestein de diseños diferentes.

> [!IMPORTANT]
> **Visión Pro**: La arquitectura de Tyac está preparada para el futuro. Si algún día decidimos conectar una API de base de datos real (como Supabase o Strapi), los componentes ya están listos para recibir esos datos con un cambio mínimo en la fuente de `src/data/`.

---

Estamos a un paso de la meta. ¿Cómo llevamos todo este trabajo al mundo real? En la siguiente guía: Deployment y paso a producción.
