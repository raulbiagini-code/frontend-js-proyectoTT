import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizaContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito()
    carrito.push(producto)
    guardarCarrito(carrito)
    actualizaContador(carrito)
    mostrarMensaje("Producto agregado")
}

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito()
    carrito.splice(indice, 1)
    guardarCarrito(carrito)
    actualizaContador(carrito)
    mostrarMensaje("Producto eliminado")
}

export const vaciarCarrito = () => {
    vaciarCarritoStorage()
    actualizaContador([])
    mostrarMensaje("Carrito vaciado")
}
