const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo"); // Esse método serve para selecionar o elemento do HTML.
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = " ";
texto.innerHTML += `<p>A Raiz quadrada do seu número é ${numero ** 0.5}<p/>`;
texto.innerHTML += `<p>${numero} é inteiro?  ${Number.isInteger(numero)}<p/>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}<p/>`;
texto.innerHTML += `<p>${numero} arredondado para baixo fica: ${Math.floor(
  numero
)}<p/>`;
texto.innerHTML += `<p>${numero} arredondado para cima fica: ${Math.ceil(
  numero
)}<p/>`;
texto.innerHTML += `<p>${numero} com duas casas decimais fica: ${numero.toFixed(
  2
)}<p/>`;
/* 
Essa forma abaixo é a forma alterando todo o corpo da página HMTL, o que não é o ideal

const num = Number(prompt("Digite o seu número: "));
document.body.innerHTML += `<h1>Seu número é ${num}.</h1>`;
document.body.innerHTML += `<p>A Raiz quadrada do seu número é ${num ** 0.5}<p/>`;
document.body.innerHTML += `<p>${num} é inteiro?  ${Number.isInteger(num)}<p/>`;
document.body.innerHTML += `<p>É NaN? ${Number.isNaN(num)}<p/>`;
document.body.innerHTML += `<p>${num} arredondado para baixo fica: ${Math.floor(num)}<p/>`;
document.body.innerHTML += `<p>${num} arredondado para cima fica: ${Math.ceil(num)}<p/>`;
document.body.innerHTML += `<p>${num} com duas casas decimais fica: ${num.toFixed(2)}<p/>`;

*/
