const randomNumber = require('./genRandomNumber');
const numberChosen = require('./sortition');

console.log(`Número que você escolheu: ${numberChosen}`);

if (parseInt(numberChosen) !== parseInt(randomNumber)) {
  console.log('Não foi desta vez, tente novamente com o comando "npm run sorteio"');
} else {
  console.log('Parabéns, você ganhou e seu prêmio é: carregando...');
}
