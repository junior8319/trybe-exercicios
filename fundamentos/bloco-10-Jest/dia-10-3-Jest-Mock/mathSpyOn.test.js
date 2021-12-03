/**
 * Trabalhando com mock e funções originais
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/trabalhando-com-mock-e-funcoes-originais/6c8186af-aa26-4867-b813-81c4efab2792?use_case=next_button
 * jest.spyOn()
 */

 const math = require('./math');


 test("#somar sem async/await", () => {
   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
   const mockSomar = jest.spyOn(math, "somar");
 
   mockSomar(1, 2);
   expect(mockSomar).toHaveBeenCalled();
   expect(mockSomar).toHaveBeenCalledTimes(1);
   expect(mockSomar).toHaveBeenCalledWith(1, 2);
   expect(mockSomar(1, 2)).resolves.toBe(3);
   return expect(mockSomar(1, 2)).resolves.toBe(3);
 });
 test("#somar com async/await", async () => {
   // Como alternativa você pode usar async/await, nenhuma é superior a outra. Você pode combinar e apenas depende de qual estilo você acha que torna seus testes mais simples.
   const mockSomar = jest.spyOn(math, "somar");
 
   mockSomar(1, 2);
   expect(mockSomar).toHaveBeenCalled();
   expect(mockSomar).toHaveBeenCalledTimes(4);
   expect(mockSomar).toHaveBeenCalledWith(1, 2);
   await expect(mockSomar(1, 2)).resolves.toBe(3);
 });
