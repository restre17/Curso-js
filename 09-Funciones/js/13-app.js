const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion... numero ${id}`),
    pausar: () => console.log(`Pausando Cancion numero`),
    borrar:  id => console.log(`Borrando cancion numero ${id}....`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`anadiendo ${cancion}`);
    },
    get obtenerCanciion( ){
        console.log(`${this.cancion}`);
    } 
}


reproductor.nuevaCancion = 'Enter sandam';
reproductor.obtenerCanciion;


reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
