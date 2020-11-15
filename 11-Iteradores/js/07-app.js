const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [
    {nombre: "Monitor 23 pulgadas", precio: 500},
    {nombre: "televiro", precio: 300},
    {nombre: "carro 23 pulgadas", precio: 200, descuento: true},
    {nombre: "23 pulgadas", precio: 100},
    {nombre: "pulgadas", precio: 5500},
]


for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.precio);
}
