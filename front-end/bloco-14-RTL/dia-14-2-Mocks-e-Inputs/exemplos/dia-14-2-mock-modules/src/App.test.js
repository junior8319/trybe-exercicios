import { render } from '@testing-library/react';
import App from './App';

const math = require('../src/services/math');
jest.mock("../src/services/math");

describe('Simulando o módulo math.js com mock', () => {
  render(<App />);
  it('teste de simulação da implementação da função', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });
});

describe('Simulando o módulo math.js com spyOn', () => {
  // render(<App />);
  it('teste de simulação da implementação da função com spyOn', () => {
    const mockSomar = jest.spyOn(math, 'somar');

    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    expect((mockSomar(1, 2))).resolves.toBe(3);
  });
});

describe('Simulando com jest.fn().mockImplementation', () => {

  test("#somar", () => {
    // testando a implementação original, o mock e o mock resetado

    // implementação original
    expect(math.somar(1, 2)).resolves.toBe(3);

    // criando o mock e substituindo a implementação para uma subtração
    math.somar = jest.fn().mockImplementation((a, b) => a - b);

    math.somar(5, 1);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar(5, 1)).toBe(4);
    expect(math.somar).toHaveBeenCalledTimes(2);
    expect(math.somar).toHaveBeenLastCalledWith(5, 1);

    // resetando o mock
    math.somar.mockReset();
    expect(math.somar(1, 2)).toBe(undefined);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenLastCalledWith(1, 2);
  });
});

describe('Exemplo com jest.spyOn().mockImplementation()', () => {
  test("#somar", () => {
    // testando a implementação original, o mock e a restauração da função original

    // implementação original
    expect(math.somar(1, 2)).toBe(3);

    // criando o mock e substituindo a implementação para uma subtração
    const mockSomar = jest
      .spyOn(math, "somar")
      .mockImplementation((a, b) => a - b);

    math.somar(5, 1);
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar(5, 1)).toBe(4);
    expect(mockSomar).toHaveBeenCalledTimes(2);
    expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

    // restaurando a implementação original
    math.somar.mockRestore();
    expect(math.somar(1, 2)).toBe(3);
  });
});
