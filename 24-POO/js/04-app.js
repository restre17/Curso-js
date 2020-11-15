class Cliente{                  // clas declaration
    
    #nombre;    // campos privados 
    
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}

const diego = new Cliente();
diego.setNombre('diego');
console.log(diego.getNombre());