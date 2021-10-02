/**
 * Por que retornamos o resultado do expect?
 * Porque quando usamos matchers, recebemos uma promise como resultado e retornamos uma promise gerada pela
 * cadeia de matchers ao invés de retornar uma promise gerada pela função.
 */

 describe('Jest', () => {
  test('Brincando com expect', () => {
    const expectA = expect(true).toBeTruthy();
    const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
    const expectC = expect(Promise.reject(new Error('ERROR')))
      .rejects.toEqual(new Error('ERROR'));
    console.log('expect', expectA);
    console.log('expect.resolves', expectB);
    console.log('expect.rejects', expectC);
  });
});

/**
 * impressão de log da linha 13 mostra undefined porque não tem os matchers
 * ao contrário das linhas seguintes(14 e 15).
 */
