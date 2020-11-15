const carrito = [];


// definir un producto

const producto = {
    nombre: "tarjeta de video",
    precio: 500
}

const producto2 = {
    nombre: "tarjeta de sonido",
    precio: 50
}
//agregar al final de un arreglo
carrito.push(producto2);
carrito.push(producto);


const producto3 = {
    nombre: "teclado",
    precio: 50
}

//agregar al inicio
carrito.unshift(producto3);


console.table(carrito);