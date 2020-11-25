const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let j = 1
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(j);
      j += 1;
    } else {
      results.push(characters[i]);
    }
  }
  return results.join("");
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const parameter2 = 'paralelepipido';
const result2 = 'p1r2l3l4p5p6d7';

const assert = require('assert');

assert.strictEqual(removeVowels(parameter), result);
assert.strictEqual(removeVowels(parameter2), result2);