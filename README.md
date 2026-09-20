# Elite Gaming Store

Sitio de dos páginas para la tienda de videojuegos **Elite Gaming Store**. La portada muestra un carrusel y dos juegos destacados; el catálogo lista cinco títulos estáticos y suma cinco más desde `juegos.json`. Cada tarjeta muestra imagen, nombre y precio (**$20.000**). Ambas páginas comparten navbar (buscador y carrito), footer de contacto y tema oscuro.

El layout anterior (HTML propio + CSS de Semanas 2–3) se sustituyó por **Bootstrap 5**. Los estilos propios viven en `assets/css/styles.css`. La hoja antigua no se carga: está archivada en `css/`. La lógica de DOM, Fetch, carrito y búsqueda vive en `assets/js/app.js`.

## Tecnologías

- HTML5 semántico (`header`, `main`, `nav`, `section`, `footer`) y `meta viewport`
- Bootstrap 5.3.3 por CDN (CSS y JS), offcanvas del carrito
- Tema oscuro nativo: `data-bs-theme="dark"`
- Vanilla JS en `assets/js/app.js` (formulario, Fetch, carrito, búsqueda, alerta si el JSON falla)
- Navegación entre páginas y ancla `#contacto` al pie

## Estructura

```
EliteGamingStore/
├── index.html
├── productos.html
├── juegos.json
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── juego1.jpg … juego10.jpg
│   └── js/
│       └── app.js
├── css/
│   └── Alonso_PFY2201_CSS_Semana2.css
└── entregables/
    ├── Alonso_Basualdo_Semana1_PFY2201.docx
    ├── Alonso_Basualdo_Semana2_PFY2201.docx
    ├── Alonso_Basualdo_Semana3_PFY2201.docx
    ├── Alonso_Basualdo_Semana4_PFY2201.docx
    └── Alonso_Basualdo_Semana5_PFY2201.docx
```

## Páginas


| Archivo                              | Contenido                                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `index.html`                         | Portada: navbar (buscador y carrito), carrusel y 2 productos destacados (precio $20.000).           |
| `productos.html`                     | Catálogo: 5 productos estáticos + 5 inyectados desde `juegos.json` (precio $20.000 en todas).      |
| `assets/js/app.js`                   | Formulario en `#contacto`, Fetch, carrito (offcanvas), filtro `#form-busqueda` y alerta si falla el JSON. |
| `assets/css/styles.css`              | Estilos propios (carrusel, cards, navbar).                                                         |
| `juegos.json`                        | Array de 5 juegos (`id`, `titulo`, `descripcion`, `imagen`).                                       |
| `css/Alonso_PFY2201_CSS_Semana2.css` | CSS histórico de Semanas 2–3. No se enlaza.                                                        |
| `entregables/`                       | Informes Word del curso.                                                                           |


## Catálogo


| Juego                                   | Imagen                    | Origen                         |
| --------------------------------------- | ------------------------- | ------------------------------ |
| The Legend of Zelda: Breath of the Wild | `assets/img/juego1.jpg`   | HTML                           |
| God of War Ragnarök                     | `assets/img/juego2.jpg`   | HTML                           |
| Cyberpunk 2077                          | `assets/img/juego3.jpg`   | HTML (`productos.html`)        |
| The Witcher 3: Wild Hunt                | `assets/img/juego4.jpg`   | HTML (`productos.html`)        |
| The Last of Us Part II                  | `assets/img/juego5.jpg`   | HTML (`productos.html`)        |
| Elden Ring                              | `assets/img/juego6.jpg`   | `juegos.json` (solo catálogo)  |
| Red Dead Redemption 2                   | `assets/img/juego7.jpg`   | `juegos.json` (solo catálogo)  |
| Marvel's Spider-Man 2                   | `assets/img/juego8.jpg`   | `juegos.json` (solo catálogo)  |
| Baldur's Gate 3                         | `assets/img/juego9.jpg`   | `juegos.json` (solo catálogo)  |
| Super Mario Odyssey                     | `assets/img/juego10.jpg`  | `juegos.json` (solo catálogo)  |

Precio simulado en todas las tarjetas (HTML y Fetch): **$20.000**.

## Contacto

Datos ficticios, iguales en ambas páginas:

- Dirección: Av. Libertad 15554, Valparaíso, Chile
- Redes: Facebook, Twitter e Instagram

## Uso

Servir el proyecto con un servidor local (Live Server u otro). `fetch("juegos.json")` no funciona si se abre el HTML con `file://`. Bootstrap se carga desde el CDN (hace falta internet). Ambas páginas enlazan `assets/css/styles.css` y, al final del `body`, `assets/js/app.js`.

## Curso

**Desarrollo Frontend I (PFY2201).** Semanas 1–3: HTML y CSS propio. Semana 4: Bootstrap 5. JavaScript (Fetch, carrito y búsqueda) en `assets/js/app.js` / `juegos.json`. Informes en `entregables/`.
