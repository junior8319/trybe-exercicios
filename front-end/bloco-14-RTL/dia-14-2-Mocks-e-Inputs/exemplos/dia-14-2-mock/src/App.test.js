import { render} from '@testing-library/react';
import App from './App';

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

describe('Verifica se as funções estão executando corretamente com simulações', () => {
  render (<App />);
  it('testa se foi chamada a função divisivelPorDois()', () => {
    divisivelPorDois = jest.fn();
    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
  });

  it('testa se a função divisivelPorDois() retorna o valor esperado.', () => {
    divisivelPorDois = jest.fn().mockReturnValue(true);

    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
    expect(divisivelPorDois()).toBe(true);
  });

  it('testa quantas vezes a função divisivelPorDois() foi chamada.', () => {
    divisivelPorDois = jest
      .fn()
      .mockReturnValue('valor padrão')
      .mockReturnValueOnce('primeira chamada')
      .mockReturnValueOnce('segunda chamada')

    expect(divisivelPorDois).toHaveBeenCalledTimes(0);
    
    expect(divisivelPorDois()).toBe('primeira chamada');
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);
    
    expect(divisivelPorDois()).toBe('segunda chamada');
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);
    
    expect(divisivelPorDois()).toBe('valor padrão');
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });
});
