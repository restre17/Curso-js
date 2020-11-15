// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];



// for(let pendiente in pendientes){
//     console.log(pendiente);
// }


const automovil = {
    modelo: 'camaro',
    ano: 1991,
    motor: "6.6"
}

// for(let propiedad in automovil){
//     console.log(`${automovil[propiedad]}`);
// }

for (let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
}