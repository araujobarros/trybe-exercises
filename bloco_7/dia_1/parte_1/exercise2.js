const ordenation = (numberList) => {
  for (let index = 1; index < numberList.length; index += 1) {
    firstRun (numberList, index)
  } 
  console.log(`Os números ${numberList.join()} encontram-se ordenados de forma crescente!`) 
}

function firstRun (numberList, index) {
  for (let newIndex = 0; newIndex < numberList.length - index; newIndex += 1) {
    if (numberList[newIndex] > numberList[newIndex + 1]) {
        let aux = numberList[newIndex];
        numberList[newIndex]     = numberList[newIndex + 1];
        numberList[newIndex + 1] = aux;
    }
  }
}

const oddsAndEvens = [13, 3, 4, 10, 7, 2]
ordenation(oddsAndEvens);

//Bônus
oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);

function somaParSubtraiImpar (number) {
  if (number % 2 === 0) {
    return 10 + number;
  } else {
    return 10 -number;
  }
}

console.log(somaParSubtraiImpar(4));
//O resultado seria: 14  

console.log(somaParSubtraiImpar(5));
//O resultado seria: 5  

let soma = 0
let contador = 1
while (contador < 5){
  contador = contador +1
  soma = soma + contador;
  
}
console.log(soma);
console.log(contador);
