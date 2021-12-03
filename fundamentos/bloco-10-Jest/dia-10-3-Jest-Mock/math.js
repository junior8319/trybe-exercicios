/**
 * Usando Mock com módulos:
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/mockando-modulos/13d76d3b-ec08-40a8-836a-e0d8287646b3?use_case=next_button
 * 
 * jest.mock();
 * mockImplementation(func)
 */

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(100); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
