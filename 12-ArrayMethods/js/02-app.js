const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// encontrar indice forma manual
// meses.forEach((mes, i)=>{
//     if(mes === 'Abril'){
//     console.log(`Encontrado en el indice ${i}`);
//     }
// })

// encontrar indice , si no existe retorna -1

const indice = meses.findIndex(mes => mes === 'Abril');

// console.log(indice);


// encontrar indice de un arreglo de objetos

const indice2 = carrito.findIndex((producto, i) => producto.nombre === 'Celular'); 

console.log(indice2);