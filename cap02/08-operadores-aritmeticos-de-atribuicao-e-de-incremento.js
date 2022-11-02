//Para converter números em algumas operações matemáticas, contanto que não se use o operador "+", podese-se faze-las mesmo com string que o JavaScript entenderá. Por exemplo.
let test = 1;
let test1 = "2";
//Se eu somar essas duas variáveis com o operador "+" elas irão ser concatenadas, entretando se eu multiplicá-las, subtraílas ou dividi-las (e assim por diante) elas iráo ser reconhecidas como numbers e serão convertidas pelo próprio JavaScript.
console.log(test * test1); // a saída esperada devido aos tipos diferentes de valores seria uma concatenação ou um NaN (Not a Number), entretanto, sendo um número na string da variável o JavaScript entenderá e irá converte-lo como puder. Sendo assim a saída aqui será 2.

// Outras formas de converter dados são:

const number1 = 10;
const number2 = parseInt("5"); // o parseInt converte o valor da string (contanto que seja numérico) para inteiro.
console.log(number1 + number2); //saída aqui será 15 do tipo number ao invés de '105' do tipo string;

// Agora com número flutuantes ou reais.

const number3 = 10;
const number4 = parseFloat("5.2"); // o parseFloat converte o valor da string (contanto que seja numérico) para um número de ponto flutuante, ou real (com casas decimais).
console.log(number3 + number4); //saída aqui será 15.2 do tipo number ao invés de '105' do tipo string;

// Agora com o Number (com N maísculo especificamente) que irá sozinho definir o tipo do número com base no que ele detecta.

const number5 = 10;
const number6 = Number("5"); // o Number converte o valor da string (contanto que seja numérico) para um número, se este não tiver valores decimais, será um Inteiro.
const number7 = Number("5.5"); // o Number converte o valor da string (contanto que seja numérico) para um número, se este tiver valores decimais, será um Real ou número de ponto flutuante.
console.log(number5 + number6); //saída aqui será 15 do tipo number ao invés de '105' do tipo string;
console.log(number5 + number7); //saída aqui será 15.5 do tipo number ao invés de '105' do tipo string;
7;

/*
 * Aritméticos
 * "+" : Faz a adição | Faz a concatenação
 * "-" : Faz a subtração
 * "/" : Faz a divisão
 * "*" : Faz a multiplicação
 * "**" : Faz a potênciação
 * "%" : Faz o resto da divisão (que iria retornar um valor 0 para inteiro ou 1 para real)[excelente para confirmar se um número é par ou não]
 */

const num1 = "5";
const num2 = 10;
// Usando o operador atitmético em um console.log para "somar" estes dois, acabará por realizar uma concatenação (união de caracteres) por serem tipos diferentes (o primeiro uma string e o segundo um number), tornando assim o resultado todo uma string.
console.log(num1 + num2); //retorna o valor "510" devido a concatenação
console.log(typeof (num1 + num2)); //retorna o valor "String"
// O operador aritmético "+" serve tanto para somar matemáticamente (se tratando de valores do tipo number) quanto para unir valores (se tratando de valores do tipo string ou number+string)

const num3 = 5;
const num4 = 10;
console.log(num4 - num3); // retorna o valor 5 do tipo number
console.log(num3 * num4); // retorna o valor 50 do tipo number
console.log(num4 / num3); // retorna o valor 2 do tipo number
console.log(num3 ** 2); // retona o valor 25 do tipo number
let num5 = 10;
let num6 = 3;
console.log(num5 % num6); // retorna o valor 1 no tipo number relativo ao resultado da divisão de 10/3 ser igual a 3,333333 sendo este um número não inteiro (real) ou seja, o valor do resto de divisão é 1.

// Pode-se fazer a vontade contas com os valores necessários, mas lembrando que existe a precedência pré-determinada.

console.log(num2 + num3 + (num2 * num3) / num6 + num3 ** 2); // retornará algo como 56.66... seguindo a ordem de precedência.

// A ordem de precedência é tudo que está dentro de parenteses "()", depois a potenciação "**" depois a multiplicação "*", a divisão "/" e o resto de divisão "%" (sendo que estes seguirão entre si a precedência de quem for escrito primeiro da esquerda para a direita), e por último a soma/concatenação "+" e a subtração "-" (sendo que estes seguirão entre si a precedência de quem for escrito primeiro da esquerda para a direita).

//Operador de incremento.

let contador = 1;
contador++; // Isso informa para o programaque você que o valor da variável supradeclarada +1
console.log(contador); // Retorna 2 pois a variável contador tem seu valor inicial 1 mas o operador de incremento informa que deverá ser adicionado no valor dessa variável +1.

//Operador de incremento só pode ser usado em variáveis, jamais em constantes!

// O Operador de incremento pode ser usado tanto antes (++contador) quanto depois (contador++), a diferença é que na primeira opção, ele adiciona já o valor a variável e depois aponta ela, enquanto que na segunda ocorre ao contrário. Isso pode ser visto pelo console.log onde, ao declarar:
let cont = 1;
console.log(cont++); // retorno = 1
//Ele irá apontar ainda o valor um, sendo necessário mais um console.log para vizualizarmos o valor atualizado.
console.log(cont);
//Enquanto que com o operador de incremente antes, o valor será atribuído e depois apontado, sendo assim já demonstrado no primeiro console.log:
let cont1 = 1;
console.log(++cont1); // retorno = 2

//Operador de decremento:  Segue exatamente as mesmas regras do operador de incremente, com a diferença que ao invés de adicionar 1 (+1), ele subtrai 1 (-1).

let cont2 = 10;
console.log(--cont2); //retorna 9

// INCREMENTO E DECREMENTO SÓ FAZEM DE 1 EM 1
// PARA INCREMENTAR/DECREMENTAR MAIS DE UM PODE-SE FAZER DA SEGUINTE FORMA;
let cont3 = 0;
console.log(cont3 + 3); // retorna 3

//Ou pode-se fazer uma constante do número de valores incrementáveis/decrementáveis

const passo = 3;
let cont4 = 0;
console.log(cont4 + passo); //retorna 3

//Mas para reduzir isso, podemos fazer o seguinte.

cont4 += passo; // isso é igual a cont4 = cont4 + 3 que irá retornar 3
console.log(cont4); // retorna 3
cont4 += passo; // retorna 6
console.log(cont4); // retorna 6
cont4 += passo; // retorna 9
console.log(cont4); // retorna 9

// o "+=" pode ser feito com qualquer operador aritimético, como "*=", "-=", "/=" e e assim por diante.
// Esses operadores são chamados de Operadores de atribuição.
// Cuidar sempre referente a esses operadores com os tipos de dados. Operadores Aritméticos sempre com Number (com exceção do "+" que serve para concatenar.)
