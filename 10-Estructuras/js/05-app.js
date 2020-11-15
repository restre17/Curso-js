const metodosPago = 'efectivo';

switch(metodosPago){
    case 'efectivo':
        console.log(`pagaste con ${metodosPago}`);
        break;
    case 'cheque':
        console.log(`pagaste con ${metodosPago}`);
        break;
    default:
        console.log(`no has selecionado metodo de pago`);
        break;
}