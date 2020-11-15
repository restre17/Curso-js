function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){  // usar function ya que accede a las mismas propiedades del objeto
                                            // mientra el arrow function busca en el global
    //console.log('desde el nuevo proto');
    let tipo;

    if(this.saldo > 10000){
        tipo= 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.NombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}  Saldo: ${this.saldo}, Tipo de Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(valor){
    if(this.saldo >= valor){
        this.saldo -= valor;
        return `has retirado ${valor}, tu nuevo saldo es de ${this.saldo}.`;
    }else {
        return 'No tienes suficiente saldo';
    }
}

//instanciar  cliente

const diego = new Cliente('Diego', 6000);


console.log(diego.tipoCliente());
console.log(diego.NombreClienteSaldo());





