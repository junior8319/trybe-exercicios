/**
 * Teste de callback com positivo verdadeiro usando done():
 */

//  test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

/**
 * Exemplo seguinte, há um problema no anterior
 * https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/89c267cf-1085-4bef-868c-a9c25fb1c47f/callbacks/266f6372-2fd3-4bf5-bc77-97deba9f3835?use_case=next_button
 */

//  test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done();
//     }
//   }, 500);
// });

/**
 * Mas ainda existe um detalhe a resolver:
 * É necessário passar o erro como parâmetro ao chamar done()
 */

 test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
