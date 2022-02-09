const { questionFloat } = require('readline-sync');

const timeAsked = questionFloat('Quanto tempo (em minutos) durou a sua corrida? ');
const distanceAsked = questionFloat('Qual distância (em quilômetros) foi percorrida? ');

module.exports = { timeAsked, distanceAsked };
