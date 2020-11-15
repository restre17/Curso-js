
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

// pendientes.forEach(pendiente => console.log(pendiente))

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
})


// .map es igual al forEach solo que el map crea un arreglo nuevo y el foreach no 