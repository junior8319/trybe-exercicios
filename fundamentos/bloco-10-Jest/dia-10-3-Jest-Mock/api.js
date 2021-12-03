/**
 * Mock  e funções assíncronas
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/6c1997ca-324d-4e02-a2bd-12317d0b03cb/mock-e-funcoes-assincronas/2ddfb4bc-3fbd-441b-bf86-834c69407500?use_case=next_button
 */

function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { fetchURL };