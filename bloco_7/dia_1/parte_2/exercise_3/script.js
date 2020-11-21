
const contador = () => {
  const botaoContador = document.querySelector("body > button");
  let soma = 0;
  botaoContador.addEventListener('click',() => {
  soma += 1;
  let marcador = document.querySelector("body > div");
  marcador.innerText = soma;
  })
}

contador();

// const botaoContador = document.querySelector("body > button");
// let soma = 0;
// botaoContador.addEventListener('click',() => {
// soma += 1;
// let marcador = document.querySelector("body > div");
// marcador.innerText = soma;
// })
