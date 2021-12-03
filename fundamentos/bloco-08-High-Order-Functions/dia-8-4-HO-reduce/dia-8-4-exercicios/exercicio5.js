const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accumulator, currentName) =>
    accumulator + currentName.split('').reduce((lettersAccumulator, currentLetter) => {
      if (currentLetter === 'a' || currentLetter === 'A') return lettersAccumulator + 1;
      return lettersAccumulator;
    }, 0), 0);
}
// Aprendida olhando no gabarito.

assert.deepStrictEqual(containsA(), 20);