/*
Entre 0 - 11 - Bom dia!
Entre 12 - 17 - Boa tarde!
Entre 18 - 23 - Boa noite!
*/

// IF pode ser usado sozinho!!!
// Sempre que utilizar a palavra ELSE, preciso de um IF antes!!!
// Eu posso ter vários ELSE IF's na checagem!!!
//Só posso usar um ELSE na checagem!!!
// Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE!!!

const hora = 24;

if (hora >= 6 && hora <= 11) {
  // Se a condição for verdadeira, o bloco dentro das chaves será executado.
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
  // Aqui entra o Se não, ou seja, se a condição acima não for executada, entrará nessa conidição.
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  // Aqui será mais uma condição caso a acima não seja executada.
  console.log("Boa noite!");
} else {
  console.log("Vai dormir desgraçado.");
}

const tenhoGrana = true;

if (tenhoGrana) {
  console.log("Vou sair de casa!");
}

// Posso deixar só o if caso só queira a condicional verdadeira.
