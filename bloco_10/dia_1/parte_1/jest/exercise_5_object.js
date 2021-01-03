const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// // implemente seus testes aqui
// assert.deepStrictEqual(obj1, obj2, 'Os objetos não são iguais');
// assert.deepStrictEqual(obj1, obj3, 'Os objetos não são iguais')

module.exports = { obj1, obj2, obj3 };
