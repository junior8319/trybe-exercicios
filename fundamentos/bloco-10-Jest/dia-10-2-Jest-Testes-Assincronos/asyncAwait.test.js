/**
 * Testando códigos Async/Await:
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/89c267cf-1085-4bef-868c-a9c25fb1c47f/asyncawait/eb230db1-522f-4187-9f40-3bcc39425468?use_case=next_button
 */

const findAnimalsByType = require('./findAnimalsByType');

test('Testando com async/await', async () => {
  const listDogs = await findAnimalsByType('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

test('Testando com async/await, testando o reject', async () => {
  expect.assertions(1);
  try {
    await findAnimalsByType('Lion');
  } catch (error) {
    expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
  }
});

/**
 * Também é possivel combinar async/await com .resolves/.rejects:
 */

/**
 * describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      await expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(findAnimalsByType('Lion')).rejects
        .toEqual(new Error('Não possui esse tipo de animal.'));
    });
  });
});
 */
