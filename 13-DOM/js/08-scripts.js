const navegacion = document.querySelector('.navegacion');

// console.log(navegacion);
// console.log(navegacion.childNodes); // los espacios en blanco o saltos de linea son considerados elementos y se muestra como text
// console.log(navegacion.children);  


// console.log(navegacion.children[1].nodeName); 
// console.log(navegacion.children[1].nodeType); 

const card = document.querySelector('.card');

// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

// traversing de hijo a padre

// console.log(card.parentElement.parentElement.parentElement);


// selcionar el siguiente elemento "Hermano"
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);   // seleciona un hermano anterior






