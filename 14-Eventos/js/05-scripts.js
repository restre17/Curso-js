window.addEventListener('scroll', () =>{
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 800){
        console.log('el elemento ya esta visible');
    }else {
        console.log('aun no esta visible baja mas');
    }
   // console.log(ubicacion);
})