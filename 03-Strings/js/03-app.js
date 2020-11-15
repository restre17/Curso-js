const producto = 'Monitor de 20" ';
const precio = "100 USD";

//  formas de concatenar strings
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log(producto + " Con un precio de: "+ precio);
console.log("El producto " ,producto , " Con un precio de: ", precio);

//  usar esta forma, is the future
console.log(`El producto ${producto} tiene un precio de $ ${precio} nueva forma`);
