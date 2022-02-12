const numberChosen = require('./sortition');

const randomNumber = (Math.random() * (10 - 0) + 0).toFixed(0);
console.log(`Número aleatório gerado ${parseInt(randomNumber)}`);
console.log(typeof parseInt(randomNumber));

module.exports = randomNumber;
