const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(myRemove([1, 2, 3, 4], 3))
// implemente seus testes aqui

// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O 3 deve ser sacado')

// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Não deve retornar [1, 2, 3, 4]')

// // Verifique se o array passado por parâmetro não sofreu alterações
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O 3 deve ser sacado')

// // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Nenhum número deve ser sacado')

module.exports = myRemove;