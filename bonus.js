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




//Bonus 2 (Refatorei só no codewar)


//Transformo o número em uma string:
let numString1 = number1.toString()
console.log(numString1);
//para o número 2
let numString2 = number2.toString()
console.log(numString2);

//Transformo a string em uma lista de strings
var numStringList1 = []
for (let i = 0; i < numString1.length; i++){
  numStringList1.push(numString1[i]);
}
console.log(numStringList1);
//para o número 2
var numStringList2 = []
for (let i = 0; i < numString2.length; i++){
  numStringList2.push(numString2[i]);
}
console.log(numStringList2);

//Transformo a lista de strings numéricas em uma lista de inteiros
let listNumbers1 = []
for(let i = 0; i < numStringList1.length; i++){

  listNumbers1.push(parseInt(numStringList1[i]))
}
console.log(listNumbers1)

//para o número 2
let listNumbers2 = []
for(let i = 0; i < numStringList2.length; i++){

  listNumbers2.push(parseInt(numStringList2[i]))
}
console.log(listNumbers2)

//adicionar pelo inícioa uma lista auxiliar pra depois dar join e depois passar par inteiro

let listaFinal = [];
if (listNumbers1.length === listNumbers2.length) {
  for (let i = (listNumbers1.length - 1); i>=0; i--){
    for (let j = (listNumbers2.length - 1); j>=0; j--){
      if (i===j){
        let soma = listNumbers1[i] + listNumbers2[j];
        listaFinal.unshift(soma);
      }
    }
  }
  console.log(parseInt(listaFinal.join(""))) 
}else if (listNumbers1.length > listNumbers2.length){
  for (let i = (listNumbers1.length - 1); i>=0; i--){
    for (let j = (listNumbers2.length - 1); j>=0; j--){
      if (i===j + listNumbers1.length - listNumbers2.length){
        let soma = listNumbers1[i] + listNumbers2[j];
        listaFinal.unshift(soma);
      }
    }
  }
  for(let i = (listNumbers1.length - 1 - listNumbers2.length ); i >=0; i--){
    listaFinal.unshift(listNumbers1[i]);
  }
  console.log(parseInt(listaFinal.join("")))
}else {
  for (let i = (listNumbers2.length - 1); i>=0; i--){
    for (let j = (listNumbers1.length - 1); j>=0; j--){
      if (i===j + listNumbers2.length - listNumbers1.length){
        let soma = listNumbers2[i] + listNumbers1[j];
        listaFinal.unshift(soma);
      }
    }
  }
  for(let i = (listNumbers2.length - 1 - listNumbers1.length ); i >=0; i--){
    listaFinal.unshift(listNumbers2[i]);
  }
  console.log(parseInt(listaFinal.join("")))
}
  
/*Abaixo segue uma solução top do codeWar
function add(num1, num2) {


    num1 = num1.toString().split("").reverse().join("");
    num2 = num2.toString().split("").reverse().join("");

 

    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

 

    var returnString = "";
    for (var i = 0; i < num1.length; i++) {
        var int1 = parseInt(num1[i]);
        var int2 = parseInt(num2[i] || 0);
      
        returnString = (int1+ int2).toString()+returnString;
    }
    
    return parseInt(returnString);
}







