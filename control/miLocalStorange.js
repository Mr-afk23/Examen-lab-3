const CARRITO_KEY = 'miCarrito';

function guardarCarritoEnLocalStorage(carrito) {
    localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
}

function obtenerCarritoDesdeLocalStorage() {
    const carritoJSON = localStorage.getItem(CARRITO_KEY);
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

export { guardarCarritoEnLocalStorage, obtenerCarritoDesdeLocalStorage };