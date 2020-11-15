const carrito = [
    {nombre: "Monitor 23 pulgadas", precio: 500},
    {nombre: "televiro", precio: 300},
    {nombre: "carro 23 pulgadas", precio: 200},
    {nombre: "23 pulgadas", precio: 100},
    {nombre: "pulgadas", precio: 5500},
]



carrito.forEach( function(producto){
    console.log(`${producto.precio} --- ${producto.nombre}`);
})

// hace lo mismo pero devuelve o crea un arreglo nuevo
carrito.map( function(producto){
    console.log(`${producto.precio} --- ${producto.nombre}`);
})