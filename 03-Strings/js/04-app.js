const producto = '        Monitor de 20"           ';
console.log(producto);
console.log(producto.length);

// Eliminar espacios en blanco del inicio
console.log( producto.trimStart());

// Eliminar espacios en blanco del final
console.log( producto.trimEnd());

console.log(producto.trimStart().trimEnd());

// Elimina espacios en ambos lados
console.log(producto.trim());