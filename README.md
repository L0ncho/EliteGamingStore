# Elite Gaming Store - Estructura HTML y hoja de estilos CSS

## Descripción

Maqueta del sitio de la tienda de videojuegos **Elite Gaming Store**. La página principal muestra una selección de dos juegos destacados, y desde el menú de navegación se accede al catálogo completo con los cinco juegos disponibles. Ambas páginas comparten la misma estructura: cabecera con el nombre y lema de la tienda, menú de navegación, sección de productos y pie de página con los enlaces a redes sociales y la dirección de la tienda.

Sobre esa estructura se aplica una hoja de estilos externa con un tema oscuro de tipo gaming: fondo azul muy oscuro, tarjetas de producto con borde y sombra, y dos colores de acento (cian y violeta) que se alternan entre los productos y resaltan los enlaces del menú.

## Tecnologías

- **HTML5** con etiquetas semánticas (`<header>`, `<nav>`, `<section>`, `<footer>`).
- **CSS3** en una hoja externa, con variables personalizadas en `:root`, modelo de cajas (`box-sizing: border-box`), Flexbox para el menú y la grilla de productos, y una media query para pantallas pequeñas.
- Navegación mediante enlaces entre páginas y anclajes internos (`id`) hacia las secciones de inicio, productos y contacto.
- Atributos `alt` en todas las imágenes para cumplir con los estándares de accesibilidad web.

## Estructura del proyecto

```
EliteGamingStore/
├── index.html
├── productos.html
├── Alonso_PFY2201_CSS_Semana2.css
├── README.md
└── images/
    ├── juego1.jpg
    ├── juego2.jpg
    ├── juego3.jpg
    ├── juego4.jpg
    └── juego5.jpg
```

Las imágenes de los productos se encuentran en la carpeta `images/` y se referencian con rutas relativas (por ejemplo, `images/juego1.jpg`). La hoja de estilos vive en la raíz del proyecto porque el nombre del archivo es parte de la entrega del curso.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Página principal con dos juegos destacados y enlace al catálogo completo. |
| `productos.html` | Catálogo completo con los cinco juegos de la tienda. |
| `Alonso_PFY2201_CSS_Semana2.css` | Hoja de estilos compartida por ambas páginas. |

Las dos páginas enlazan la misma hoja desde su `<head>`:

```html
<link rel="stylesheet" href="Alonso_PFY2201_CSS_Semana2.css">
```

## Flujo de la página

```mermaid
flowchart LR
    Visitante["Visitante"] --> Portada["index.html"]
    Portada --> Cabecera["Header: nombre y lema de la tienda"]
    Portada --> MenuNav["Nav: menu principal"]
    Portada --> Destacados["Section: 2 juegos destacados"]
    Portada --> Pie["Footer: redes sociales y direccion"]
    MenuNav --> AncInicio["#inicio: vuelve a la cabecera"]
    MenuNav --> AncContacto["#contacto: baja al footer"]
    MenuNav --> Catalogo["productos.html"]
    Destacados --> Catalogo
    Catalogo --> Fichas["5 fichas: titulo, imagen y descripcion"]
    Catalogo --> Volver["Enlace de regreso a index.html"]
    Volver --> Portada
    Pie --> Externos["Sitios externos: Facebook, Twitter, Instagram"]
```

## Hoja de estilos

### Variables en `:root`

| Variable | Valor | Uso |
| --- | --- | --- |
| `--color-fondo` | `#0d1117` | Fondo de la página y de las tarjetas |
| `--color-superficie` | `#161b22` | Fondo de header, nav, section y footer |
| `--color-borde` | `#30363d` | Bordes de bloques y botones del menú |
| `--color-texto` | `#e6edf3` | Texto principal |
| `--color-texto-suave` | `#c8ccd1` | Párrafos y descripciones |
| `--color-acento` | `#00e5ff` | Cian: títulos, enlaces y productos impares |
| `--color-acento-2` | `#b026ff` | Violeta: hover, footer y productos pares |

Se suman `--fuente-base` (pila sans-serif encabezada por Segoe UI), `--espacio` (`1rem`) y `--radio` (`10px`) para mantener espaciados y esquinas consistentes.

### Modelo de cajas

