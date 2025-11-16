import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizaContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizaContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");
    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if(!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "No hay productos en el carrito";
        contenedor.appendChild(mensaje);
        return;
    }
    carrito.forEach((producto, indice) => {
        const tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("acciones-carrito");
        
        const tituloProducto = document.createElement("h3")
        tituloProducto.textContent = producto.nombre;
                
        const precioProducto = document.createElement("h4")
        precioProducto.textContent = `Importe: $${producto.precio}`;
                
        const imagenProducto = document.createElement("img");
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-eliminar-carrito");

        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(indice);
            renderizarCarrito();
        });
        tarjetaProducto.appendChild(imagenProducto);
        tarjetaProducto.appendChild(tituloProducto);
        tarjetaProducto.appendChild(precioProducto);
        tarjetaProducto.appendChild(botonEliminar);

        contenedor.appendChild(tarjetaProducto);
    });

    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("btn");
    botonVaciar.classList.add("btn-vaciar-carrito");
    botonVaciar.textContent = "Vaciar el carrito";
    botonVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(botonVaciar);
};

document.addEventListener("DOMContentLoaded", renderizarCarrito);


