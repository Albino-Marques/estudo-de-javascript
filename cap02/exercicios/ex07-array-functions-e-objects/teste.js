function escopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoform(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const idade = form.querySelector(".idade");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    const cabelo = form.querySelector(".cabelo");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      peso: peso.value,
      altura: altura.value,
      cabelo: cabelo.value,
    });

    resultado.innerHTML += `<p>Nome: ${nome.value} | Sobrenome: ${sobrenome.value} | Idade: ${idade.value}</p><p>Peso: ${peso.value} | Altura: ${altura.value} | Cabelo: ${cabelo.value}</p><hr>`;
  }

  form.addEventListener("submit", recebeEventoform);
}
escopo();
