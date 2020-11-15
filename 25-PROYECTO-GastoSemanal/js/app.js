//Variables y  Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    document.addEventListener('submit', agregarGasto);

}


//Classes

class Presupuesto{

    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        if(this.restante >= gasto.cantidad){
            this.gastos = [...this.gastos, gasto];
            this.restante -= gasto.cantidad; 
            return true;     
        }else {            
            return false;
        }
    };

    removerGasto(id){
        console.log(id);
        this.gastos = this.gastos.filter(gasto => {
            if(gasto.id != id){
                return gasto;
            }else {
                this.restante += gasto.cantidad;               
            }            
        });
    }
 }

class UI{
    mostrarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;      
    }

    mostrarAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        // mensaje
        divMensaje.textContent = mensaje;

        //insertar html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    
    agregarGastoList(gastos){

        const listado = document.querySelector('.list-group');
        limpiarHTML(listado);

        //crear el html
        gastos.forEach(gasto =>{
            const {nombreGasto, cantidad, id} = gasto 

            //
            const liGasto = document.createElement('li');
            liGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            liGasto.dataset.id = id;

            //agregar el html al gasto
            liGasto.innerHTML = `${nombreGasto} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`;

        // crear el botton de eliminar
            const button = document.createElement('a');
            button.classList.add('btn', 'btn-danger', 'borrar-gasto');
            button.innerText = 'Borrar X'
            button.addEventListener('click',() => {
            removerGasto(id)});
            
            //agregar al html
           
            liGasto.appendChild(button);
            listado.appendChild(liGasto);
        })
      //  console.log(listado);
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoActual){
        const {presupuesto,restante } = presupuestoActual;
        const divAlert = document.querySelector('.restante');
       // console.log(divAlert)
        if(restante > (presupuesto*0.5)){            
            divAlert.classList.add('alert-success')
            divAlert.classList.remove('alert-danger','alert-warning')            
            return;
        }
        if(restante > (presupuesto*0.25)){
            divAlert.classList.add('alert-warning')
            divAlert.classList.remove('alert-danger','alert-success' )
            return;
        }       
            divAlert.classList.add('alert-danger')
            divAlert.classList.remove('alert-warning', 'alert-success')
    }
}

const ui = new UI();
let presupuesto;



//Funciones

function removerGasto(id){
    presupuesto.removerGasto(id);
    const {gastos, restante} = presupuesto;
    ui.agregarGastoList(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);


}

function agregarGasto(e){
    e.preventDefault();
    // leer los datos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //validar
    if(nombreGasto ==='' || cantidad === '' ){
        ui.mostrarAlerta('Ambos campos sonobligatorios', 'error');
        //console.log('ambos campos son obligatorios');
        return;
    }
    if(isNaN(cantidad) || cantidad <= 0){
        ui.mostrarAlerta('La cantidad debe ser un numero y mayor que 0', 'error');
        return;
    }

    // generar un objero con el gasto
    const gasto = {nombreGasto, cantidad, id: Date.now()}
    // aniade un nuevo gasto
    if(presupuesto.nuevoGasto(gasto)){

        const {gastos, restante} = presupuesto;

        ui.mostrarAlerta('Gasto agregado correctamente');
        ui.agregarGastoList(gastos);
        ui.mostrarPresupuesto(presupuesto);
        ui.comprobarPresupuesto(presupuesto);
        formulario.reset();
    }else {
        ui.mostrarAlerta('El gasto sobrepasa el presupuesto', 'error');
    }  
}   

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt(' CUal es tu presupuesto?');
if(presupuestoUsuario === '' || presupuestoUsuario === null|| isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
    window.location.reload();
}

//presupuesto.setPresupuesto(presupuestoUsuario);
presupuesto = new Presupuesto(presupuestoUsuario);
ui.mostrarPresupuesto(presupuesto);
//console.log(presupuesto);
}

function limpiarHTML(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)  // mas eficiente para ejecutarse
    }
}