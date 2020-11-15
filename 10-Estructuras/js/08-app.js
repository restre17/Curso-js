const autenticado = true;

//if(autenicado == true) mala practica
if(autenticado){
    console.log('esta autenticado');
}


const   puntaje = 400;

// buenas practicas

function revisarPuntaje(){
if(puntaje > 400){
    console.log('Excelente..');
    return;
}

if(puntaje> 300){
    console.log('Buen puntaje...')
    return;
}

}

revisarPuntaje();