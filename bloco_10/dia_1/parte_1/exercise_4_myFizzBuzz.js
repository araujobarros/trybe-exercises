const assert = require('assert');
const { Module } = require('module');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// // implemente seus testes aqui

// //Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', '15 é divisível por 3 e 5. logo fizzbuzz');

// //Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// assert.strictEqual(myFizzBuzz(9), 'fizz', '9 é divisível por 3. logo fizz');

// //Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// assert.strictEqual(myFizzBuzz(10), 'buzz', '10 é divisível por 5. logo buzz');

// //Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// assert.strictEqual(myFizzBuzz(14), 14, '14 não é divisível por 3 e 5.');

// //Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// assert.strictEqual(myFizzBuzz('14'), false, 'Não é um número');

module.exports = myFizzBuzz;