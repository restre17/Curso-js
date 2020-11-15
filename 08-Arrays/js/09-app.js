const carrito = [
    {nombre: "Monitor 23 pulgadas", precio: 500},
    {nombre: "televiro", precio: 300},
    {nombre: "carro 23 pulgadas", precio: 200},
    {nombre: "23 pulgadas", precio: 100},
    {nombre: "pulgadas", precio: 5500},
]





for(let i = 0; i < carrito.length; i++ ){
    // console.log(i);
    console.log(`${carrito[i].precio} --- ${carrito[i].nombre}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.precio} --- ${producto.nombre}`);
})