    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const bigWord = names.reduce((acumulator, word) => acumulator + word );
  const characterList =  bigWord.split('')
  const count = (soma, character) => (character === 'a' || character === 'A') ? soma + 1 : soma;
  return characterList.reduce(count, 0)
}
// console.log(containsA())
assert.deepEqual(containsA(), 20);