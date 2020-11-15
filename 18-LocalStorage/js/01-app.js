
localStorage.setItem('nombre', 'Diego');  // solo guarda strings


const producto = {
    nombre: 'monitor',
    precio: 300
}

const productoSctring = JSON.stringify(producto);
console.log(productoSctring);
localStorage.setItem('producto', productoSctring);