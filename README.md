# Elite Gaming Store

Sitio de dos páginas para la tienda de videojuegos **Elite Gaming Store**. La portada muestra un carrusel y dos juegos destacados; el catálogo lista cinco títulos estáticos y suma cinco más desde `juegos.json`. Ambas páginas comparten navbar, footer de contacto y tema oscuro.

El layout anterior (HTML propio + CSS de Semanas 2–3) se sustituyó por **Bootstrap 5**. La hoja antigua no se carga: está archivada en `css/`. La lógica de DOM y Fetch vive en `app.js`.

## Tecnologías

- HTML5 semántico (`header`, `main`, `nav`, `section`, `footer`) y `meta viewport`
- Bootstrap 5.3.3 por CDN (CSS y JS)
- Tema oscuro nativo: `data-bs-theme="dark"`
- Vanilla JS en `app.js` (inyección de formulario, Fetch de `juegos.json`)
- Navegación entre páginas y ancla `#contacto` al pie

## Estructura

```
EliteGamingStore/
├── index.html
├── productos.html
├── app.js
├── juegos.json
├── README.md
├── images/
│   ├── juego1.jpg … juego10.jpg
├── css/
│   └── Alonso_PFY2201_CSS_Semana2.css
└── entregables/
    ├── Alonso_Basualdo_Semana1_PFY2201.docx
    ├── Alonso_Basualdo_Semana2_PFY2201.docx
    ├── Alonso_Basualdo_Semana3_PFY2201.docx
    └── Alonso_Basualdo_Semana4_PFY2201.docx
    └── Alonso_Basualdo_Semana5_PFY2201.docx
```

## Páginas


| Archivo                              | Contenido                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------- |
| `index.html`                         | Portada: navbar, carrusel y 2 productos destacados.                       |
| `productos.html`                     | Catálogo: 5 productos estáticos + 5 inyectados desde `juegos.json`.       |
| `app.js`                             | Formulario en `#contacto` y Fetch de `juegos.json` (solo en el catálogo). |
| `juegos.json`                        | Array de 5 juegos (`id`, `titulo`, `descripcion`, `imagen`).              |
| `css/Alonso_PFY2201_CSS_Semana2.css` | CSS histórico de Semanas 2–3. No se enlaza.                               |
| `entregables/`                       | Informes Word del curso.                                                  |


## Catálogo


| Juego                                   | Imagen               | Origen                         |
| --------------------------------------- | -------------------- | ------------------------------ |
| The Legend of Zelda: Breath of the Wild | `images/juego1.jpg`  | HTML                           |
| God of War Ragnarök                     | `images/juego2.jpg`  | HTML                           |
| Cyberpunk 2077                          | `images/juego3.jpg`  | HTML (`productos.html`)        |
| The Witcher 3: Wild Hunt                | `images/juego4.jpg`  | HTML (`productos.html`)        |
| The Last of Us Part II                  | `images/juego5.jpg`  | HTML (`productos.html`)        |
| Elden Ring                              | `images/juego6.jpg`  | `juegos.json` (solo catálogo)  |
| Red Dead Redemption 2                   | `images/juego7.jpg`  | `juegos.json` (solo catálogo)  |
| Marvel's Spider-Man 2                   | `images/juego8.jpg`  | `juegos.json` (solo catálogo)  |
| Baldur's Gate 3                         | `images/juego9.jpg`  | `juegos.json` (solo catálogo)  |
| Super Mario Odyssey                     | `images/juego10.jpg` | `juegos.json` (solo catálogo)  |


## Contacto

Datos ficticios, iguales en ambas páginas:

- Dirección: Av. Libertad 15554, Valparaíso, Chile
- Redes: Facebook, Twitter e Instagram

## Uso

Servir el proyecto con un servidor local (Live Server u otro). `fetch("juegos.json")` no funciona si se abre el HTML con `file://`. Bootstrap se carga desde el CDN (hace falta internet). Ambas páginas enlazan `app.js` al final del `body`.

## Curso

**Desarrollo Frontend I (PFY2201).** Semanas 1–3: HTML y CSS propio. Semana 4: Bootstrap 5. JavaScript y Fetch en `app.js` / `juegos.json`. Informes en `entregables/`.