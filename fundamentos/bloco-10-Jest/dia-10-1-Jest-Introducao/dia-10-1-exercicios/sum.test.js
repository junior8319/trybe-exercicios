const sum = require('./sum');

describe('Testes da função sum()', () => {
  test('soma dois números', () => {
    expect(sum(5, 3)).toBe(8);
  });
  test('ao tentar executar a função sum() passando algo que não seja número, lança um erro', () => {
    expect(() => { sum('5', 3) }).toThrowError(new Error('os parâmetros precisam ser númericos'));
  });
});
  