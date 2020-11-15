// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){
    // cuando agregas un curso presioando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        carritoHtml();
    });


    document.addEventListener('DOMContentLoaded', () => {

        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];                
        carritoHtml();         
        
     });
    
}



// funciones

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSelecionado);
    }
    
}

function eliminarCurso(e){
        if(e.target.classList.contains('borrar-curso')){
            const idCursoBorrar = e.target.getAttribute('data-id');      
           // console.log(idCursoBorrar);
            retirarCursoCarrito(idCursoBorrar);
        }
}

function retirarCursoCarrito(id){
    const cursos = articulosCarrito.map(curso => {
        if(curso.id === id){
            if(curso.cantidad > 1){
                curso.cantidad --;
                console.log('borrando curso');
                return curso;
            }else{
                return;
            }
                    
        }else {
            return curso;
        }
        
    })    

    articulosCarrito = cursos.filter(curso => curso !== undefined);
   // console.log(articulosCarrito);
    carritoHtml();
}

// lee el contenido del html al qu ele dimos clcick  extrae la informacion del curso

function leerDatosCurso (curso){
   // console.log(curso);

    // crear objero con el curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // verificar si ya existe el elmento en el carrito 
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if(existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad ++;       
                return curso;         
            }else {
                return curso;
            }
            
        })
        articulosCarrito = cursos;
    }else {
        // agregar elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    console.log(articulosCarrito);

    carritoHtml();
};



// muestra el carrito de compras en el html
function carritoHtml(){

    // limpiar el html
    limpiarHTML();
 
    

    //recorre el carrito y genera el html

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width = "100">
            </td>
            <td>${titulo} </td>
            <td>${precio} </td>
            <td>${cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `

        //agrega el html del carrito en el body
        contenedorCarrito.appendChild(row);
    })

    //guardar el carrito en localStorage
    guardarTCarrito();
}
// guarda carrito en ls
function guardarTCarrito(){    
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
   // console.log(TweetsString);
}

// elimina los cursos del tbody
function limpiarHTML(){
    // contenedorCarrito.innerHTML = ''; // forma lenta

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)  // mas eficiente para ejecutarse
    }
}