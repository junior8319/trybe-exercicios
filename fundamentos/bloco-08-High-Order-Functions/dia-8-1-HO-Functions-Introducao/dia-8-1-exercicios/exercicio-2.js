const generateNumber = () => parseInt(Math.random() * 5);
const isLuckyGuess = (guess, sortition) => {
  sortition = generateNumber();
  (guess === sortition) ? console.log('Parabéns, você ganhou!') : console.log(`Tente novamente ${guess}:${sortition}`);
}
isLuckyGuess(4, generateNumber);

//Resposta do gabarito
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
