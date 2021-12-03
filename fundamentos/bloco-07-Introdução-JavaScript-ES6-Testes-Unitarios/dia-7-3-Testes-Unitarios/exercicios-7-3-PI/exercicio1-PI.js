const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const exercicio1 = () => {
  const firstNumberToSum = 4;
  const secondNumberToSum = 5;
  const resultOfSum = sum(firstNumberToSum, secondNumberToSum);
  const expected = 9; 
  assert.strictEqual(sum(firstNumberToSum,secondNumberToSum), expected, `Erro: a função de soma ${firstNumberToSum}+${secondNumberToSum} = ${resultOfSum} não retornou o valor esperado (${expected}) no teste.`);
}
exercicio1();

const exercicio2 = () => {
  const firstNumberToSum = 0;
  const secondNumberToSum = 0;
  const resultOfSum = sum(firstNumberToSum, secondNumberToSum);
  const expected = 0; 
  assert.strictEqual(sum(firstNumberToSum,secondNumberToSum), expected, `Erro: a função de soma ${firstNumberToSum}+${secondNumberToSum} = ${resultOfSum} não retornou o valor esperado (${expected}) no teste.`);
}
exercicio2();

const exercicio3 = () => {
  const firstNumberToSum = 4;
  const secondNumberToSum = "5";
  assert.throws(() => { sum(firstNumberToSum, secondNumberToSum); });
}
exercicio3();

const exercicio4 = () => {
  const firstNumberToSum = 4;
  const secondNumberToSum = "5";
  assert.throws(() => {sum(firstNumberToSum, secondNumberToSum); }, /^Error: parameters must be numbers$/);
}
exercicio4();
