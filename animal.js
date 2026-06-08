const animal = {
    nome: "Sofeio", //string
    especie: "Cachorro",
    idade: 3, //number
    tutor: false,
    vacinado: true
};

console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 3;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com a idade ${animal.idade} e possui sua vacina em dia(${animal.vacinado}).`);