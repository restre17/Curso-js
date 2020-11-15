for(let i = 0 ; i < 10; i+=2){
    
    console.log(`i = ${i}`);
}
// for (let i = 0; i <= 10; i++){
//     if(i===5){
//         console.log(`Cinco`);
//         continue;
//     }

//     console.log(`Numero ${i}`);

// }


const carrito = [
    {nombre: "Monitor 23 pulgadas", precio: 500},
    {nombre: "televiro", precio: 300},
    {nombre: "carro 23 pulgadas", precio: 200, descuento: true},
    {nombre: "23 pulgadas", precio: 100},
    {nombre: "pulgadas", precio: 5500},
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}