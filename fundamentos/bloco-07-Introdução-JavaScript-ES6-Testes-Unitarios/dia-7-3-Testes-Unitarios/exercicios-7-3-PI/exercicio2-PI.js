const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const testIfThisIsFunction = () => {
  assert.strictEqual(typeof myRemove, 'function', 'Erro: Isto não é do tipo função.');
}
testIfThisIsFunction();

const exercicio1 = () => {
  const arrayToTest = [1,2,3,4];
  const itemToRemove = 3;
  const expectedArray = [1,2,4];
  const resultantArray =  myRemove(arrayToTest, itemToRemove);
  assert.strictEqual(resultantArray, expectedArray, `Erro: A função retornou ${resultantArray} e deveria ter retornado ${expectedArray}`);
}
exercicio1();