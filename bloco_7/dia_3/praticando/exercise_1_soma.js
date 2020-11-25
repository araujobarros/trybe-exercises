const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, '4 + 5 deve ser 9');

assert.strictEqual(sum(0, 0), 0, '0 + 0 deve ser 0');

console.log(sum(4,'5'));
// throw new Error('parameters must be numbers')

assert.strictEqual(sum(4, '5'), 9, 'Não utilize strings');
// throw new Error('parameters must be numbers')