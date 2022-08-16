const nomePessoa = "Albino Marques dos Santos";
const anoAtual = 2022;
let idadeAnos = 25;
let pesoKg = 98;
let alturaMetros = 1.67;
let imc = pesoKg / (alturaMetros * alturaMetros);
let anoNascimento = anoAtual - idadeAnos;

// Método de concatenação padrão. "Usando o '+'."
console.log(
  "Este é " +
    nomePessoa +
    ", ele tem " +
    idadeAnos +
    " anos e pesa " +
    pesoKg +
    "Kg."
);

// Método de concatenação padrão. "Usando a ','."
console.log(
  "Mede ",
  alturaMetros,
  "m e tem como IMC (Indice de Massa Corporal): ",
  imc,
  "."
);

// Método de concatenação com Tamplate Strings. "Usando a crase ' ` ' e '${}'."
console.log(`Nasceu no ano de ${anoNascimento}`); // Essa é sem dúvida a melhor forma de concatenar variáveis com strings e afins.
