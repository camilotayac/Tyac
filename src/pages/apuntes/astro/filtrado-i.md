---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Filtrado Dinámico I: Lógica de categorías en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "filtrado-i"
---

# Filtrado Dinámico I: Lógica de categorías

Una de las características más potentes del Index de Tyac es su sistema de filtrado instantáneo. El usuario puede cambiar entre "General", "Química" o "Astro" y ver cómo las tarjetas se reorganizan al instante sin que la página parpadee ni se recargue.

## 1. El concepto de "Data Attributes"

Para que el JavaScript sepa qué tarjeta pertenece a qué materia, usamos los **Data Attributes** de HTML5. Al renderizar cada tarjeta en `index.astro`, le inyectamos su categoría:

```astro
<a href="..." data-materia={curso.materia} class="tarjeta-link">
    <TarjetaHorizontal ... />
</a>
```

De esta forma, cada elemento en el DOM tiene una "etiqueta" invisible que podemos usar para filtrar.

## 2. Captura de Eventos

En Tyac, los botones de filtro (`BotonMateria.astro`) también tienen un atributo `data-filter`. Cuando haces clic en uno, un script global en el Index captura ese valor:

```javascript
const filter = btn.dataset.filter; // Ejemplo: "Química"
```

## 3. El algoritmo de visibilidad

La lógica es simple pero efectiva: recorremos todas las tarjetas y comparamos su `data-materia` con el filtro activo. Si coinciden (o si el filtro es "all"), mostramos la tarjeta; de lo solo, la ocultamos.

```javascript
cards.forEach((card) => {
    const cardMateria = card.dataset.materia;
    if (filter === "all" || cardMateria === filter) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});
```

## 4. Scroll Coordinado

En Tyac, añadimos un detalle de UX extra: al filtrar, la página hace un pequeño ajuste de scroll para asegurar que la sección de tarjetas esté bien posicionada en la pantalla, evitando que el usuario se pierda tras el cambio de contenido.

> [!TIP]
> **JavaScript Puro**: En Tyac no usamos librerías pesadas para esto. Usamos JavaScript nativo para asegurar que el filtrado sea lo más ligero posible (menos de 1KB de código).

---

En la siguiente guía, veremos cómo añadimos transiciones suaves para que este cambio de tarjetas se sienta fluido y profesional.
