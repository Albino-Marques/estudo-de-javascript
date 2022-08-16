//Arrays = lista ou coleções de coisas
// As posições sempre começam do 0, sendo essas posições englobando o elemento inteiro.
//               0        1        2
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos); //Aqui aparece todos os "alunos" dentro do Array
console.log(alunos[0]); //Aqui irá puxar somente o aluno na posição 0 (Luiz), que seria o primeiro.
console.log(alunos[2]); //Aqui irá puxar somento o aluno na posição 2 (João), que seria o ultimo.
alunos[0] = "Albino"; //Assim também é possível substituir valores de dentro do Array por posição de forma indivídual.
console.log(alunos); //Aqui o 'Albino' irá substituir o Luiz.
//Também da para adicionar indices sem problema.
alunos[3] = "Kauani";
console.log(alunos);
//Para saber o tamanho do array;
console.log(alunos.length);
//Para adicionar automaticamente em uma posição um valor.
alunos[alunos.length] = "Marcos";
alunos[alunos.length] = "Otávio";
alunos[alunos.length] = "Marcela";
console.log(alunos);
console.log(alunos.length);
//Para adicionar sempre ao final do array usa-se a função .push():
alunos.push("Willian", "Eduardo");
console.log(alunos);
console.log(alunos.length);
//Para adicionar sempre no começo do array usa-se .unshift():
alunos.unshift("Mirela", "Morgana");
console.log(alunos);
// Para remover um elemento do final do array usa-se a função .pop().
alunos.pop();
console.log(alunos);
//Também pode-se salvar o valor que foi removido com a função .pop() em uma variável.
const removido = alunos.pop();
console.log(alunos);
console.log(removido);

//Para remover um elemento do inicio do array usa-se a funcção .shift().
alunos.shift();
console.log(alunos);
//E também dá para armazenar os daddos que foram removidos em alguma variável.
const saido = alunos.shift();
console.log(alunos);
console.log(saido);
/*
LEMBRANDO QUE O INDICE EM TODAS AS SITUAÇÕES ACIMA SERÁ ALTERADO.
*/

//Para não alterar os indices e apagar um elemento ainda assim, usa-se o delete.
delete alunos[2];
console.log(alunos); //Retornará como empty e undefined
//
console.log(alunos.slice(0, 4)); // Aqui serão retornados somente os elementos presentes entre 0 e 4;
console.log(alunos.slice(0, -2)); // Aqui será retornado os elementos menos os últimos dois.

//

console.log(typeof alunos); //Retornará Object
//Para saber se está tratando realemente de arrays usa-se
console.log(alunos instanceof Array); //Retornará true ou false;

// MELHOR FORMA DE ADICIONAR DADOS NO ARRAY É ADICIONAR NO FIAL PARA NÃO USAR MUITA MEMÓRIA.
