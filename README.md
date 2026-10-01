<img width="1592" height="612" alt="Captura de pantalla 2026-10-01 044052" src="https://github.com/user-attachments/assets/dfabdb2b-408e-4b0d-bd0a-23faf57d3c3c" />
<img width="1592" height="612" alt="Captura de pantalla 2026-10-01 044052" src="https://github.com/user-attachments/assets/f1e31fd1-60bf-4036-918f-3c4f5d55f710" />
# Elite Gaming Store

Catálogo de videojuegos en **React** con **Vite**. La portada muestra un carrusel de tres destacados y carga el catálogo desde `public/juegos.json`.

Cada juego tiene nombre, descripción, imagen, categoría, valoración, precio normal, porcentaje de descuento y precio de oferta. El precio de oferta es el precio normal con ese descuento ya aplicado. La tarjeta muestra el porcentaje en una medalla, la valoración con una estrella y el precio normal tachado junto al de oferta. La categoría y la descripción aparecen solo al pasar el mouse sobre la tarjeta.

## Qué hace la app

- **Navbar:** buscador y menú de categorías (Todas, Juegos de Consola, Juegos de PC). El catálogo se filtra por texto y categoría a la vez. Si no hay coincidencias, aparece un aviso.
- **Carrito:** botón flotante que abre un panel lateral. Si el juego ya está, se suma 1 a su cantidad y el título muestra el volumen (por ejemplo, x3). En la tarjeta, el botón pasa a **Artículo ya seleccionado** y muestra esa cantidad (por ejemplo, x2). Eliminar resta 1 y, al llegar a 0, quita el juego y el botón vuelve a **Agregar al carrito**. El contador y el total multiplican el precio de oferta por la cantidad. Vacío, el botón se ve a media opacidad y recupera el 100 % al pasar el mouse o cuando hay al menos un producto.
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

## EVIDENCIA

### 1. Estados del carrito y del  boton

useState guarda el catálogo y el carrito. Agregar el mismo juego otra vez suma 1 a su cantidad. El botón de la tarjeta es el elemento interactivo: pasa de Agregar al carrito a Artículo ya seleccionado cuando ese juego ya está en el estado del carrito.

<img width="1912" height="612" alt="Captura de pantalla 2026-10-01 042515" src="https://github.com/user-attachments/assets/e615abe8-1dd4-4b67-b59f-20720ee38ddf" />


### 2. Datos cargados con useEffect
useEffect carga public/juegos.json al montar la aplicación y guarda el resultado en el estado del catálogo. Las tarjetas muestran nombre, descuento, valoración y precios que vienen de ese archivo, no de una lista fija en el componente.

<img width="1392" height="608" alt="Captura de pantalla 2026-10-01 042923" src="https://github.com/user-attachments/assets/6717da7f-c046-4852-897a-e0db6107cf20" />


### 3. Tres condicionales
A) Mensaje del carrito, estado del boton flotante
Si el carrito está vacío, no se renderiza la lista. Se muestra el mensaje de carrito vacío y el botón flotante usa el estilo de menor opacidad.

<img width="358" height="896" alt="Captura de pantalla 2026-10-01 043115" src="https://github.com/user-attachments/assets/3367df05-ed4e-4a33-ac48-7dae3808ed6b" />


B) Estilo del botón
El mismo botón cambia de texto y de clase según el estado. Verde si el juego no está en el carrito y gris si ya está seleccionado.

<img width="1592" height="612" alt="Captura de pantalla 2026-10-01 044052" src="https://github.com/user-attachments/assets/b176814b-860d-4bad-905c-e03d8cd59d9f" />



C) Vista al pasar el mouse.
La categoría y la descripción se renderizan únicamente cuando el mouse está sobre la tarjeta. Al salir, esa vista se oculta y quedan el título, la valoración, el precio y el botón.
<img width="812" height="488" alt="Captura de pantalla 2026-10-01 043434" src="https://github.com/user-attachments/assets/19ca02a6-a653-4f4d-953d-220ae12f667a" />




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
