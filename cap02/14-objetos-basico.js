// É possível alterar os valores de um array, mesmo dentro de uma const.

const array = [1, 2, 3];
console.log(array);
array.push(4);
console.log(array);
array[0] = "Luiz";
console.log(array);
//array = 'Outra'; /*Isso não é possível de fazer, pois estaria tentando atribuir um outro valor a constante, e não atribuindo valores ao array dentro da constante.*/

//Para criar um objeto usa-se as chaves, enquanto que para criar os array's usa-se os colchetes.

//objeto literal
const pessoa1 = {
  nome: "Albino",
  sobrenome: "Marques",
  idade: 25,
};

console.log(pessoa1.nome);

const pessoa2 = {
  nome: "Kauani",
  sobrenome: "Moraes",
  idade: 23,
};

console.log(pessoa2.nome);

// Função para criar pessoas

function criaPessoa(nome, sobrenome, idade) {
  // Função factory(que cria objetos)
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa3 = criaPessoa("Albino", "Santos", 25);

//Obs:  Argumento é o valor que é passado para o parâmetro, como no caso acima, onde "Albino" é o argumento passado para o parâmetro "nome".

/*
const criatura1 = criaPessoa('Albino', 'Santos', 25);
const criatura2 = criaPessoa('Kauani', 'Moraes', 25);
const criatura3 = criaPessoa('João', 'Xavier', 25);
const criatura4 = criaPessoa('Otávio', 'Monteiro', 25);
const criatura5 = criaPessoa('Matheus', 'Corrêa', 25);


console.log(criatura1.nome, criatura2nome);
*/

//Outra forma de criar a mesma função que criar objetos é a seguinte:

function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}
//Dessa forma fica mais resumido. Não sendo necessário apontar nome:nome e assim por diante, sendo que o JavaScript conseguirá interpretar.

const criatura1 = criaPessoa("Albino", "Santos", 25);
const criatura2 = criaPessoa("Kauani", "Moraes", 25);
const criatura3 = criaPessoa("João", "Xavier", 25);
const criatura4 = criaPessoa("Otávio", "Monteiro", 25);
const criatura5 = criaPessoa("Matheus", "Corrêa", 25);

console.log(criatura1.nome, criatura2.nome);

//

const pessoas1 = {
  nome: "Albino",
  sobrenome: "Santos",
  idade: 25,

  fala() {
    //não precisa da palavra "function" aqui.
    console.log("Olá mundo!");
  },
};

pessoas1.fala();
//Quando uma função está dentro de um objeto, ela é chamada de método.

const pessoas2 = {
  nome: "Albino",
  sobrenome: "Santos",
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade} anos.`); //neste contesto, o "this" representa o objeto "pessoas2"
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoas2.fala();
pessoas2.incrementaIdade();
pessoas2.fala();
pessoas2.incrementaIdade();
pessoas2.fala();
pessoas2.incrementaIdade();
pessoas2.fala();
pessoas2.incrementaIdade();
pessoas2.fala();
