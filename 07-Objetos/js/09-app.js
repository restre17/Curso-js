"use strict"

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true

}

// Obeject.seal   permite sellar un objeto no deja agregar ni eliminar atributos pero si los deja modificar
Object.seal(producto);

producto.disponible = false;
//producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);
