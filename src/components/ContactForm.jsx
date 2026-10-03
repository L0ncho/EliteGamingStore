import { useState } from "react";

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const nombre = formulario.nombre.value.trim();
    const email = formulario.email.value.trim();
    const mensaje = formulario.mensaje.value.trim();

    if (!nombre) {
      setEnviado(false);
      setError("Ingresa tu nombre.");
      return;
    }

    if (!email || !correoValido(email)) {
      setEnviado(false);
      setError(
        email
          ? "El correo no es válido. Debe incluir un texto, @ y un dominio con un punto."
          : "Ingresa tu correo electrónico."
      );
      return;
    }

    if (!mensaje) {
      setEnviado(false);
      setError("Ingresa un mensaje.");
      return;
    }

    setError("");
    setEnviado(true);
    formulario.reset();
  }

  return (
    <section className="py-4" aria-labelledby="titulo-contacto">
      <div className="container">
        <form
          id="formulario-contacto"
          className="mt-2"
          onSubmit={manejarEnvio}
          noValidate
        >
          <h2 id="titulo-contacto" className="h5 mb-3">
            Formulario de contacto
          </h2>
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}
          {enviado ? (
            <div className="alert alert-success" role="alert">
              Mensaje enviado con éxito. Te contactaremos pronto.
            </div>
          ) : null}
          <div className="mb-3">
            <label className="form-label" htmlFor="contacto-nombre">
              Nombre
            </label>
            <input
              type="text"
              id="contacto-nombre"
              name="nombre"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="contacto-telefono">
              Número telefónico
            </label>
            <input
              type="tel"
              id="contacto-telefono"
              name="telefono"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="contacto-email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="contacto-email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="contacto-mensaje">
              Mensaje
            </label>
            <textarea
              id="contacto-mensaje"
              name="mensaje"
              className="form-control"
              rows={3}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
