//sempre que abrir parenteses está chamando uma função.

//alert("Olá mundo!"); //Cria uma pequena janela no navegador na aba da página com a mensagem informada.
//Também pode ser escrito como window.alert(''); pois o alert é só um atalho do comando todo.
//O window é toda a janela front do navegador.

//confirm('Tem certeza?'); //Cria uma pequena janela no navegador na aba da página com a mensagem e dois botões para confirmar ou cancelar retornando valores boolean (true ou false).
//Assim como o alert, também pode ser escrita com window.confirm('');

//prompt('Digite o seu nome!'); //Cria uma caixa com uma mensagem e um campo para o usuário digitar uma informação solicitada. Tudo digitado pelo usuário no prompt será string.
//Assim como o alert e como o confirm, pode ser escrita com window.prompt('');

//O retorno de um valor como undefined pode indicar que não há nada cadastrado na memória com aquele valor.

//No caso dos valores que são atribuídos a algo na memória ou seus valores podem ser utilizado (como no caso da "confirm" ou do "prompt");

//const confirma = confirm('Realmente deseja apagar alguma coisa?');

//Com essas funções é possível pegar dados de input do navegador e atribuir em algumas variáveis para utilizá-las depois. Exemplo:
let num1 = prompt("Digite um número:");
let num2 = prompt("Digite agora outro número:");
num1 = Number(num1);
num2 = Number(num2);
const soma = num1 + num2;
alert(`A soma dos número digitados é : ${soma}`);
