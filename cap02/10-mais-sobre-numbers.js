// Esses número abaixo são os number's normais.
let num3 = 10.57851987321879; //number
let num2 = 2.5; //number
let num1 = 10; //number

console.log(num1 + num2); //A saída desse log será 3.5 pois irá somar os dois números. Mas e se quiséssemos concatená-los?

console.log(num1.toString() + num2); // O método .toString() converte o valor number para uma string temporariamente para poder utilizá-lo como tal, mas se utilizar o typeoff, ele ainda será considerado um number.

console.log(typeof num1); // Retornará como Number o tipo.

//O método .toString também pode dar valores binários de determinados valores:
console.log(num1.toString(2));

//E para converter definitivamente uma variável do tipo number para string pode-se usar o .toString() na nova declaração da mesma.
num1 = num1.toString();
console.log(typeof num1); //Sendo aqui a nova saída como String

//Para específicar um número de casas decimais.
console.log(num3.toFixed(2)); // Aqui terá no máximo duas casas decimais.

console.log(Number.isInteger(num1)); // Esse método retornará verdadeiro ou falso relativo ao tipo de número, sendo inteiro, retornará verdadeiro, caso contrário, falso.

console.log(Number.isNaN(num1)); // Esse método retornará verdadeiro ou falso relativo ao tipo de número, sendo um NaN (Not a Number), retornará verdadeiro, caso contrário, falso.

//IEEE 754-2008
let numb1 = 0.7; //number
let numb2 = 0.1; //number
//Problema para identificar numbers inteiros em alguns casos.

numb1 += numb2; //Deveria ser um 0.8, entretanto, gera uma dizima periódica de 0.79999999999999...
numb1 += numb2; //Deveria ser um 0.9, mas saí um 0.89999999...
numb1 += numb2; //Deveria ser um 1.0, mas saí um 0.99999999...

//Daria para resolver isso com um :
//numb1 = numb1.toFixed(2);
//Entretanto, ao consultar se esse number é inteiro temos um retorno falso, pois o mesmo encontra-se como real em decorrência da norma IEEE 754-2008
console.log(Number.isInteger(numb1)); // Retorna um false;
console.log(numb1);

//Para resolver isso pode-se usar:
numb1 = parseFloat(numb1.toFixed(2)); //Que irá determinar fixamente que ele é um número flutuante (real) e que as alterações e movimentações de virgula podem ser consideras para gerar um inteiro.

console.log(Number.isInteger(numb1));
console.log(numb1);

//Como também daria para resolver com um Number() no lugar de parseFloat():

numb1 = Number(numb1.toFixed(2));
console.log(Number.isInteger(numb1));
console.log(numb1);

//Também dá para fazer com conta... como por exemplo.

numb1 = (numb1 * 100 + numb2 * 100) / 100; // Aqui retornará 0.8
numb1 = (numb1 * 100 + numb2 * 100) / 100; // Aqui retornará 0.9
numb1 = (numb1 * 100 + numb2 * 100) / 100; // Aqui retornará 1.0

console.log(numb1);
console.log(Number.isInteger(numb1));
