/**
 * Elite Gaming Store - lógica de contacto
 * Construye el formulario en el DOM y gestiona su envío.
 */

/** Productos agregados al carrito: { titulo, cantidad, precio }. */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/**
 * Pinta la lista del offcanvas, el badge del navbar y el total.
 */
function actualizarCarritoDOM() {
    const lista = document.getElementById("lista-carrito");
    const badge = document.getElementById("badge-carrito");
    const totalEl = document.getElementById("total-carrito");

    if (lista) {
        lista.innerHTML = "";

        if (carrito.length === 0) {
            const vacio = document.createElement("p");
            vacio.className = "text-center text-muted mt-4";
            vacio.textContent = "El carrito está vacío.";
            lista.appendChild(vacio);
        } else {
            carrito.forEach(function (item, indice) {
                const fila = document.createElement("div");
                fila.className = "d-flex justify-content-between align-items-start mb-3";

                const info = document.createElement("div");
                const titulo = document.createElement("p");
                titulo.className = "mb-0 fw-semibold";
                titulo.textContent = item.titulo;

                const cantidad = document.createElement("small");
                cantidad.className = "text-muted";
                cantidad.textContent = "Cantidad: " + item.cantidad;

                info.appendChild(titulo);
                info.appendChild(cantidad);

                const precio = document.createElement("span");
                precio.textContent = "$" + (item.precio * item.cantidad).toLocaleString("es-CL");

                const botonQuitar = document.createElement("button");
                botonQuitar.type = "button";
                botonQuitar.className = "btn btn-sm btn-danger ms-2";
                botonQuitar.textContent = "X";
                botonQuitar.addEventListener("click", function () {
                    if (item.cantidad > 1) {
                        item.cantidad--;
                    } else {
                        carrito.splice(indice, 1);
                    }
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    actualizarCarritoDOM();
                });

                fila.appendChild(info);
                fila.appendChild(precio);
                fila.appendChild(botonQuitar);
                lista.appendChild(fila);
            });
        }
    }

    const unidades = carrito.reduce(function (suma, item) {
        return suma + item.cantidad;
    }, 0);

    if (badge) {
        badge.textContent = String(unidades);
    }

    const total = carrito.reduce(function (suma, item) {
        return suma + item.precio * item.cantidad;
    }, 0);

    if (totalEl) {
        totalEl.textContent = total === 0 ? "Total: $0" : "Total: $" + total.toLocaleString("es-CL");
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/**
 * Suma un juego al arreglo carrito (o incrementa su cantidad) y refresca el DOM.
 * @param {string} titulo Nombre del juego tomado de .card-title
 */
function agregarAlCarrito(titulo) {
    const existente = carrito.find(function (item) {
        return item.titulo === titulo;
    });

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ titulo: titulo, cantidad: 1, precio: 20000 });
    }

    actualizarCarritoDOM();
}

/**
 * Inyecta una sola vez el botón "Vaciar carrito" debajo de "Proceder al pago".
 */
function inyectarBotonVaciarCarrito() {
    if (document.getElementById("btn-vaciar-carrito")) {
        return;
    }

    const panel = document.getElementById("carritoOffcanvas");
    if (!panel) {
        return;
    }

    const botonPago = panel.querySelector(".btn-success");
    if (!botonPago) {
        return;
    }

    const botonVaciar = document.createElement("button");
    botonVaciar.type = "button";
    botonVaciar.id = "btn-vaciar-carrito";
    botonVaciar.className = "btn btn-outline-danger w-100 mt-2";
    botonVaciar.textContent = "Vaciar carrito";
    botonVaciar.addEventListener("click", function () {
        carrito = [];
        actualizarCarritoDOM();
    });

    botonPago.insertAdjacentElement("afterend", botonVaciar);
}

/**
 * 
 * @param {string} etiqueta 
 * @param {string} tipo 
 * @param {string} id 
 * @param {string} nombre 
 * @returns {HTMLElement} 
 */
function crearCampo(etiqueta, tipo, id, nombre) {
    const grupo = document.createElement("div");
    grupo.className = "mb-3";

    const label = document.createElement("label");
    label.className = "form-label";
    label.setAttribute("for", id);
    label.textContent = etiqueta;

    let control;
    if (tipo === "textarea") {
        control = document.createElement("textarea");
        control.rows = 3;
    } else {
        control = document.createElement("input");
        control.type = tipo;
    }

    control.id = id;
    control.name = nombre;
    control.className = "form-control";
    control.required = true;

    grupo.appendChild(label);
    grupo.appendChild(control);
    return grupo;
}

