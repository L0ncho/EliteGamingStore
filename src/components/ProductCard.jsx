import { useState } from "react";
import { Badge } from "react-bootstrap";

function formatoPrecio(valor) {
  return "$" + Number(valor).toLocaleString("es-CL");
}

export default function ProductCard({ producto, agregarAlCarrito, yaSeleccionado, cantidad }) {
  const [detalleVisible, setDetalleVisible] = useState(false);
  const rutaImagen =
    import.meta.env.BASE_URL + producto.imagen.replace(/^\/?public\//, "").replace(/^\//, "");
  const claseBoton = yaSeleccionado ? "btn btn-secondary mt-auto" : "btn btn-success mt-auto";
  const textoBoton = yaSeleccionado ? "Artículo ya seleccionado" : "Agregar al carrito";

  return (
    <article
      className="card h-100"
      onMouseEnter={() => setDetalleVisible(true)}
      onMouseLeave={() => setDetalleVisible(false)}
    >
      <img
        src={rutaImagen}
        className="card-img-top"
        alt={"Portada del juego " + producto.nombre}
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title h5 d-flex justify-content-between align-items-start gap-2">
          <span>{producto.nombre}</span>
          <Badge bg="danger">-{producto.descuento}%</Badge>
        </h2>
        <p className="mb-2 fw-bold text-warning">★ {Number(producto.valoracion).toFixed(1)}</p>
        <p className="card-text mb-3">
          <span className="text-decoration-line-through text-secondary me-2">
            {formatoPrecio(producto.precioNormal)}
          </span>
          <span className="fw-bold text-info fs-5">
            {formatoPrecio(producto.precioOferta)}
          </span>
        </p>
        {detalleVisible ? (
          <>
            <p className="mb-1 text-info">{producto.categoria}</p>
            <p className="card-text mb-3">{producto.descripcion}</p>
          </>
        ) : null}
        {yaSeleccionado ? (
          <p className="mb-2 fw-bold text-info">x{cantidad}</p>
        ) : null}
        <button
          type="button"
          className={claseBoton}
          onClick={() => agregarAlCarrito(producto)}
        >
          {textoBoton}
        </button>
      </div>
    </article>
  );
}
