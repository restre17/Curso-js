const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true

}


// const nombre = producto.nombre;

// console.log(nombre);

// console.log(producto);

// destructuring
const {nombre} = producto;
//const {nombre, disponible} = producto;

console.log(nombre);

// destructuring con arreglos
const numeros = [10,20,30,40,50];

const [primero, segundo, tercero] = numeros;
const [, , tercero3] = numeros;
const [primero1, ...terceros] = numeros;
console.log(primero);
console.log(terceros);