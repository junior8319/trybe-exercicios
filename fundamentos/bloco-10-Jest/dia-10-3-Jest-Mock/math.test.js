/**
 * Usando Mock com módulos:
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/mockando-modulos/13d76d3b-ec08-40a8-836a-e0d8287646b3?use_case=next_button
 * 
 * jest.mock();
 * mockImplementation(func);
 * toHaveBeenCalledTimes();
 * toHaveBeenCalledWith(...args)
 * mockImplementationOnce()
 */

 const math = require('./math');
 jest.mock("./math");
 
 test("#somar", () => {
   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
 
   math.somar.mockImplementation((a, b) => a + b);
   math.somar(1, 2);
 
   expect(math.somar).toHaveBeenCalled();
   expect(math.somar).toHaveBeenCalledTimes(1);
   expect(math.somar).toHaveBeenCalledWith(1, 2);
   expect(math.somar(1, 2)).toBe(3);
 });
