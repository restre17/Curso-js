const cliente = {
    nombre: 'diego',
    saldo: 500
}

console.log(cliente);

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Diego', 700);

console.log(juan);