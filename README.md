# Elite Gaming Store

Catálogo de videojuegos en **React** con **Vite**. La portada muestra un carrusel de tres destacados y carga el catálogo desde `public/juegos.json`.

Cada juego tiene nombre, descripción, imagen, categoría, precio normal, porcentaje de descuento y precio de oferta. El precio de oferta es el precio normal con ese descuento ya aplicado. La tarjeta muestra el porcentaje en una medalla y el precio normal tachado junto al de oferta.

## Qué hace la app

- **Navbar:** buscador y menú de categorías (Todas, Juegos de Consola, Juegos de PC). El catálogo se filtra por texto y categoría a la vez. Si no hay coincidencias, aparece un aviso.
- **Carrito:** botón flotante que abre un panel lateral. Agregar suma el juego; Eliminar lo quita. El total suma el precio de oferta. Vacío, el botón se ve a media opacidad y recupera el 100 % al pasar el mouse o cuando hay al menos un producto.
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

Abrir la URL que imprime Vite (por defecto `http://localhost:5173`).

## Contacto

Datos ficticios:

- Dirección: Av. Libertad 15554, Valparaíso, Chile
- Redes: Facebook, Twitter e Instagram

## Curso

**Desarrollo Frontend I (PFY2201).** La app es React + Vite: catálogo con Fetch, descuentos por juego, filtro, carrito y formulario de contacto.
