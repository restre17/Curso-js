const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion... numero ${id}`);
        },
        pausar: function(){
            console.log(`Pausando Cancion numero`);
        }
}

reproductor.borrar = function(id){
    console.log(`Borrando cancion numero ${id}....`);
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
