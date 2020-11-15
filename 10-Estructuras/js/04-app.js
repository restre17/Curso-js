const dinero = 500;
const totalAPagar = 600;
const tarjeta = true;

if(dinero >= totalAPagar){
    console.log('Si podemos pagar');
}else if(tarjeta){
    console.log('Si puedo pagar con tarjeta');
}
else {
    console.log(' Fondos insuficientes');
}