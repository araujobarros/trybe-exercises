// - 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;

for(i=0; i<n; i++){
    let asterix = "";
    for(j=0; j<n; j++) {
        asterix = asterix + "*";
    }
    console.log(asterix);
}

console.log("")
// - 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
console.log("")

for(i=0; i<n; i++){
    let asterix = "";
    for(j=0; j<=i; j++) {
        asterix = asterix + "*";
    }
    console.log(asterix);
}
console.log("")
//- 3 - Agora inverta o lado do triângulo. Por exemplo:
console.log("")

for(i=0; i<n; i++){
    let espaco = "";
    let asterix = "";
    for(j=1; j<(n-i); j++) {
        espaco = espaco + " ";
    }for(j=0; j<=i; j++) {
        asterix = asterix + "*";
    }
    console.log(espaco + asterix);
}

console.log("")
//4- Depois, faça uma pirâmide com n asteriscos de base:
console.log("")

for(i=0; i<n; i=i+2){
    let espaco = "";
    let asterix = "";
    for(j=1; j<(n-i); j=j+2) {
        espaco = espaco + " ";
    }for(j=0; j<=i; j++) {
        asterix = asterix + "*";
    }
    console.log(espaco + asterix);
}

//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

for(i=0; i<n; i=i+2){
    let espaco = "";
    let asterix = "";
    for(j=1; j<(n-i); j=j+2) {
        espaco = espaco + " ";
    }
    if (i===0 || i==(n-1)){
        for(j=0; j<=i; j++) {
            asterix = asterix + "*";
        }
    console.log(espaco + asterix);
    } else {
        console.log("teste")
    }
}