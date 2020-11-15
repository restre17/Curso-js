const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// comprobar si un valor existe en un arreglo

// forma manual de hacerlo
// meses.forEach((mes) =>{
//     if(mes === 'Enero'){
//         console.log('Enero si existe');
//     }
// })

// const resultado = meses.includes('Enero');
// console.log(resultado);

// en un arreglo de objetos se usa .some

// const existe = carrito.some(produdcto => {
//     return produdcto.nombre === 'Celular'
// })
// igual que arriba pero con el return como implicito

const existe = carrito.some(produdcto => produdcto.nombre === 'Celular');

console.log(existe);

// en un arreglo tradicional con .some

const extiste2 = meses.some(mes => mes === "Febrero");
console.log(extiste2);