const { it, test, describe, expect } = require('@jest/globals');
const service = require('./service');
let { genRandomNumber } = service;

test('Simula função que gera números aleatórios', () => {
  const numberToMock = 10;
  genRandomNumber = jest.fn().mockReturnValue(numberToMock);
  expect(genRandomNumber()).toBe(10);
  expect(genRandomNumber).toHaveBeenCalled();
  expect(genRandomNumber).toBeCalledTimes(1);
});