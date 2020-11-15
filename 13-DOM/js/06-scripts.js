// const encabezado = document.querySelector('.contenido-hero h1');

// console.log(encabezado);

// console.log(encabezado.innerText); // si en el css el vissibility: hidden, no lo va a encontrar
// console.log(encabezado.textContent);// si lo va a encontrar
// console.log(encabezado.innerHTML); // se trae el html

// extraer el texto con encadenamiento 
const encabezado = document.querySelector('.contenido-hero h1').textContent;

console.log(encabezado);

//document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

// console.log(imagen);