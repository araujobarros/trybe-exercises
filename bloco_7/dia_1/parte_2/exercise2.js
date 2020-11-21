const  longestWord = (frase) => {
  const listaPalavras = frase.split(" ")
  let maiorSomaLetras = 0
  let maiorPalavra = ""
  for (let palavras = 0; palavras < listaPalavras.length; palavras += 1) {
    let palavra = listaPalavras[palavras];
    let somaLetras = 0
    for (let letras = 0; letras < palavra.length; letras += 1){
      somaLetras += 1 
    }
    if (somaLetras >= maiorSomaLetras) {
      maiorSomaLetras = somaLetras
      maiorPalavra = listaPalavras[palavras];
    }
  }
  console.log(maiorPalavra);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")

// let frase = ("Antônio foi parangamicutirumirruaro no banheiro e não sabemos o que aconteceu")
// console.log(frase.split(" "))
// let listaPalavras = frase.split(" ")

// let maiorSomaLetras = 0
// let maiorPalavra = ""
// for (let palavras = 0; palavras < listaPalavras.length; palavras += 1) {
//   console.log(listaPalavras[palavras]);
//   let palavra = listaPalavras[palavras];
//   let somaLetras = 0
//   for (let letras = 0; letras < palavra.length; letras += 1){
//     somaLetras += 1 
//   }
//   if (somaLetras >= maiorSomaLetras) {
//     maiorSomaLetras = somaLetras
//     maiorPalavra = listaPalavras[palavras];
//   }
// }
// console.log(maiorPalavra);
// console.log(maiorSomaLetras);