/**
 * Intercepta el submit: evita recargar, avisa el éxito y limpia los campos.
 * @param {SubmitEvent} evento 
 */
function manejarEnvio(evento) {
    evento.preventDefault();

    const formulario = evento.currentTarget;
    const aviso = formulario.querySelector("[data-aviso-envio]");

    aviso.textContent = "Mensaje enviado con éxito. Te contactaremos pronto.";
    aviso.classList.remove("d-none", "alert-danger");
    aviso.classList.add("alert-success");

    formulario.reset();
}

/**
 * Construye un formulario de contacto (email, mensaje y submit)
 * con clases de Bootstrap 5 y lo inserta en footer#contacto.
 */
function inyectarFormulario() {
    const pieContacto = document.getElementById("contacto");
    if (!pieContacto) {
        return;
    }

    const formulario = document.createElement("form");
    formulario.id = "formulario-contacto";
    formulario.className = "mt-4 w-100";

    const titulo = document.createElement("h2");
    titulo.className = "h5 mb-3";
    titulo.textContent = "Formulario de contacto";

    const aviso = document.createElement("div");
    aviso.className = "alert d-none";
    aviso.setAttribute("role", "alert");
    aviso.setAttribute("data-aviso-envio", "");

    const campoEmail = crearCampo("Correo electrónico", "email", "contacto-email", "email");
    const campoMensaje = crearCampo("Mensaje", "textarea", "contacto-mensaje", "mensaje");

    const boton = document.createElement("button");
    boton.type = "submit";
    boton.className = "btn btn-primary";
    boton.textContent = "Enviar";

    formulario.appendChild(titulo);
    formulario.appendChild(aviso);
    formulario.appendChild(campoEmail);
    formulario.appendChild(campoMensaje);
    formulario.appendChild(boton);

    formulario.addEventListener("submit", manejarEnvio);
    pieContacto.appendChild(formulario);
}

/**
 * Aplica mouseover, mouseout y click a una tarjeta ya insertada en el DOM.
 * Se usa en las estáticas y en las que llegan por Fetch, sin duplicar listeners.
 * @param {HTMLElement} tarjeta Elemento .card
 */
function aplicarInteractividadTarjeta(tarjeta) {
    tarjeta.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";

    tarjeta.addEventListener("mouseover", function () {
        tarjeta.style.transform = "scale(1.02)";
        tarjeta.style.boxShadow = "0 0 18px #00e5ff";
    });

    tarjeta.addEventListener("mouseout", function () {
        tarjeta.style.transform = "";
        tarjeta.style.boxShadow = "";
    });

    const imagen = tarjeta.querySelector(".card-img-top");
    if (imagen) {
        imagen.addEventListener("click", function () {
            const aviso = document.createElement("div");
            aviso.textContent = "¡Excelente elección!";
            aviso.className = "position-fixed top-50 start-50 translate-middle p-4 bg-success text-white fw-bold fs-5 rounded-3 shadow-lg";
            aviso.style.zIndex = "9999";

            document.body.appendChild(aviso);

            setTimeout(function () {
                aviso.remove();
            }, 2000);
        });
    }

    const botonVerMas = tarjeta.querySelector(".btn-primary");
    if (botonVerMas) {
        const href = botonVerMas.getAttribute("href") || "";
        if (href.includes("#contacto")) {
            botonVerMas.setAttribute("href", "javascript:void(0)");
            botonVerMas.addEventListener("click", function (e) {
                e.preventDefault();

                const aviso = document.createElement("div");
                aviso.textContent = "Pronto se revelarán los detalles de este juego";
                aviso.className = "position-fixed bottom-0 end-0 m-4 p-3 bg-info text-dark fw-bold rounded shadow";
                aviso.style.zIndex = "1080";

                document.body.appendChild(aviso);

                setTimeout(function () {
                    aviso.remove();
                }, 3000);
            });
        }
    }

    const botonAgregar = tarjeta.querySelector(".btn-agregar");
    if (botonAgregar) {
        botonAgregar.addEventListener("click", function () {
            const tituloEl = tarjeta.querySelector(".card-title");
            const titulo = tituloEl ? tituloEl.textContent.trim() : "";
            agregarAlCarrito(titulo);
        });
    }
}

