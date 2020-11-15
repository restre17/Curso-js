
// constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function(){
    /*  
        1 = amriacano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;
            break;

        default:
            break;
    }

    // leer el anio y reducir 3% por cada anio

    const AntiguedadYear = new Date().getFullYear() - this.year;

    cantidad -= cantidad*(AntiguedadYear*0.03);

    // si el seguro es basico se multiplica por un 30% mas y si es completo por 50% mas 

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else if(this.tipo === 'completo'){
        cantidad *= 1.50;
    }
    console.log(cantidad);
    return cantidad;
}

function UI(){}

//llena las opciones de los a;os

UI.prototype.llenarOpciones = () => {
    const   max = new Date().getFullYear(),
            min = max - 20;

    const selectYear = document.querySelector('#year');

  //  console.log('entro llenar opc')

    for(let i = max; i >= min; i--){
        const opt = document.createElement('option');
        opt.textContent = i;
        opt.value = i;
        selectYear.appendChild(opt);
    }
}

// muestra alertas en pantalla

UI.prototype.mostrarAlerta = (mensaje, tipo) => {

    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');

    }else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //insertar en el html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca, tipo, year} = seguro;
    let textoMarca;
switch (marca) {
    case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;

        case '3':
            textoMarca = 'Europeo'
            break;

        default:
            break;
}

    // crear el resultado en div
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo}</span></p>
        <p class="font-bold">Year: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
        `;

    const resultadoDiv = document.querySelector('#resultado');
   // limpiarHTML(resultadoDiv);
  
    //mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    console.log(spinner)
    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
}

// instanciar UI
const miUI = new UI();

document.addEventListener('DOMContentLoaded', () => {
   // console.log('entro llenar opc')
    miUI.llenarOpciones()
});

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    // selecionar marca
    const marca = document.querySelector('#marca').value;
    // selecionar year
    const year = document.querySelector('#year').value;
    //selecionar tipo
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        miUI.mostrarAlerta('Debes llenar todos los campos', 'error' );
        return;
    }
    miUI.mostrarAlerta('Cotizando....', 'correco' );
    
// ocultar las cotizaciones previas
const resultados = document.querySelector('#resultado div');
if(resultados){
    resultados.remove();
}


    //instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);

   const total = seguro.cotizarSeguro();
    miUI.mostrarResultado(total, seguro);
    
}

function limpiarHTML(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)  // mas eficiente para ejecutarse
    }
}