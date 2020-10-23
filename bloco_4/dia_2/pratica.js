let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(var i in numbers){
    console.log(numbers[i]);
}

// 2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let soma = 0;

for (var i in numbers){
    soma = soma + numbers[i];
}
console.log("A soma é: " + soma);

/* 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/

let media;
media = soma/numbers.length;
console.log("A média é: " + media);

// 4 -  Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if(media > 20) {
    console.log("valor maior que 20")
}else {
    console.log("valor menor ou igual a 20")
}

// 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o

let maiorValor = numbers[0];

for (var i in numbers){
    if (numbers[i] >= maiorValor){
        maiorValor = numbers[i];
    }
}
console.log("O maior valor é: " + maiorValor);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let qtdImpar = 0;
for (var i in numbers){
    if (numbers[i] % 2 !== 0){
    qtdImpar = qtdImpar + 1;
    }
}

if (qtdImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("Existem " + qtdImpar + " números ímpares")
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (var i in numbers){
    if (numbers[i] <= menorValor){
        menorValor = numbers[i];
    }
}
console.log("O menor valor é: " + menorValor);

// 8 - Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let newNumbers = [];

for(let i=1; i <= 25; i++){
    newNumbers.push(i);
}
console.log(newNumbers);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (var i in newNumbers) {
    console.log(newNumbers[i]/2)
}
