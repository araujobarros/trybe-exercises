// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim',
};

console.log("Bem vinda: " + info.personagem);
console.log("___________________________________________________________________________________________")

// 2 - nsira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
console.log("")

console.log(info.recorrente);
console.log("___________________________________________________________________________________________")
// 3 - Faça um for/in que mostre todas as chaves do objeto.
console.log("")

for(chave in info){
  console.log(chave)
}

console.log("___________________________________________________________________________________________")
// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
console.log("")

for (chave in info) {
  console.log(info[chave]);
}

console.log("___________________________________________________________________________________________")
// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
console.log("")

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim',
};
for (chave in info2) {
  if(info[chave] !== info2[chave]){
    console.log(info[chave] + " e " + info2[chave]);
  } else {
    console.log("Ambos " + chave + "s");
  }
}