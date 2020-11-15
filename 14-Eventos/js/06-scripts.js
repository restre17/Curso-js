//event Bubbling


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();   /////           evita que se ejecute el mismo evento en otras ventanas que esten por debajo
    console.log('click en card');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

