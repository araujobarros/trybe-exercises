// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não f

function ehPalindromo (palavra){
let palavraMinusc = palavra.toLowerCase();
var palavraArray = palavraMinusc.split("");
var arrayInvertido =  palavraArray.reverse();
var palavraInvertida = arrayInvertido.join("")
  if (palavraInvertida === palavraMinusc) {
      return "SIM, SOU UM PALÍNDROMO";
  } else { return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO";
  }
}
console.log(ehPalindromo("Arara"))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaiorValor (lista){
  let maiorValor = lista[0];
  let maiorIndice = -1;
  for (let i in lista){
      if (lista[i] >= maiorValor){
          maiorValor = lista[i];
          maiorIndice = i;
      }
  }
  return maiorIndice;
}
console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]))


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function ehMaisLongo (nomes) {
  
  let nomeLongo = nomes[0];
  let tamanho = nomes[0].length;
  for (let i in nomes){
    if (nomes[i].length >=tamanho){
      tamanho = nomes[i].length;
      nomeLongo = nomes[i];
    }
  }
  return nomeLongo;
}
  console.log(ehMaisLongo(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


