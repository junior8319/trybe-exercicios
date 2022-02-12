const { questionInt } = require('readline-sync');

let numberChosen = questionInt('Por favor, adivinhe um número inteiro de 0 a 10: ');

if (numberChosen < 0 && numberChosen > 10 ) {
  numberChosen = questionInt('Precisa ser inteiro e entre 0 e 10');
}

module.exports = numberChosen;
