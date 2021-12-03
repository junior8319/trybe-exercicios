/**
 * Exemplo de Setup(beforeEach) e Teardown(afterEach)
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/89c267cf-1085-4bef-868c-a9c25fb1c47f/setup-e-teardown/28e709e2-64e9-4086-b596-450a3fb66251?use_case=next_button
 * Aqui estão as funções a ser testadas:
 */

let cities = [];

function getCities() {
  return cities;
}

function retrieveCitiesFromCache() {
  cities.push('Fortaleza');
  cities.push('Belo Horizonte');
}

function requestCities() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      cities.push('Fortaleza');
      cities.push('Belo Horizonte');
      cities.push('São Paulo');
      cities.push('Recife');
      cities.push('Porto Alegre');
      cities.push('Goiânia');
      cities.push('Manaus');
      cities.push('Piauí');
      resolve();
    }, 200);
  });
}

function removeCity(city) {
  const index = cities.indexOf(city);
  if (index > -1) cities.splice(index, 1);
}

function isCity(name) {
  return cities.includes(name);
}

function resetCities() {
  cities = [];
}

module.exports = {
  resetCities,
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
};