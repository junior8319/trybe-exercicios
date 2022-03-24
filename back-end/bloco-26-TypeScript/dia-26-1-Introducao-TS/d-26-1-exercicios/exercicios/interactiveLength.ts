import readline from 'readline-sync';
import * as utils from './utils';

const units = [
  "km",
  "hm",
  "dam",
  "m",
  "dm",
  "cm",
  "mm"
]

export const execute = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const baseUnityChoice = readline.keyInSelect(units, 'Escolha a unidade base pelo número:', { cancel: 'CANCELAR' });
  
  if (baseUnityChoice === -1) return console.log('Conversão cancelada.');
  
  const convertUnityChoice = readline.keyInSelect(units, 'Escolha a unidade resultante:', { cancel: 'CANCELAR' });

  if (convertUnityChoice === -1) return console.log('Conversão cancelada.');

  const baseUnity = units[baseUnityChoice];
  const convertUnity = units[convertUnityChoice];

  const resultMessage = utils.convert(value, baseUnity, convertUnity, units);

  console.log(resultMessage);
}
