// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
   
    }


    // Object Constuctor

    function Producto (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }

    const producto2 = new Producto('monitor de 24 pulgadas', 500);
    console.log(producto2);
