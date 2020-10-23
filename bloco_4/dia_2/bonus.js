let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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