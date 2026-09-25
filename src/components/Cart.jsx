import { Offcanvas } from "react-bootstrap";

function formatoPrecio(valor) {
  return "$" + Number(valor).toLocaleString("es-CL");
}

export default function Cart({ carrito, eliminarDelCarrito, abierto, cerrarCarrito }) {
  const unidades = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  const total = carrito.reduce(
    (suma, item) => suma + Number(item.precioOferta) * item.cantidad,
    0
  );

  return (
    <Offcanvas show={abierto} onHide={cerrarCarrito} placement="end" className="text-bg-dark">
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title>Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p className="mb-1">Productos: {unidades}</p>
        <p className="fw-bold mb-3">Total a pagar: {formatoPrecio(total)}</p>
        {carrito.length === 0 ? (
          <div className="alert alert-info" role="status">
            No hay productos en el carrito. Elige un juego del catálogo.
          </div>
        ) : (
          <ul className="list-group">
            {carrito.map((producto) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center gap-3 bg-dark text-light border-secondary"
                key={producto.id}
              >
                <span>
                  {producto.nombre} x{producto.cantidad}
                  <span className="text-info ms-2">
                    {formatoPrecio(producto.precioOferta * producto.cantidad)}
                  </span>
                </span>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
