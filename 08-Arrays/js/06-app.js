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


const producto3 = {
    nombre: "teclado",
    precio: 50
}

// forma declarativa
let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);