let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Bonus - 3 - Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let newNumbers = []
for(let i = 0; i < numbers.length; i++){
    if (i !== (numbers.length-1)){
       newNumbers.push(numbers[i]*numbers[i+1]);
    } else {
        newNumbers.push(numbers[i]*2);
    }
}
console.log(newNumbers);

//Bonus - 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

for(let i = 1; i < numbers.length; i++){
    for(let j = 0; j < (numbers.length - i); j++){
        if ( numbers[j] > numbers[j+1]){
            let temp = numbers[j];
            numbers[(j)] = numbers[j+1];
            numbers[j+1]= temp;
        }
    }
}

console.log(numbers);

//Bonus - 2 - Ordene o array numbers em ordem crescente e imprima seus valores;

for(let i = 1; i < numbers.length; i++){
    for(let j = 0; j < i; j++){
        if ( numbers[i] > numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j]= temp;
        }
    }
}

console.log(numbers);

