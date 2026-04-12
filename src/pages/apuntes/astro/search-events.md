---
layout: ../../../layouts/lessons/00-LayoutLessons.astro
titulo: "Comunicación via CustomEvents de búsqueda en Tyac"
materia: "Astro"
curso: "astro"
id_clase: "search-events"
---

# Comunicación via CustomEvents

En una arquitectura de componentes como la de Tyac, a veces necesitamos que un componente le hable a otro que está en una parte totalmente distinta del DOM. Para evitar el "acoplamiento" (que un archivo dependa demasiado de otro), usamos el **Sistema de Eventos Personalizados (CustomEvents)**.

## 1. El problema de la distancia

El **Buscador del Hero** está dentro de la página `index.astro`, mientras que el **SearchModal** está en el `Layout.astro`. No pueden verse directamente. En lugar de intentar buscar el modal con un ID complejo, el Buscador simplemente "grita" un mensaje al aire (la ventana global).

## 2. El Disparador (Dispatcher)

Cuando haces clic en el buscador del Hero, ejecutamos este código:

```javascript
window.dispatchEvent(new CustomEvent("open-search"));
```

Esta línea crea un evento llamado `open-search` y lo lanza a todo el objeto `window`. Al buscador no le importa quién reciba el mensaje, solo sabe que lo ha enviado.

## 3. El Receptor (Listener)

Dentro del **SearchModal**, tenemos un oído atento a ese mensaje específico. En cuanto el evento `open-search` llega a la ventana, el modal ejecuta su función de apertura:

```javascript
window.addEventListener("open-search", () => {
    // Lógica para quitar el atributo hidden y dar foco al input
    modal.removeAttribute("hidden");
    input.focus();
});
```

## 4. Ventajas de este sistema en Tyac

- **Desacoplamiento**: Podemos mover el modal a cualquier otra parte del proyecto y seguirá funcionando mientras escuche el mismo evento.
- **Múltiples Triggers**: Podemos añadir otros botones (como un icono de lupa en el footer o un atajo de teclado) que lancen el mismo evento, y el modal responderá a todos ellos sin necesidad de modificar su código interno.

> [!IMPORTANT]
> **View Transitions**: Para que esto funcione bien en Tyac tras navegar, nos aseguramos de limpiar y re-añadir estos listeners en cada `astro:page-load`, evitando que los eventos "mueran" al cambiar de página.

---

Ya sabemos cómo se comunican. Ahora, veamos de dónde sale el combustible para esta búsqueda: El archivo dinámico buscador.json.
