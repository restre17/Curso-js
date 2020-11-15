const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();     // previene la accion que tiene por defecto, ir a un enlace o enviar un formulario

    console.log(e);
    
}