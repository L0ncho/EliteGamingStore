# Elite Gaming Store

Catálogo de videojuegos en **React** con **Vite**. La portada muestra un carrusel de tres destacados y carga el catálogo desde `public/juegos.json`.

Cada juego tiene nombre, descripción, imagen, categoría, precio normal, porcentaje de descuento y precio de oferta. El precio de oferta es el precio normal con ese descuento ya aplicado. La tarjeta muestra el porcentaje en una medalla y el precio normal tachado junto al de oferta.

## Qué hace la app

- **Navbar:** buscador y menú de categorías (Todas, Juegos de Consola, Juegos de PC). El catálogo se filtra por texto y categoría a la vez. Si no hay coincidencias, aparece un aviso.
- **Carrito:** botón flotante que abre un panel lateral. Si el juego ya está, se suma 1 a su cantidad y el título muestra el volumen (por ejemplo, x3). Eliminar resta 1 y, al llegar a 0, quita el juego. El contador y el total multiplican el precio de oferta por la cantidad. Vacío, el botón se ve a media opacidad y recupera el 100 % al pasar el mouse o cuando hay al menos un producto.
- **Contacto:** formulario con correo y mensaje, debajo del catálogo. El pie muestra la dirección y las redes.
- **Error de carga:** si `juegos.json` no se puede leer, una alerta roja queda fija sobre el catálogo.

## Tecnologías

- React 19 y Vite
- Bootstrap 5.3 y react-bootstrap
- Tema oscuro: `data-bs-theme="dark"` en `index.html`

## Uso

```bash
npm install
npm run dev
```

Abrir la URL que imprime Vite. Con la base del proyecto queda en `http://localhost:5173/EliteGamingStore/`.

## Publicación

El sitio publicado vive en [https://l0ncho.github.io/EliteGamingStore/](https://l0ncho.github.io/EliteGamingStore/). `npm run deploy` compila y sube solo la carpeta `dist` a la rama `gh-pages`.

##EVIDENCIA

### 1. Vista Principal (Home)
La página de inicio cuenta con una barra de navegación superior, buscador integrado y un carrusel dinámico para destacar títulos principales.
<img width="1869" height="535" alt="Captura de pantalla 2026-09-25 201327" src="https://github.com/user-attachments/assets/97e6b639-dfcc-48c7-b26b-878af5f1f362" />

### 2. Catálogo de Juegos
La grilla de productos carga los datos desde un archivo JSON. Calcula automáticamente el precio final aplicando el porcentaje de descuento y muestra cada tarjeta con su respectivo botón de compra.
<img width="1291" height="925" alt="1" src="https://github.com/user-attachments/assets/ed0e64fa-d9ed-4969-9ca5-0e8cf027d975" />


### 3. Carrito de Compras (Funcional)
El sistema incluye un panel lateral para gestionar la compra. 
* **Estado vacío:** Indica al usuario que debe seleccionar productos.
<img width="736" height="944" alt="Captura de pantalla 2026-09-25 201501" src="https://github.com/user-attachments/assets/df2aae0d-84fe-4154-818f-01e4d4bd05f4" />

* **Con productos:** Suma el precio total matemático exacto, contabiliza los ítems en el botón flotante y permite la eliminación individual.
<img width="520" height="943" alt="Captura de pantalla 2026-09-25 201520" src="https://github.com/user-attachments/assets/1bbf089c-8c9c-4b6a-8dda-9351e79f86cb" />



### 4. Diseño Responsivo
Toda la interfaz fue construida para adaptarse a cualquier tamaño de pantalla, redistribuyendo el catálogo y transformando el menú principal en dispositivos móviles y tablets.
<img width="749" height="802" alt="Captura de pantalla 2026-09-25 201752" src="https://github.com/user-attachments/assets/79d4ea34-81d9-4b15-928b-4804b2467f3d" />
<img width="991" height="930" alt="Captura de pantalla 2026-09-25 201812" src="https://github.com/user-attachments/assets/e253c13e-eeed-4f6e-bf97-bc38777cda91" />


## Contacto


Datos ficticios:

- Dirección: Av. Libertad 15554, Valparaíso, Chile
- Redes: Facebook, Twitter e Instagram

## Curso

**Desarrollo Frontend I (PFY2201).** La app es React + Vite: catálogo con Fetch, descuentos por juego, filtro, carrito con cantidades y formulario de contacto.
