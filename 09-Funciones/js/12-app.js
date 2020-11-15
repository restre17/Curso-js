const carrito = [
    {nombre: "Monitor 23 pulgadas", precio: 500},
    {nombre: "televiro", precio: 300},
    {nombre: "carro 23 pulgadas", precio: 200},
    {nombre: "23 pulgadas", precio: 100},
    {nombre: "pulgadas", precio: 5500},
]




// hace lo mismo pero devuelve o crea un arreglo nuevo

// const nuevoarreglo = carrito.map( function(producto){
//     console.log(`${producto.precio} --- ${producto.nombre}`);
// })

const nuevoarreglo = carrito.map( producto => `${producto.precio} --- ${producto.nombre}`);

console.log(nuevoarreglo);

// carrito.forEach( function(producto){
//     console.log(`${producto.precio} --- ${producto.nombre}`);
// })

carrito.forEach( producto =>console.log(`${producto.precio} --- ${producto.nombre}`));
