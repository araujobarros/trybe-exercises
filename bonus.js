// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

//Objeto de referência
let romanosRef = {
  I: {
    valor: 1,
    caracter:"I"
  },
  V: {
    valor: 5,
    caracter:"V",
  },
  X: {
    valor: 10,
    caracter:"X",
  },
  L: {
    valor: 50,
    caracter:"L",
  },
  C: {
    valor: 100,
    caracter:"C",
  },
  D: {
    valor: 500,
    caracter:"D",
  },
  M: {
    valor: 1000,
    caracter:"M",
  },
}


//Lista Input - Aqui eu consegui comparar a lista imput com o objeto romanos e criar uma lista traduzida em inteiros
let listaRomana = ["C","M","X","L","I","V"];
let listaNumbers = [];
for(i in listaRomana){
  for(chave in romanosRef)
  if (listaRomana[i] === romanosRef[chave].caracter){
    listaNumbers.push(romanosRef[chave].valor)
  }
}
console.log(listaNumbers);





//Agora eu preciso somar da forma certa, Condicionar:
var soma = 0
for(let j = 0; j < listaNumbers.length; j++){
  if (j < listaNumbers.length){
    if (listaNumbers[j] < listaNumbers[(j+1)]){
      soma = soma - listaNumbers[j];
    } else{
      soma = soma + listaNumbers[j];
    }
  }else {
    soma = soma + listaNumbers[j]
  }
}

console.log(soma);





