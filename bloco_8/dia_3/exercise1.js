    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const povoamento = (result, inArray) => result.concat(inArray);
  const concatenar = arrays.reduce(povoamento,[]);
  return concatenar;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);