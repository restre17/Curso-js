
// declaracion de funcion (funtion declaration) se puede llamar antes de iniciarla

sumar(5,2);
sumar2();
function sumar(n1, n2){
    console.log(n1+n2);
}

// Expresion de funcion ( function expression)  no se puede llamar sin iniciarla

const sumar2 = function(){
    console.log(3+3);
}

