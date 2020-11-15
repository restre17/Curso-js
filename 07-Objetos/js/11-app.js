const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    motrarInfo: function(){
        console.log('El producto: ${this.nombre} tiene un precio de: ${this.precio} ');
        return this.precio;
    }

}


const producto2 = {
    nombre: "pc 20 pulgadas",
    precio: 500,
    disponible: true,
    motrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
        return this.precio;
    }

}


console.log(producto.motrarInfo());
console.log(producto2.motrarInfo());

