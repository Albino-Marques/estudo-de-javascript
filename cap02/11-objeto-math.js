let num1 = 9.49;
let num2 = Math.floor(num1); //O método Math.floor() serve para arredondar para o número inteiro mais próximo pra  baixo.
console.log(num2); //Sendo aqui a saída 9
let num3 = Math.ceil(num1); //O método Mayh.ceil() serve para arredondar para o número inteiro mais próximo pra cima.
console.log(num3); //Sendo aqui a saída 10
let num4 = Math.round(num1); //O método Mayh.round() serve para arredondar para o número, sendo que a partir de 0.50 ele arredonda para o número inteiro mais próximo para cima, e de 0.49 para baixo ele arredonda para o número inteiro mais próximo, para baixo.
console.log(num4); //Sendo aqui a saída 9

// Também, dentro do objeto Math tem o método .max(), que serve para expor o maior número de uma sequência numérica.
console.log(
  Math.max(1, 2, 3, 4, 5, 6, 10, 102, 15, -10, -50, 1500, 9, 27, 200)
); // Sendo aqui a saída o 1500.

// E o método .min(), que serve para expor o menor número de uma sequência numérica.
console.log(
  Math.min(1, 2, 3, 4, 5, 6, 10, 102, 15, -10, -50, 1500, 9, 27, 200)
); // Sendo aqui a saída o -50.

console.log(Math.random()); // O método .random() gera um número aleatório entre 0 e 1 sendo que o 1 nunca será incluso.
// Da ára usá-la para conseguir número aleatórios para variáveis e constantes úteis:
let aleatorio = Math.random() * (10 - 5) + 5; // como aqui por exemplo, que irá gerar números aleatóriamente entre 10 (que será o máximo) e 5 (que será o mínimo)
console.log(aleatorio);
// E se ainda quiser, dá para tirar as casas decimais com o Math.round().
aleatorio = Math.round(Math.random() * (10 - 5) + 5); //
console.log(aleatorio);

console.log(Math.PI); // Valor de PI

// Raiz quadrada de um número sem objeto

let number1 = 9;
console.log(number1 ** (1 / 2)); // Dessa forma é possível tirar a raiz quadrada de um número facilmente sem usar objetos ou funções.
// Também da para fazer ditero com numero real 0.5
console.log(number1 ** 0.5);

//Atentar-se que no JavaScript, é possível dividir um número por Zero 0, sendo que o retorno será Infinity, e considerará como verdadeiro, true.
console.log(100 / 0); // Retorno será Infinity;