- Reset global con `box-sizing: border-box` y `margin`/`padding` en cero.
- `body` centrado con `max-width: 1100px` y `margin: 0 auto`.
- `header`, `nav`, `section` y `footer` comparten `padding: 2rem 1.5rem` y `margin-bottom: 2rem`.
- Cada producto es una tarjeta con `padding`, `border`, `border-radius` y `box-shadow`.
- Las imágenes usan `max-width: 100%` y `height: auto` para no desbordar en pantallas chicas.

### Selectores utilizados

| Tipo | Selectores | Efecto |
| --- | --- | --- |
| ID | `#inicio`, `#productos`, `#contacto` | Degradado en la cabecera, espaciado del catálogo y borde superior del pie |
| Clase | `.menu-principal`, `.lista-productos`, `.producto`, `.enlace-catalogo`, `.redes-sociales` | Menú horizontal, grilla de productos, tarjetas, botón de catálogo y fila de redes |
| Pseudo-clase | `:nth-child(odd)`, `:nth-child(even)`, `:nth-child(3n)`, `:hover`, `:focus` | Bordes alternados cian y violeta, realce cada tercer producto y estados interactivos |

### Comportamiento responsive

Las tarjetas usan `flex: 1 1 300px`, por lo que se reacomodan solas según el ancho disponible. Una media query en `max-width: 600px` reduce los paddings y el tamaño del título principal.

```mermaid
flowchart TD
    Hoja["Alonso_PFY2201_CSS_Semana2.css"] --> Raiz[":root: variables de color, fuente y espaciado"]
    Raiz --> Reset["Reset: box-sizing border-box"]
    Reset --> Ids["Selectores ID"]
    Reset --> Clases["Selectores de clase"]
    Ids --> Inicio["#inicio: cabecera con degradado"]
    Ids --> Productos["#productos: contenedor del catalogo"]
    Ids --> Contacto["#contacto: pie de pagina"]
    Clases --> Menu[".menu-principal: nav horizontal"]
    Clases --> Lista[".lista-productos: grilla flexible"]
    Lista --> Tarjeta[".producto: tarjeta con borde y sombra"]
    Tarjeta --> Impar["nth-child(odd): borde cian"]
    Tarjeta --> Par["nth-child(even): borde violeta"]
    Tarjeta --> Triple["nth-child(3n): degradado de realce"]
```

## Clases agregadas al HTML

El HTML de la Semana 1 no cambió en su contenido: no se modificó ningún texto ni ninguna etiqueta semántica. Las únicas incorporaciones fueron el `<link>` a la hoja de estilos y los siguientes atributos `class`:

| Clase | Elemento |
| --- | --- |
| `menu-principal` | `<nav>` del menú de navegación |
| `lista-productos` | `<ul>` que agrupa los productos |
| `producto` | Cada `<li>` de producto |
| `enlace-catalogo` | Enlace a `productos.html` y enlace de regreso a `index.html` |
| `redes-sociales` | `<ul>` de redes sociales del footer |

Los identificadores `#inicio`, `#productos` y `#contacto` ya existían en el HTML original y se reutilizaron directamente como selectores.

## Catálogo de productos

| Juego | Imagen | Aparece en |
| --- | --- | --- |
| The Legend of Zelda: Breath of the Wild | `images/juego1.jpg` | Portada y catálogo |
| God of War Ragnarök | `images/juego2.jpg` | Portada y catálogo |
| Cyberpunk 2077 | `images/juego3.jpg` | Catálogo |
| The Witcher 3: Wild Hunt | `images/juego4.jpg` | Catálogo |
| The Last of Us Part II | `images/juego5.jpg` | Catálogo |

## Datos de contacto

Estos datos son ficticios y deben ser idénticos en el footer de ambas páginas:

- **Dirección:** Av. Libertad 15554, Valparaíso, Chile
- **Redes sociales:** Facebook, Twitter e Instagram

## Uso

Abrir el archivo `index.html` en cualquier navegador web moderno y navegar hacia `productos.html` desde el menú. La hoja de estilos se carga automáticamente por ruta relativa, sin necesidad de un servidor local.

## Contexto académico

Curso **Desarrollo Frontend I (PFY2201)**:

- **Semana 1:** estructura y semántica HTML de ambas páginas.
- **Semana 2:** hoja de estilos `Alonso_PFY2201_CSS_Semana2.css` con variables, modelo de cajas y selectores avanzados.
