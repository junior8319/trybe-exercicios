const { it, test, describe, expect } = require('@jest/globals');
const service = require('./service');
let {
  genRandomNumber,
  transformToUpperCase,
  returnFirstLetter,
  concatStrings,
} = service;

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

describe('Testes do exercício 4:', () => {
  describe('A - fazer o mock para:', () => {
    const string1 = 'Primeira string';
    const string2 = 'Segunda string';
    const string3 = 'Terceira string';

    it('nova implementação da primeira função retornando string em letras minúsculas', () => {
      transformToUpperCase = jest.spyOn(service, 'transformToUpperCase');
      transformToUpperCase.mockImplementation((receivedString) => receivedString.toLowerCase());
      expect(transformToUpperCase(string1)).toBe('primeira string');
      
      // transformToUpperCase.mockReset(); //funções de limpeza não estão dando certo neste teste, mockRestore e mockReset retornam undefined
                                          // e mockClear não faz com que a função volte a executar da forma original.
      // console.log(transformToUpperCase('TESTE'));
      // expect(transformToUpperCase('minusculas')).toBe('MINUSCULAS');
    });

    it('nova implementação da segunda função retornando a última letra da string', () => {
      returnFirstLetter = jest.fn().mockImplementation((receivedString) => receivedString.slice(string1.length - 2, string1.length - 1));
      expect(returnFirstLetter(string2)).toBe('g');
    });

    it('implementa a terceira função de forma que receba 3 strings e as concatene', () => {
      const concat = jest.spyOn(service, 'concatStrings');
      const strings1And2 = concat(string1, string2);
      const newString = concat(strings1And2, string3);
      expect(newString).toBe(string1 + string2 + string3);
    });

  });
});