class Cliente{                  // clas declaration
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return "Bienvenido al cajero";
    }
}

const diego = new Cliente('diego', 500);


console.log(diego.mostrarInformacion());
console.log(Cliente.bienvenida());
// console.log(diego.bienvenida());  solo se puede llamar con la clase no con el objeto