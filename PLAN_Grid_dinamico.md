# Grid dinámico con auto-fit y minmax

## Problema

En `Alonso_PFY2201_CSS_Semana2.css` la grilla está fija:

```css
.lista-productos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

En `index.html` solo hay 2 `.producto`, así que la tercera columna queda vacía. En `productos.html` hay 5, así que la última fila también deja un hueco.

`auto-fit` colapsa las pistas vacías; `minmax` hace que cada tarjeta tenga un ancho mínimo y crezca (`1fr`) para ocupar el espacio libre.

## Cambio en CSS (único bloque de Grid)

En `.lista-productos`, sustituir `repeat(3, 1fr)` por:

```css
.lista-productos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}
```

`280px` equivale al mínimo que antes daba `flex: 1 1 300px` (un poco menos por el `gap`). Resultado esperado:

- **index.html (2 tarjetas):** ambas se expanden a ~50% del contenedor; no queda columna vacía.
- **productos.html (5 tarjetas):** tantas columnas como quepan; la última fila se estira para llenar el ancho.
- **Móvil:** cuando el contenedor baja de ~280px + paddings, queda 1 columna sola.

## Media queries: no pisar el Grid

Hoy `@media (max-width: 768px)` fuerza 2 columnas y `@media (max-width: 480px)` fuerza 1. Eso anula `auto-fit`. Se **eliminan solo** estas dos reglas:

```css
.lista-productos {
    grid-template-columns: repeat(2, 1fr); /* 768px: quitar */
}
.lista-productos {
    grid-template-columns: 1fr; /* 480px: quitar */
}
```

Se conservan el resto de esos breakpoints (paddings, `h1`, menú en columna a 480px). Flexbox en nav/footer, `:root`, `nth-child` y `:hover` no se tocan. El HTML no cambia.

## README

En `README.md`, actualizar la tabla de “Comportamiento responsive” y el diagrama mermaid: dejar de hablar de 3/2/1 columnas fijas y documentar `repeat(auto-fit, minmax(280px, 1fr))`.

## Verificación

Abrir `index.html` en escritorio: las 2 tarjetas deben ocupar el ancho completo. Abrir `productos.html`: 5 tarjetas sin hueco muerto a la derecha. Redimensionar por 768px y 480px: el número de columnas debe bajar solo, sin reglas extra.
