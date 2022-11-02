/*
Operadores Lógicos:

&& -> AND -> E -> Todas as condições precisam ser verdadeiras para retornar true.

|| -> OR  -> OU -> Apenas uma das condições precisa ser verdadeira para retornar true.

!  -> NOT -> NÃO -> Nega o valor da condição, invertendo este valor. 
*/

console.log(true && true); // Usando o operador "and" (&&), todas as expressões tem que ser verdadeiras para o resultado retornar verdadeiro. Caso contrário, sempre retornará false.
console.log(true && false); // Aqui retornará false.

const expressaoOr = true || false;
console.log(expressaoOr); // Retornará true, pois só um dos valores tem que ser true.

const usuario = "Albino";
const senha = "123456";

const vaiLogar =
  usuario === "Albino" || (usuario === "Arlindo" && senha === "1234der56"); // Aqui retornará true;

// Negação

console.log(true); //Sem a negação, o valor será True.
console.log(!true); //Entretando, com a negação, esse valor se inverte. Agora retornando False.
