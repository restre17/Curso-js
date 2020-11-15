function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const diego = new Cliente('Diego', 700);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(diego));


function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const DMRA = new Empresa('DIegomra', 15000, 'mankete');

console.log(formatearCliente(DMRA)); // asi normal toca crear otra funcion para extraer la informacion