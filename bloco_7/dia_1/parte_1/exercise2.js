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
