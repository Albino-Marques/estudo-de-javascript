/* 
Tipos de valores Primitivos (valores imutáveis) : string, number, boolean, undefined, null (bigint e symbol). - Valor do dado é imutável - Valores copiados

Tipos de valores de Referência (valores mutáveis) : arrays, obect, function. - Valores passados por referência (mudou um mudou o outro)
*/

let a = "A";
let b = a; //Uma cópia
console.log(a, b);
// Aqui o valor de b é uma cópia de a, tanto que se alterado o valor de a
a = "Outro valor";
console.log(a, b);
//percebe-se que o valor de a alterou, mas o de b se mantem.

let a1 = [1, 2, 3];
let b1 = a1; //Aqui o b1 usa o a1 como referência, ou seja, se alterar o a1, alterará o b1.
console.log(a1, b1);
a1.push(4);
console.log(a1, b1);
//Onde a linha acima dará o mesmo resultado, mesmo só alterando o valor de a1.

//Se, através de array, tu quiser copiar dados de uma variável pra outra, é possível da seguinte forma:

let c1 = [...a1];
console.log(c1);
a1.push(5);
console.log(a1);
console.log(c1);
//Onde agora o valor de 'c1' é o valor de a1 quando ele foi copiado, e dessa forma, torna-se imutável nesta situação.
//Para isso utilizou-se o operado "..." (Spread).

//Essa situações citadas acima também funcionam com objetos.

const pessoa = {
  nome: "Albino",
  sobrenome: "Santos",
};

const pessoas = pessoa;

console.log(pessoas);
//sendo que aqui o "pessoas" aponta para o mesmo valor na memória que "pessoa", sendo que alterando "pessoa" alterará também "pessoas", e vice-versa.
