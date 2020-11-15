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


//herencia

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return "Bienvenido al cajero de empresas";  // se reescribe
    }
}


const diego = new Cliente('diego', 500);
const empresa = new Empresa('playBoxMovil', 1000, 12345, 'prueba');
console.log(empresa);




console.log(diego.mostrarInformacion());