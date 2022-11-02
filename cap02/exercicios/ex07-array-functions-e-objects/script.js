// IIFE - Função que é criada e auto-invocada automáticamente.

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  /*form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1)
        console.log('Enviado')
    };*/ //Está é uma forma de impedir o recarregamento da página ao submeter o formulário.

  function recebeEvendoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>Nome:${nome.value} | Sobrenome: ${sobrenome.value} | Peso: ${peso.value} | Altura: ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEvendoForm);
}
meuEscopo();
