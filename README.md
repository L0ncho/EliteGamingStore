# Elite Gaming Store

Sitio de dos páginas para la tienda de videojuegos **Elite Gaming Store**. La portada muestra un carrusel y dos juegos destacados; el catálogo lista los cinco títulos. Ambas páginas comparten navbar, footer de contacto y tema oscuro.

El layout anterior (HTML propio + CSS de Semanas 2–3) se sustituyó por **Bootstrap 5**. La hoja antigua no se carga: está archivada en `css/`.

## Tecnologías

- HTML5 semántico (`header`, `main`, `nav`, `section`, `footer`) y `meta viewport`
- Bootstrap 5.3.3 por CDN (CSS y JS)
- Tema oscuro nativo: `data-bs-theme="dark"`
- Navegación entre páginas y ancla `#contacto` al pie

## Estructura

```
EliteGamingStore/
├── index.html
├── productos.html
├── README.md
├── images/
│   ├── juego1.jpg
│   ├── juego2.jpg
│   ├── juego3.jpg
│   ├── juego4.jpg
│   └── juego5.jpg
├── css/
│   └── Alonso_PFY2201_CSS_Semana2.css
└── entregables/
    ├── Alonso_Basualdo_Semana1_PFY2201.docx
    ├── Alonso_Basualdo_Semana2_PFY2201.docx
    ├── Alonso_Basualdo_Semana3_PFY2201.docx
    └── Alonso_Basualdo_Semana4_PFY2201.docx
```

## Páginas


| Archivo                              | Contenido                                           |
| ------------------------------------ | --------------------------------------------------- |
| `index.html`                         | Portada: navbar, carrusel y 2 productos destacados. |
| `productos.html`                     | Catálogo de 5 productos. Sin carrusel.              |
| `css/Alonso_PFY2201_CSS_Semana2.css` | CSS histórico de Semanas 2–3. No se enlaza.         |
| `entregables/`                       | Informes Word del curso.                            |


## Catálogo


| Juego                                   | Imagen              |
| --------------------------------------- | ------------------- |
| The Legend of Zelda: Breath of the Wild | `images/juego1.jpg` |
| God of War Ragnarök                     | `images/juego2.jpg` |
| Cyberpunk 2077                          | `images/juego3.jpg` |
| The Witcher 3: Wild Hunt                | `images/juego4.jpg` |
| The Last of Us Part II                  | `images/juego5.jpg` |


## Contacto

Datos ficticios, iguales en ambas páginas:

- Dirección: Av. Libertad 15554, Valparaíso, Chile
- Redes: Facebook, Twitter e Instagram

## Uso

Abrir `index.html` en un navegador. Bootstrap se carga desde el CDN (hace falta internet). No se necesita servidor local.

## Curso

**Desarrollo Frontend I (PFY2201).** Semanas 1–3: HTML y CSS propio. Semana 4: Bootstrap 5. Informes en `entregables/`.