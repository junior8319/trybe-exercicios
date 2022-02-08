const { askName, askAge, askHeight, askWeight } = require('./asks');
const bmiCalc = require('./bmiCalc');

const bmi = bmiCalc().toFixed(2);

console.log(`Olá, ${askName}. Você hoje tem ${askAge} anos de idade e seu IMC para o peso ${askWeight.toFixed(2)}kg e altura ${askHeight.toFixed(2)}m é ${bmi}`);

if (bmi > 40) {
  console.log(`Com IMC ${bmi} , você encontra-se com Obesidade grau III ou IV`);
} else if (bmi > 34.9 && bmi < 40) {
  console.log(`Com IMC ${bmi} , você encontra-se com Obesidade grau II`);
}  else if (bmi > 29.9 && bmi < 35) {
  console.log(`Com IMC ${bmi} , você encontra-se com Obesidade grau I`);
}  else if (bmi > 24.9 && bmi < 30) {
  console.log(`Com IMC ${bmi} , você encontra-se acima do peso.`);
}  else if (bmi > 18.4 && bmi < 25) {
  console.log(`Com IMC ${bmi} , seu peso está normal`);
} else {
  console.log(`Com IMC ${bmi} , você está abaixo do peso (magreza)`);
}