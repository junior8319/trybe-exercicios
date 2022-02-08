const { askName, askAge, askHeight, askWeight } = require('./asks');
const bmiCalc = require('./bmiCalc');

console.log(`Olá, ${askName}. Você hoje tem ${askAge} anos de idade e seu IMC para o peso ${askWeight.toFixed(2)}kg e altura ${askHeight.toFixed(2)}m é ${bmiCalc().toFixed(2)}`);
