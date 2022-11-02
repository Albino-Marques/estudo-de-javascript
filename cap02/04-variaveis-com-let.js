//Variáveis
//Utilizar "let" pois a "var" aparentemente é mais antiga.
// Importante, sempre declarar variáveis com nomes significativos.
// Não se pode começar o nome de uma variável com número.
// Nome de variáveis não pode conter espaços ou traços.
/* Usar a formatação de variáveis camelCase, por exemplo:
let nomeCliente = 'Albino'
*/
// O JavaScript é Case-sensitive nas variáveis.
// Não podemos redeclarar variáveis com let.
// Declarar é diferente de atribuir!!!!
// NÃO UTILIZE VAR, UTILIZE LET.

let nome1 = "Matheus"; // variável de escopo local do tipo String
let nome2 = "Nathalia"; // variável de escopo local do tipo String

let a;

console.log(nome1, " nasceu em 1997.");
console.log("Em 2014 ", nome1, " conheceu ", nome2, ".");
console.log(nome1, " casou-se com ", nome2, " em 2025.");
console.log(nome2, " teve 1 filho com ", nome1, " em 2026.");
console.log("O filho de ", nome1, " se chama Ragnar.");

let nome; // Uma variável declarada sem valor atribuido, constará como undefined
nome = "João"; // Inicializando a variável
console.log(nome);
nome = "Albino"; // Alterando o valor da variável
console.log(nome);

/* O que não fazer para é após já ter declarado a varável (como na linha 17) declará-la novamente como:
let nome;
console.log('')

Pois irá retornar um erro informando que a variável já está declarada. Como é possível constatar ao descomentar esse trexo de códio para teste. 
*/

// Tabém não é possível criar variáveis com palavras reservadas da linguagem, como if, else, var e afins.