/**
 * Asigna mouseover/mouseout a las tarjetas (.card) y click a sus imágenes
 * (.card-img-top) para cumplir la interactividad del catálogo.
 */
function interactividadTarjetas() {
    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(function (tarjeta) {
        aplicarInteractividadTarjeta(tarjeta);
    });
}

/**
 * Muestra u oculta las columnas de #productos según el texto del título.
 * @param {string} texto Término escrito en el buscador
 */
function filtrarTarjetas(texto) {
    const termino = String(texto || "").toLowerCase().trim();
    const columnas = document.querySelectorAll("#productos .row.g-4 .col-12");

    columnas.forEach(function (columna) {
        const tituloEl = columna.querySelector(".card-title");
        const titulo = tituloEl ? tituloEl.textContent.toLowerCase() : "";

        if (titulo.includes(termino)) {
            columna.style.display = "";
        } else {
            columna.style.display = "none";
        }
    });
}

/**
 * Filtra las columnas de #productos según el título al enviar #form-busqueda.
 * Si no estamos en el catálogo, guarda el término y redirige a productos.html.
 */
function iniciarBusqueda() {
    const formulario = document.getElementById("form-busqueda");
    const input = document.getElementById("input-busqueda");

    if (!formulario || !input) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const texto = input.value;

        if (!window.location.href.includes("productos.html")) {
            localStorage.setItem("busqueda", texto);
            window.location.href = "productos.html";
            return;
        }

        filtrarTarjetas(texto);
    });
}

/**
 * Carga juegos.json con Fetch solo en el catálogo (productos.html).
 * Si existe el carrusel de la portada, no descarga ni inyecta el JSON.
 */
function cargarJuegosExternos() {
    if (document.getElementById("carruselDestacados")) {
        return;
    }

    const grilla = document.querySelector("#productos .row.g-4");
    if (!grilla) {
        return;
    }

    fetch("juegos.json")
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar juegos.json");
            }
            return respuesta.json();
        })
        .then(function (juegos) {
            juegos.forEach(function (juego) {
                const columna = document.createElement("div");
                columna.className = "col-12 col-md-6 col-lg-4";
                columna.innerHTML =
                    '<article class="card h-100">' +
                    '<img src="' + juego.imagen + '" class="card-img-top" alt="Portada del juego ' + juego.titulo + '">' +
                    '<div class="card-body d-flex flex-column">' +
                    '<h3 class="card-title h5">' + juego.titulo + "</h3>" +
                    '<p class="card-text">' + juego.descripcion + "</p>" +
                    '<p class="card-text fw-bold text-info fs-5 mb-3">$20.000</p>' +
                    '<button class="btn btn-success mt-auto btn-agregar">Agregar al carrito</button>' +
                    "</div></article>";
                grilla.appendChild(columna);

                const tarjetaNueva = columna.querySelector(".card");
                if (tarjetaNueva) {
                    aplicarInteractividadTarjeta(tarjetaNueva);
                }
            });

            const input = document.getElementById("input-busqueda");
            if (input && input.value) {
                filtrarTarjetas(input.value);
            }
        })
        .catch(function (error) {
            console.error("Error al cargar juegos externos:", error);

            const alerta = document.createElement("div");
            alerta.className = "alert alert-danger text-center mt-4 col-12";
            alerta.textContent = "Lo sentimos, no pudimos cargar el catálogo adicional en este momento. Por favor, intenta más tarde.";
            grilla.appendChild(alerta);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    inyectarFormulario();
    interactividadTarjetas();
    cargarJuegosExternos();
    actualizarCarritoDOM();
    inyectarBotonVaciarCarrito();
    iniciarBusqueda();

    const busquedaGuardada = localStorage.getItem("busqueda");
    if (busquedaGuardada !== null) {
        const input = document.getElementById("input-busqueda");
        if (input) {
            input.value = busquedaGuardada;
        }
        filtrarTarjetas(busquedaGuardada);
        localStorage.removeItem("busqueda");
    }
});
