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

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenorValor (lista){
  let menorValor = lista[0];
  let menorIndice = -1;
  for (let i in lista){
      if (lista[i] <= menorValor){
          menorValor = lista[i];
          menorIndice = i;
      }
  }
  return menorIndice;
}
console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3]))


// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaAteh(N){
  let soma = 0;

  for(let i =1; i<=N; i++){
    soma=soma + i;
  }
  return soma;
}
 console.log(somaAteh(5));




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

  // 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function finalIgual(word, ending){
  let soma = 0;

  for(let i= (ending.length-1); i>=0; i--){
    if(ending[i] === word[(i+word.length-ending.length)]) {
      soma=soma+1;
    }
  }
  if (soma === ending.length) {
    return true;
  }else {
    return false;
  }  
}
console.log(finalIgual("Trybe", "be"));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let lista =  [2, 3, 3, 5, 3, 2, 3]
let  maiorSoma = 0;
  for (i in lista) {
    let soma = 0;
    for (j in lista){
      if (lista[j] === lista[i]){
        soma = soma + 1;
      }
    }
    if (soma >= maiorSoma){
      maiorSoma = soma;
      maisRepetido = lista[i]; 
    }     
  }
console.log(maiorSoma);
console.log(maisRepetido);

  


