---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Code Utility: Botón copiar y headers dinámicos en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "code-copy"
---

# Code Utility: Herramientas de código

En Tyac, queremos que el aprendizaje sea fluido. No hay nada más frustrante que tener que seleccionar texto con el ratón para copiar un ejemplo. Por eso, hemos blindado nuestros bloques de código con una capa de utilidad superior: el **Header de Código** y el **Botón de Copiado**.

## 1. El Header Dinámico

Cada bloque de código en Tyac tiene una barra superior que indica:
- **Lenguaje**: Detectado automáticamente del Markdown.
- **Acceso rápido**: Un botón para copiar.

Este header se inyecta dinámicamente mediante JavaScript en el cliente, buscando todos los elementos `<pre>` que genera Shiki.

## 2. La lógica del botón "Copiar"

Usamos la **Clipboard API** moderna del navegador para asegurar que el copiado sea instantáneo y seguro. Al hacer clic, el botón cambia visualmente para confirmar que el código ya está en tu portapapeles.

```javascript
async function copyCode(block, button) {
    const code = block.querySelector("code").innerText;
    await navigator.clipboard.writeText(code);
    
    // Feedback visual (Cambiamos el icono o texto)
    button.innerText = "¡Copiado!";
    setTimeout(() => button.innerText = "Copiar", 2000);
}
```

## 3. Estilos de la Barbería de Código

El header del bloque de código tiene un diseño sutil con fondo semi-transparente y un borde que solo aparece cuando es necesario. Esto separa la utilidad del contenido técnico sin cargar visualmente la página.

## 4. Por qué lo hacemos así?

Hacerlo mediante JavaScript en el cliente nos permite mantener el Markdown limpio. No tenemos que escribir HTML complejo cada vez que queremos un botón; Tyac lo añade por nosotros automáticamente a cada ejemplo de código.

> [!TIP]
> **Atajo**: En dispositivos móviles, el botón es un poco más grande para facilitar la interactividad táctil, permitiéndote llevarte el código a tu tablet o app de notas en un segundo.

---

El código es vital, pero las advertencias y consejos también. En la siguiente guía, veremos cómo inyectamos las Alertas Visuales con iconos.
