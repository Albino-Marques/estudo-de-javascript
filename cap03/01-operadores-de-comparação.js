/*

Operadores de comparação:

Maior que: >
Maior ou igual a: >=
Menor que: <
Menor ou igual a: <=
Igualdade: == (atentar-se ao fato de que são dois sinais de igual diferente do sinal de Atribuição, que é "=", somente um sinal de igual) [Só checa o valor! Ex: 1 == '1' retornará True]
Igualdade Estrita: === (Checa valor e tipo! Ex: 1 === '1' retorará False, pois por mais que sejam ambos 1, um deles é string e o outro é number.)
Diferença: != (Só checa o valor! Ex: 1 != '1' retornará False)
Diferença Estrita: !== (Checa valor e tipo! Ex: 1 !== '1' retorará True, pois por mais que sejam ambos 1, um deles é string e o outro é number.)
*/

/* >, >=, <, <= */
console.log(10 > 5); // Retornará True, pois 10 é maior que 5.
const comparacao = 15 >= 10;
console.log(comparacao); // Retronará True como o caso acima, pois o 15 é maior e já satisfaz a condição.
console.log(11 < 10); // Retornará False.
const comp = 10 <= 11;
console.log(comp); // Retornará True.

/* ==, ===, !=, !== */
const letra = "a";
const num1 = 10;
const num2 = 10;
const compa0 = num1 == num2;
console.log(compa0); // Retornar true.
const compa = num1 == letra;
console.log(compa); //Esse retornará False, pois o valor da variável letra não pode nem mesmo ser assosiada ao o 10.
const num3 = "10";
const compa1 = num2 == num3;
console.log(compa1); // Aqui irá retornar como verdadeiro, mesmo o tipo de um sendo Number e o outro String.
const compa2 = num2 === num3;
console.log(compa2); // Já aqui irá retornar como false, pois o operador de igualdade estrita irá comparar tanto o tipo quanto o valor.
console.log(num2 != num3); //Onde aqui retornará False, pois esse operador só checa os valores.
console.log(num2 !== num3); // Enquanto que esse retornará verdadeiro, pois o valor pode ser o mesmo, mas o tipo não, e ele checa o tipo também.

/*
        OBS: USAR PREFERENCIALMENTE SÓ OS DE COMPARAÇÃO ESTRITA (=== E !==).
*/
