const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true

}
// agregar nuevas propiedades al objeto

producto.imagen =  "imagen.jpg";

// eliminar propiedades
delete producto.disponible;



console.log(producto);