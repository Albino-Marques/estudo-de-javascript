/* 
Ma avaliação de curto-circuito, pode-se deixar o código mais limpo ao sintetizar condicionais de forma sucinta usando esta avaliação.

&& -> false && true -> false "Verifica o valor." Este precisa que todos na expressão seja, verdadeiros, caso contrário retorará falso. No caso da avaliação de Curto-Circuito, ele irá retornar o primeiro valor falso caso tenha, e encerrará o processo ali mesmo. 

|| -> false || true -> true "Verifica o valor." Este só precisa que um valor seja verdadeiro e ele considerará a expressão inteira verdadeira e encerrará o processo quando encontrá-la e irá retorná-la.

FALSY - Valores que são considerados falsos pelo JS {
false (literal)
0
'' ou "" ou `` (Strings vazias)
null / undefined
NaN
}
*/

console.log("Luiz" && "Maria"); //Retorna Maria pois é tudo verdadeiro (sem estar comparando nada) e por ser o ultimo valor da expressão.
console.log("Luiz" && "" && "Maria"); //Já nesta, retorna a String vazia, pois ela é uma FALSY.

function falaOi() {
  return "Oi";
}

const vaiExecutar = false;
let oi = "Albino";

console.log(vaiExecutar && falaOi()); // Retornará um False, pois o vaiExecutar é false.

console.log(oi && falaOi()); // Retornará um true, pois ambos os valores existe e são verdadeiros.

const corUsuario = null;
const corPadrao = "red";
// Usando estas duas constantes dessa forma, necessitaria de uma formula condicional para poder confirmar o caso. Entretanto, é possível, usando a Análise de Curto-Circuíto, chegar a solução de forma mais simples e fácil.

const usuarioCor = null;
const padraoCor = usuarioCor || "Preto";

console.log(padraoCor); // Retornando "Preto", pois é o primeiro valor verdadeiro da expressão.
