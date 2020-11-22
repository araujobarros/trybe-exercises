var lista = ["JavaScript", "CSS", "HTML", "Git", "Empatia"]
var listaOrdenada = lista.sort();

const trocaXPor = (nome) => {
  let stringDeterminada = "Tryber x aqui!"
  listaFrase = stringDeterminada.split(" ");
  for (let palavraIndex = 0; palavraIndex < listaFrase.length; palavraIndex += 1){
    if (listaFrase[palavraIndex] === "x") {
      listaFrase[palavraIndex] = nome;
    }
  }
  return listaFrase.join(" ");
}
console.log(trocaXPor ("Edson"));


const concatenar =  (paramTrocaXPor) => {
  let stringObject = {
    linha1: paramTrocaXPor,
    linha2: 'Minhas cinco principais habilidades são:',  
  }
  for (let skillIndex = 0; skillIndex < listaOrdenada.length; skillIndex += 1 ){
        stringObject[`'linha${(skillIndex+3)}`] = listaOrdenada[skillIndex];
      }
  stringObject.linha8 = '#goTrybe'
  let novaString = "";
  for (let key in stringObject) {
    novaString = (`${novaString}
    ${stringObject[key]}`)
  }
  return novaString
}
console.log(concatenar (trocaXPor ("Edson")));







// let stringDeterminada = "Tryber x aqui!"
// let paramentro = "bebeto";

// console.log(stringDeterminada.split(" "));
// listaFrase = stringDeterminada.split(" ");
// for (let palavraIndex = 0; palavraIndex < listaFrase.length; palavraIndex += 1){
//   if (listaFrase[palavraIndex] === "x") {
//     listaFrase[palavraIndex] = paramentro;
//   }
// }
// console.log(listaFrase.join(" "));



// var lista = ["JavaScript", "CSS", "HTML", "Git", "Empatia"]
// var listaOrdenada = lista.sort();

// let stringObject = {
//   linha1: trocaXPor ('Edson'),
//   linha2: 'Minhas cinco principais habilidades são:',  
// }

// for (let skillIndex = 0; skillIndex < listaOrdenada.length; skillIndex += 1 ){
//       stringObject[`'linha${(skillIndex+3)}`] = listaOrdenada[skillIndex];
//     }

// stringObject.linha8 = '#goTrybe'

// let novaString = "" 
// for (let key in stringObject) {
//   novaString = (`${novaString}
//   ${stringObject[key]}`)
// }


// console.log(novaString)