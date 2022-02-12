// use the readline-sync library for ask to the user choose a script to run
const { questionInt } = require('readline-sync');

// make the list of available scripts
const scripts = [
  { name: 'Calcular IMC', script: '../d-22-1-imc/' },
  { name: 'Calcular velocidade média', script: '../d-22-1-avg-speed/' },
  { name: 'Jogo de adivinhação', script: '../d-22-1-sortition/' },
];

// initiate the mounting the message by mapping the scripts names
let message = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

// add an asking for choose to the message
message.unshift('Escolha um número para executar o script correspondente');

// format the message with line breaks
message = message.join('\n');

// assigns to a constant the index for the chosen script
const scriptNumber = questionInt(message) - 1;

// assigns the chosen script from the index
const scriptChosen = scripts[scriptNumber];

// if can't find a matching index, returns a error message
if (!scriptChosen) return console.log('Número inválido. Saindo.');

// if it can be found use the matching 'script' key to indicate what to run with the require method.
require(scriptChosen.script);