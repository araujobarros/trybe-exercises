let custo, valor, custoTotal, lucro, lucroTotal;
custo = -10;
valor = 50;
custoTotal = 1.2*custo;
lucro = valor - custoTotal;
lucroTotal = lucro*1000

if (custo >=0 && valor >=0){
    console.log(lucroTotal)
}else {
    console.log("Alguma das ou ambas entradas são inválidas(menor que 0)")
}