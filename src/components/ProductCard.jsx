import { Badge } from "react-bootstrap";

function formatoPrecio(valor) {
  return "$" + Number(valor).toLocaleString("es-CL");
}

export default function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <article className="card h-100">
      <img
        src={import.meta.env.BASE_URL + producto.imagen.replace(/^\/?public\//, "").replace(/^\//, "")}
        className="card-img-top"
        alt={"Portada del juego " + producto.nombre}
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title h5 d-flex justify-content-between align-items-start gap-2">
          <span>{producto.nombre}</span>
          <Badge bg="danger">-{producto.descuento}%</Badge>
        </h2>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text mb-3">
          <span className="text-decoration-line-through text-secondary me-2">
            {formatoPrecio(producto.precioNormal)}
          </span>
          <span className="fw-bold text-info fs-5">
            {formatoPrecio(producto.precioOferta)}
          </span>
        </p>
        <button
          type="button"
          className="btn btn-success mt-auto"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
