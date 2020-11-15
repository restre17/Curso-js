const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {  //keyup, blur: se activa cuando entra a escribir y luego das click por fuera
        if(e.target.value === '')                       // input ; escucha todo menos el blur
            console.log('fallo la validacion');
});