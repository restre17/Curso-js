const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove(); // elimar elemento


// eliminar elemento desde el padre..


const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);