/**
 * Mocks:
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/os-mocks/02e76170-56e7-4672-876a-8906690cb4af?use_case=next_button
 * 
 * jest.fn()
 * jest.mock()
 * jest.spyOn()
 */


const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});