
const nav = document.querySelector('.navegacion');

// registrar un evento
// nav.addEventListener('click', () => {
//     console.log('DI Click');
// })
nav.addEventListener('mouseout', () => {
    console.log('Saliento de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => {
         console.log('Entrando a la navegacion');

         nav.style.backgroundColor = 'white';
     });



     