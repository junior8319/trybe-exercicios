/**
 * Dia 10.2:
 * Matchers .resolves / .rejects
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/89c267cf-1085-4bef-868c-a9c25fb1c47f/matcher-resolves-rejects/5dd0134c-75c2-46a5-896b-8beb6e9a9f68?use_case=next_button
 */
const findAnimalsByType = require('./findAnimalsByType');

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect(findAnimalsByType('Lion'))
        .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    });
  });
});
