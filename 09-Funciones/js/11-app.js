const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node');

//arrond function

const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('Algo'));
console.log(aprendiendo3('Algo', 'con'));