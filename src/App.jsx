import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Cart from "./components/Cart.jsx";
import ContactForm from "./components/ContactForm.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import NavbarTienda from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("");

  function abrirCarrito() {
    setCarritoAbierto(true);
  }

  function cerrarCarrito() {
    setCarritoAbierto(false);
  }

  function agregarAlCarrito(producto) {
    // Agrega el juego al carrito. El spread copia el arreglo y añade el producto al final, sin mutar el estado anterior.
    setCarrito((actual) => [...actual, producto]);
  }

  function eliminarDelCarrito(indice) {
    // Quita un ítem del carrito. filter devuelve un arreglo nuevo y deja fuera solo ese índice, sin mutar carrito.
    setCarrito((actual) => actual.filter((_, posicion) => posicion !== indice));
  }

  useEffect(() => {
    fetch("/juegos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el catálogo de juegos.");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((err) => {
        setError(err.message || "No se pudo cargar el catálogo de juegos.");
      });
  }, []);

  // Prepara el texto de búsqueda en minúsculas para comparar sin distinguir mayúsculas.
  const termino = busqueda.toLowerCase().trim();
  // filter arma un arreglo nuevo: solo entran los juegos que coinciden a la vez con el texto y la categoría. productos no se modifica.
  const productosFiltrados = productos.filter((juego) => {
    const coincideTexto = juego.nombre.toLowerCase().includes(termino);
    // Sin categoría activa se aceptan todos; si hay una, debe ser la misma del juego.
    const coincideCategoria = categoriaActiva === "" || juego.categoria === categoriaActiva;
    return coincideTexto && coincideCategoria;
  });

  return (
    <>
      <header id="inicio">
        <NavbarTienda
          busqueda={busqueda}
          actualizarBusqueda={setBusqueda}
          categoriaActiva={categoriaActiva}
          actualizarCategoria={setCategoriaActiva}
        />
      </header>

      <main>
        <HeroCarousel />
        <Cart
          carrito={carrito}
          eliminarDelCarrito={eliminarDelCarrito}
          abierto={carritoAbierto}
          cerrarCarrito={cerrarCarrito}
        />
        <section id="productos" className="py-3">
          <div className="container">
            <h1 className="h2 mb-4">Catálogo</h1>
            {error ? (
              <div
                className="alert alert-danger sticky-top"
                role="alert"
                style={{ top: "4.5rem", zIndex: 1030 }}
              >
                {error}
              </div>
            ) : null}
            {productosFiltrados.length > 0 ? (
              <div className="row g-4">
                {productosFiltrados.map((juego) => (
                  <div className="col-12 col-md-6 col-lg-4" key={juego.id}>
                    <ProductCard producto={juego} agregarAlCarrito={agregarAlCarrito} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="alert alert-secondary text-center text-body-secondary" role="status">
                No se encontraron productos que coincidan con su búsqueda en esta categoría
              </div>
            )}
          </div>
        </section>
        <ContactForm />
      </main>

      <footer id="contacto" className="bg-dark text-light py-4 mt-4">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h2 className="h5">RRSS</h2>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="link-light" href="https://www.facebook.com/">
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a className="link-light" href="https://www.twitter.com/">
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a className="link-light" href="https://www.instagram.com/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-0">Dirección: Av. Libertad 15554, Valparaíso, Chile</p>
        </div>
      </footer>

      <button
        type="button"
        className={
          "btn btn-primary position-fixed bottom-0 end-0 m-4 shadow-lg" +
          (carrito.length === 0 ? " btn-carrito-vacio" : "")
        }
        style={{ zIndex: 1050 }}
        onClick={abrirCarrito}
      >
        Carrito <Badge bg="danger">{carrito.length}</Badge>
      </button>
    </>
  );
}
