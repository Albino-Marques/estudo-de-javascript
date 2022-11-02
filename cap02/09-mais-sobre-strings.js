// Se for preciso criar algum valor de variável onde na string seja necessário usar o mesmo tipo de aspas da que engloba a string, deve-se usar uma barra invertida "\" antes destas aspas, para que elas se tornem parte da string.

let umaString = 'Aqui é uma "Isso aqui continua a ser uma string".';
console.log(umaString);

// Da mesma forma que se necessário ter uma barra invertida dentro da string, será necessário colocar duas em sequência.

let outraString =
  "Aqui é outra string que simula um caminho de pasta no windows em rede começando por \\\\"; // Onde aqui foi inserido quatro barras invertidas para na saída no console, aparecer duas.
console.log(outraString);

// Todas as Strings são indexadas semelhante as arrays, ou seja, começando de 0 ad infinitum elas são numeradas da primeira (0) até a ultima.

//                    01234567891011121314151617181920212223242526272829303132333435
let stringIndexada = "Essa é uma string, e ela é indexada.";

console.log(stringIndexada[4]); // Sendo que o retorno desse console.log será um espaço em branco, que também é concebido como string dentro da mesma.
console.log(stringIndexada[8]); // Sendo que o retorno desse console.log será um "m" que está na oitava (8ª) posição do index da string.

// Também é possível ver algumas opções de chamar caracteres desse index, como o .charAt() após o nome da variável.
console.log(stringIndexada.charAt(8)); // Retorno será um "m", assim como a anterior, só que usando o método .charAt().

// O método .indexOf() serve para descobrir em qual posião inicia a palavra/letra selecionada contida na string começa.
console.log(stringIndexada.indexOf("i")); // onde aqui o retorno será 27º posição.
// Pode-se também usar uma posição específica para começar a procurar.
console.log(stringIndexada.indexOf("i", 3)); // onde aqui o retorno será 14º posição.

// O método .lastIndexOf() serpe para exatamente a mesma coisa que a anterior (indeOf) só que de trás pra frente.
console.log(stringIndexada.lastIndexOf("i")); // Retornará 27, pois não muda ainda o valor no index.
// E também pode ser usado com posição específica .
console.log(stringIndexada.lastIndexOf("i", 25)); // Aqui retornando 14 em decorrência da seleção do inicio ser a partir do 25 para trás.

// Pode-se procurar letras específicas através do método .search e pode-se usar o método .match procurar o indice:
console.log(stringIndexada.search(/é/)); // Onde aqui irá retornar o valor 5 que é a posição que se encontra o primeiro 'é'.
console.log(stringIndexada.match(/a-z/g)); // Essa é uma expressão regular que irá procurar todos os valores dentro do index que sejam letras de a à z minúsculos e irá retornar suas posições em um array. // Deu erro no teste, decobrir o por quê.

// O método .replace serve para substituir uma string por outra.
console.log(
  stringIndexada.replace(
    "Essa é uma string, e ela é indexada.",
    "Esse é um conjunto de caractéres, e eles são indexados."
  )
);
// Também é possível alterar todas as letras ou palavras determinadas por outras com o método .replace().
console.log(stringIndexada.replace(/a/g, "e"));

// Para saber o tamanho de uma string pode-se usar o método .length().
console.log(stringIndexada.length);

// Método .slice() serve para pegar um trecho específico da string.
console.log(stringIndexada.slice(7, 10)); // Aqui o retorno será "uma".

// Para dividir uma string, é possível usar a função .split(), onde será, entre parenteses, colocado o caractére que será usado para a divisão, criando assim um array com todos os valores separados.
console.log(stringIndexada.split(" "));

// Para transformar todos os caractéres de uma string em maiúsculo, usa-se o método .toUpperCase().
console.log(stringIndexada.toUpperCase()); // Onde fará com que toda a string fique em maiúsculo.
// E para transformar todos os caractéres de uma string e minúsculo, usa-se o método .toLowerCase().
console.log(stringIndexada.toLocaleLowerCase()); //Onde fará com que toda a string fique em minúscula.hnb v
