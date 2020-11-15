//variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



//event listeners
eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', () => {
        // const tweetsStorage = JSON.parse(localStorage.getItem('tweets'));
        // if(tweetsStorage){
        //     tweets = tweetsStorage;
        //     console.log('llamando mostrar twees desde la carga');
        //     mostrarTweets();
        // }

        tweets = JSON.parse(localStorage.getItem('tweets')) || [];                 
            //console.log('llamando mostrar twees desde la carga');
         mostrarTweets();
        
     });
}





//Funciones
function agregarTweet(e){
    e.preventDefault();
    // text area
    const tweet = e.target.querySelector('#tweet').value;

    //validando el tweet
    if(tweet.length < 3){
        mostrarError('El tweet debe tener al menos 3 letras');
        return;
    }
    if(tweet.length > 30){
        mostrarError('El tweet debe tener menos de 30 letras');
        return;
    }

    tweetObj = {
        tweet,
        id: Date.now()
    }
    tweets = [...tweets, tweetObj];
    mostrarTweets();

    //limpiar el formulario
    formulario.reset();

  //  console.log(tweets);
}

//mostrar tweets en html

function mostrarTweets(){
    limpiarHTML();
    if(tweets.length > 0){
               
        tweets.forEach(tweet => {
        //  console.log(tweet);
      
            // crear el boton de eliminar
            const eliminarBtn = document.createElement('a');
            eliminarBtn.classList.add('borrar-tweet');
            eliminarBtn.innerText = 'X';

            // agregando el listener
            eliminarBtn.addEventListener('click', () => {
                eliminarTweet(tweet.id);
            });

              //crear el html
            const tweetHTML = document.createElement('li');
            // anadir el texto
            tweetHTML.textContent = tweet.tweet;

            //asignar el boton
            tweetHTML.appendChild(eliminarBtn);

            // insertando el html
            listaTweets.appendChild(tweetHTML);
        });
    }
    guardarTweets();
     
}


function eliminarTweet(id){
    
    tweets = tweets.filter(tweet => id !== tweet.id);
    mostrarTweets();
   // console.log(tweets)
}

function guardarTweets(){
    const TweetsString = JSON.stringify(tweets);
    localStorage.setItem('tweets', TweetsString);
   // console.log(TweetsString);
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)  // mas eficiente para ejecutarse
    }
}


// mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    // insertar el error
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);


    setTimeout(() => {
        mensajeError.remove();
    },3000);
}