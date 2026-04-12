---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Tipografía: Curando fuentes para legibilidad en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "tipografia"
---

# Tipografía: El arte de la legibilidad

En una plataforma donde vas a pasar horas leyendo apuntes técnicos, la tipografía no es un detalle estético; es una decisión de ingeniería. En Tyac, hemos seleccionado cuidadosamente las fuentes para reducir la fatiga visual y mejorar la retención del conocimiento.

## 1. La fuente de lectura: `Inter`

Para el texto principal de los apuntes y la interfaz, usamos **Inter**. Es una fuente Sans-Serif diseñada específicamente para pantallas de ordenador.

- **Legibilidad alta**: Sus letras tienen aberturas claras que evitan que caracteres similares (como la 'i' y la 'l') se confundan.
- **Espaciado óptimo**: Su diseño permite que el texto se sienta aireado y moderno.

## 2. La fuente técnica: `JetBrains Mono`

Para los bloques de código, usamos **JetBrains Mono**. A diferencia de las fuentes monoespaciadas tradicionales, esta fue creada por desarrolladores para desarrolladores.

- **Altura de letra mayor**: Las letras son un poco más altas, lo que hace que el código sea más legible en tamaños pequeños.
- **Ligaduras**: Soporta ligaduras de programación (como `=>` o `!==`), transformándolas en símbolos visualmente limpios que ayudan a entender la lógica más rápido.

## 3. Jerarquía Visual

Usamos diferentes pesos de fuente (`font-weight`) para que sepas qué es importante:
- **Títulos (900)**: Peso extremo para una presencia imponente.
- **Cuerpo (400)**: Peso estándar para una lectura fluida.
- **Enfatizado (600)**: Para resaltar palabras clave sin "gritar" al usuario.

## 4. El "Line Height" de Tyac

Hemos establecido un interlineado de `1.6` o `1.7`. Esto evita que las líneas de texto se amontonen, permitiendo que el ojo salte de una línea a otra sin esfuerzo. Además, limitamos el ancho máximo del texto a unos **70-80 caracteres**, el estándar de oro para la lectura cómoda.

> [!TIP]
> **Toque Pro**: En Tyac, usamos `rem` en lugar de `px` para todos los tamaños de fuente. Esto respeta la configuración de accesibilidad del navegador del usuario, permitiendo que la web se adapte si el estudiante necesita texto más grande.

---

El texto está listo. Ahora veamos cómo manejamos los recursos visuales que lo acompañan. En la siguiente guía: El Media Manager de Tyac.
