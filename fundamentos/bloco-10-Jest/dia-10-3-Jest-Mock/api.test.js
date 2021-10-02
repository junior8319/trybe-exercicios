/**
 * Mock  e funções assíncronas
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/mock-e-funcoes-assincronas/2ddfb4bc-3fbd-441b-bf86-834c69407500?use_case=next_button
 * 
 * jest.spyOn();
 * mockReset();
 * mockResolvedValue();
 * toHaveBeenCalled();
 * toHaveBeenCalledTimes();
 * .resolves.toBe()
 * mockRejectedValue();
 * .rejects.toMatch();
 * 
 */

const api = require("./api");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  console.log(apiURL)
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});
