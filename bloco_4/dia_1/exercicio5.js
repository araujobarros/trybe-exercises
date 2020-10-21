let a,b,c;
a=30,b=50,c=-100;
let soma = a+b+c;

if (soma === 180 && a>0 && b>0 && c>0) {
    console.log(true);
} else if (soma !== 180 && a>0 && b>0 && c>0) {
    console.log(false);
} else {
    console.log("Erro");
}
