const enlace = document.createElement('A');

//agregando el texto
enlace.textContent = 'Nuevo Enlace';

//agragando href
enlace.href = '/nuevo-enlace';


console.log(enlace);


//selecionar la navegacion

//const navegacion = document.querySelector('.navegacion');//
// navegacion.appendChild(enlace);// inserta al final

//navegacion.insertBefore(enlace, navegacion.children[1]);  // inserta el enlace antes de la pocion del hijo escojido.


// crear un card de forma dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoia', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$900 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info

const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// crear el card
const card = document.createElement('div');
card.classList.add('card');
/// asignar la imagen
card.appendChild(imagen);
//asignar la info
card.appendChild(info);


//selecionar donde va a ir la card

const contenedorCard = document.querySelector('.hacer .contenedor-cards');
contenedorCard.insertBefore(card, contenedorCard.children[1]);

console.log(contenedorCard);