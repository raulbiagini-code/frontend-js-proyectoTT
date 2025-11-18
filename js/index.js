
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizaContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-flyer");
    const carrito = obtenerCarrito();
    actualizaContador(carrito);
    
    fetch("../data/productos.json")
        .then((res) => {
            if (!res.ok){
                throw new Error(`Error HTTP status: ${res.status}`);}
            return res.json ()})
        .then((data) => {
            data.forEach((producto) => {
                const tarjetaProducto = document.createElement("article")
                tarjetaProducto.classList.add("vertical-flyer");
                const tituloProducto = document.createElement("h3")
                tituloProducto.textContent = producto.nombre;
                
                const precioProducto = document.createElement("h4")
                precioProducto.textContent = `Importe: $${producto.precio}`;
                
                const imagenProducto = document.createElement("img");
                imagenProducto.src = `../${producto.imagen}`;
                imagenProducto.alt = producto.nombre;
            
                const boton = document.createElement("button")
                boton.classList.add("btn-agregar-carrito");
                boton.textContent= "Agregar al carrito";
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto)})

                tarjetaProducto.appendChild(imagenProducto);
                tarjetaProducto.appendChild(tituloProducto);
                tarjetaProducto.appendChild(precioProducto);
                tarjetaProducto.appendChild(boton);

                contenedor.appendChild(tarjetaProducto);
        });
        })
        .catch((err) => {console.log(err)});
})

