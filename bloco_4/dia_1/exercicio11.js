let salarioBruto, INSS, salarioDeduzidoInss, IR, salarioLiquido;
salarioBruto= 6000 ;

if (salarioBruto >= 0 && salarioBruto <= 1556.94){
    INSS = salarioBruto * 0.08;
    console.log("Desconto INSS: ", INSS);
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    INSS = salarioBruto * 0.09;
    console.log("Desconto INSS: ", INSS);
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    INSS = salarioBruto * 0.11;
    console.log("Desconto INSS: ", INSS);
}else if (salarioBruto >= 5189.82){
    INSS = 570.88;
    console.log("Desconto INSS: ", INSS);
}else{
    console.log("Valor de salário bruto inválido");
}

salarioDeduzidoInss = salarioBruto - INSS
console.log("Salário deduzido o INSS: ", salarioDeduzidoInss)

if (salarioDeduzidoInss >= 0 && salarioDeduzidoInss <= 1903.98){
    IR = 0;
    console.log("Desconto IR: ", IR);
}else if (salarioDeduzidoInss >= 1903.99 && salarioDeduzidoInss <= 2826.65){
    IR = salarioDeduzidoInss * 0.075 - 142.80;
    console.log("Desconto IR: ", IR);
}else if (salarioDeduzidoInss >= 2826.66 && salarioDeduzidoInss <= 3751.05){
    IR = salarioDeduzidoInss * 0.15 - 354.80;
    console.log("Desconto IR: ", IR);
}else if (salarioDeduzidoInss >= 3751.06 && salarioDeduzidoInss <= 4664.68){
    IR = salarioDeduzidoInss * 0.225 - 636.13;
    console.log("Desconto IR: ", IR);
}else if (salarioDeduzidoInss >= 4664.68){
    IR = salarioDeduzidoInss * 0.275 - 869.36;
    console.log("Desconto IR: ", IR);
}

salarioLiquido = salarioDeduzidoInss - IR;
console.log("O salário líquido é: ", salarioLiquido)