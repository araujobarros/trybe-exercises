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

console.log("")
//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
console.log("")

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
    } else if(i >= 2 && i<= (n-2)){
        let espacoMeio = "";
        for (j=1; j<= (i-1); j++){
            espacoMeio = espacoMeio + " "
        }
    console.log(espaco + "*" + espacoMeio +"*");
        
    }
}

console.log("");
//6- Faça um programa que diz se um número definido numa variável é primo ou não.
console.log("");

let number = 20;
let divisores = [];

for (let i=1; i<=number; i++) {
    if (number % i === 0) {
        divisores.push(i);
    }
}
console.log("Os divisores são: " + divisores)
if (divisores.length === 2) {
    console.log("É primo");
}else {
    console.log("Não é primo")
}