class Cliente{                  // clas declaration
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const diego = new Cliente('diego', 500);
console.log(diego);


const Cliente2 = class{             // clas expresion
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const diego2 = new Cliente2('diego2', 400);
console.log(diego2);