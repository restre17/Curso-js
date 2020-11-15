// variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners(){
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);  // listener blur se acitva al salirse del formulario
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // reiniciar el formulario
    btnReset.addEventListener('click', resetearFormulario);

    //envia email
    formulario.addEventListener('submit', enviarEmail);
}

// funciones

function iniciarApp(){
   // console.log('iniciando');
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    
}

// valida el formuladio

function validarFormulario(e){

    if(e.target.value.length > 0){

        //eliminar mensajes de error
        const error = document.querySelector('p.error');       
        if(error)
            error.remove();

        e.target.classList.add('border', 'border-green-500');
        e.target.classList.remove('border-red-500');
    }else {
        e.target.classList.add('border', 'border-red-500');
        e.target.classList.remove('border-green-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){        

      //  const resultado = e.target.value.indexOf('@');
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');     
            if(error)  
                error.remove();

            e.target.classList.add('border', 'border-green-500');
            e.target.classList.remove('border-red-500');

               console.log('email valido');
        }else {           
            e.target.classList.add('border', 'border-red-500');
            e.target.classList.remove('border-green-500');
            mostrarError('El email no es valido');
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        console.log('pasaste la validacion');
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');

    }
   
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0 ){
        formulario.appendChild(mensajeError);
    }

    if(!btnEnviar.disabled){
        // btnEnviar.disabled = true;
        // btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
        iniciarApp();
    }
    
}

function enviarEmail(e){
    e.preventDefault();
    // console.log('enviando');
    //mostar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // despues de 3 segundos ocultar spinner y mostrar mensaje

    setTimeout(() => {          //setInterval se ejecuta repetitivamente
        spinner.style.display = 'none';
        console.log('desdepues de 3 segundos');

        // mensaje que se envio correctamente

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje se envio Correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() =>{
            parrafo.remove();
            resetearFormulario();
        },5000);
    },3000 );  // cada 1000 es un segundo
}

//funtion que reseta el formulario

function resetearFormulario(){
    formulario.reset();
    iniciarApp();
    console.log('reiniciando form');
}