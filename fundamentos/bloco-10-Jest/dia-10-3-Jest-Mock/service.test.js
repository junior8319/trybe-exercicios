/**
 * Mocks
 * jest.fn():
 *  mockReturnValue(value);
 *  mockReturnValueOnce(value);
 * toHaveBeenCalledTimes(number); este exemplo está no course
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/mockando-funcoes/419f2d93-3118-49fb-b8e3-2e307ab08f72?use_case=next_button
 */

const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Sem simular comportamentos, pois este teste é somente para verificar se a função foi chamada
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)"); // mockReturnValue adicionada aqui

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)"); // aqui o comportamento simulado é testado.
});
