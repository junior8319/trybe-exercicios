const { question, questionInt, questionFloat } = require('readline-sync');

const askName = question('Qual é o seu nome? ' );
const askAge = questionInt('Qual é a sua idade? ');
const askWeight = questionFloat('Qual é o seu peso? ');
const askHeight = questionFloat('Qual é a sua altura? ');

module.exports = { askName, askAge, askWeight, askHeight };