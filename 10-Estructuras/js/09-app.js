const autenticado = true;
const puedePagar = true;

// operadores ternarios
console.log(autenticado && puedePagar? 'Si esta autenticado..' : 'No esta autenticado');

// if anidados con ternarios

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'esta autenticado pero no puede pagar' : 'No esta autenticado');

