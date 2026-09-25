import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavbarTienda({
  busqueda,
  actualizarBusqueda,
  categoriaActiva,
  actualizarCategoria,
}) {
  function elegirCategoria(evento, categoria) {
    evento.preventDefault();
    actualizarCategoria(categoria);
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand href="#inicio">EliteGamingStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-principal" />
        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto">
            <NavDropdown title={categoriaActiva || "Categorías"} id="nav-categorias">
              <NavDropdown.Item
                href="#todas"
                active={categoriaActiva === ""}
                onClick={(evento) => elegirCategoria(evento, "")}
              >
                Todas
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#consola"
                active={categoriaActiva === "Juegos de Consola"}
                onClick={(evento) => elegirCategoria(evento, "Juegos de Consola")}
              >
                Juegos de Consola
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#pc"
                active={categoriaActiva === "Juegos de PC"}
                onClick={(evento) => elegirCategoria(evento, "Juegos de PC")}
              >
                Juegos de PC
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex ms-lg-3" role="search" onSubmit={(evento) => evento.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Buscar juego..."
              aria-label="Buscar juego"
              value={busqueda}
              onChange={(evento) => actualizarBusqueda(evento.target.value)}
              className="bg-dark text-light border-info"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
