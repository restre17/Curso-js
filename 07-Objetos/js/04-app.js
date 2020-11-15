const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true

}


// const nombre = producto.nombre;

// console.log(nombre);

// console.log(producto);

const {nombre} = producto;
const {nombre, disponible} = producto;

console.log(nombre);