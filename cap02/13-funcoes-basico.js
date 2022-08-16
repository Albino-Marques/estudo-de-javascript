function ola(nome) {
  console.log(`Bom dia ${nome}!`);
  return 123456; //Função só irá retornar algo para uma variável se aplicado o comando return!
} //Aqui não coloca o ponto e vírgula;

//Ola("Albino"); //Aqui coloca o ponto e vírgula.

const variavel = ola("Albino");
console.log(variavel);
// Para o valor da função ser atribuido a uma variável, é necessário a atribuição do comando "return".
//
function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
console.log(soma(2, 2));
console.log(soma(2, 10));
console.log(soma(2, 12));

//console.log(resultado); // Essa linha não irá dar retorno. Pois o valor de resultado está somente dentro da função soma, para ver seu valor, será necessário usar a "soma()".

//Caso queira deixar um valor pré-determinado para as variáveis interar de uma função para caso não seja atribuido valor a elas, é possível fazer da seguinte forma:

function soma2(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}
const resultado = soma2();
console.log(resultado); //Aqui o retorno será 2 pois automáticamente ao não atribuir nenhum valor as variáveis da função, ela irá pegar os valores anteriormente pré-determinados.

//Declaração de uma função dentro de uma variável/constante (função anônima);

const raiz = function (n) {
  return n ** 0.5;
}; //Nesse caso, quando eu estou criando uma função dentro de uma variável/constante, é necessário colocar o ponto e vígula no final.

console.log(raiz(25)); //Assim o retorno será 5
console.log(raiz(225)); //Assim o retorno será 5
console.log(raiz(16)); //Assim o retorno será 4

// Também é possível pegar valores através de um usuário, como por exeplo.

//n = prompt("Digite um valor:"); // Onde aqui será gerado no navegador a mensagem para digitar um valor, e esse valor será atribuído a variável n da função, que ao ser chamada, terá esse valor como referência.

// Também é possível utilizar a forma de declarar funções com o arrow function, onde ao invéz de escrever "funcion", utiliza-se um sinal de igual, seguido de um sinal de "maior que" (que aparenta uma flecha).

const potencia = (n, m = 2) => {
  // Melhor forma de criar uma função.
  return n ** m;
};

console.log(potencia(5));
console.log(potencia(8));
console.log(potencia(2, 4));

//Sendo uma função simples, é capaz de se colocar em uma única linha com o arrow function, exemplo:

const radiciacao = n => n ** 0.5; //Onde essa linha fará exatamente a mesma coisa que da linha 32 à 34.

console.log(radiciacao(25)); //retorno será 5

/*Na arrow function supracitada é possível deixar muito mais claro e limpo. Não é necessário usar os parenteses no primeiro determinando da função (se só houver um, se ouver mais de um é necessário os parenteses sim), sem a necessidade das chaves também, bem como a não necessidade da palavra "function" e nem mesmo a palavra "return". É uma excelente forma de escrever funções. */

/*Funções idealmente devem ser feitas menores e com uma especialidade somente, para que trabalhem melhor. É mais válido fazer várias funções, mas que cada uma seja especializada em uma coisa que faça bem, do que poucas funções que ficarão cheias de procedimentos lotando a memória da máquina que rodarão.*/
