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

test('Simula que a função agora recebe 2 número e calcula a divisão', () => {
  const numberA = 20;
  const numberB = 5;
  genRandomNumber = jest.fn().mockImplementation((a, b) => a / b);
  expect(genRandomNumber(numberA, numberB)).toBe(4);
  expect(genRandomNumber).toBeCalled();
  expect(genRandomNumber).toBeCalledTimes(1);
});

describe('Teste(s) do exercício 3', () => {
  it('Testa a função com 3 parâmetros, retorna a multiplicação e mais', () => {
    const numberA = 20;
    const numberB = 5;
    const numberC = 18;
    genRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(genRandomNumber(numberA, numberB, numberC)).toBe(1800);
    expect(genRandomNumber).toBeCalled();
    expect(genRandomNumber).toBeCalledTimes(1);
  });
});