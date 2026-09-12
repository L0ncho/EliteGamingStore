# Fetch API: cargar juegos.json en el catálogo

## Contexto

- `juegos.json`: array de 5 objetos (`id`, `titulo`, `descripcion`, `imagen` con `images/juego6.jpg` … `juego10.jpg`).
- Catálogo estático: `index.html` tiene 2 tarjetas en `#productos .row.g-4` (`col-12 col-md-6`). `productos.html` tiene 5 con `col-12 col-md-6 col-lg-4`.
- `app.js` ya tiene formulario e interactividad; **no** está enlazado en ningún HTML (no hay `<script src="app.js">`).
- Fetch de un JSON local falla con `file://`; hay que abrir el sitio con un servidor local (Live Server, etc.).

## 1. `cargarJuegosExternos()` en app.js

Nueva función comentada. No se reescriben `inyectarFormulario`, `crearCampo` ni `manejarEnvio`.

```js
function cargarJuegosExternos() {
    const grilla = document.querySelector("#productos .row.g-4");
    if (!grilla) {
        return;
    }

    fetch("juegos.json")
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar juegos.json");
            }
            return respuesta.json();
        })
        .then(function (juegos) {
            juegos.forEach(function (juego) {
                const columna = document.createElement("div");
                columna.className = "col-12 col-md-6 col-lg-4";
                columna.innerHTML =
                    '<article class="card h-100">' +
                    '<img src="' + juego.imagen + '" class="card-img-top" alt="Portada del juego ' + juego.titulo + '">' +
                    '<div class="card-body d-flex flex-column">' +
                    '<h3 class="card-title h5">' + juego.titulo + "</h3>" +
                    '<p class="card-text">' + juego.descripcion + "</p>" +
                    '<a href="' + enlaceVerMas + '" class="btn btn-primary mt-auto">Ver más</a>' +
                    "</div></article>";
                grilla.appendChild(columna);
            });
        })
        .catch(function (error) {
            console.error("Error al cargar juegos externos:", error);
        });
}
```

- `enlaceVerMas`: `productos.html` en la portada (hay carrusel) y `#contacto` en el catálogo, igual que las tarjetas estáticas de cada página.
- Tras cada `appendChild`, aplicar mouseover/mouseout/click **solo** a la tarjeta e imagen nuevas (Fetch es asíncrono: `interactividadTarjetas()` del `DOMContentLoaded` corre antes y no las vería). No re-ejecutar `querySelectorAll(".card")` sobre todo el catálogo para no duplicar listeners en las estáticas.

## 2. DOMContentLoaded

En `app.js`, añadir la llamada sin quitar las existentes:

```js
document.addEventListener("DOMContentLoaded", function () {
    inyectarFormulario();
    interactividadTarjetas();
    cargarJuegosExternos();
});
```

## 3. Enlazar el script

En `index.html` y `productos.html`, **antes de `</body>`**, después del footer:

```html
<script src="app.js"></script>
```

No borrar ni reordenar las tarjetas estáticas. Bootstrap sigue en el `<head>`.

## Resultado esperado

- Portada: 2 estáticas + 5 del JSON al final de la grilla.
- Catálogo: 5 estáticas + 5 del JSON al final.
- Productos HTML intactos; errores de red visibles en consola vía `.catch()`.
