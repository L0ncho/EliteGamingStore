import { useState } from "react";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(evento) {
    evento.preventDefault();
    setEnviado(true);
    evento.currentTarget.reset();
  }

  return (
    <section className="py-4" aria-labelledby="titulo-contacto">
      <div className="container">
        <form id="formulario-contacto" className="mt-2" onSubmit={manejarEnvio}>
          <h2 id="titulo-contacto" className="h5 mb-3">
            Formulario de contacto
          </h2>
          {enviado ? (
            <div className="alert alert-success" role="alert">
              Mensaje enviado con éxito. Te contactaremos pronto.
            </div>
          ) : null}
          <div className="mb-3">
            <label className="form-label" htmlFor="contacto-email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="contacto-email"
              name="email"
              className="form-control"
              required
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
              required
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
