const genRandomNumber = () => Math.floor(Math.random() * 100);
genRandomNumber();

const transformToUpperCase = (receivedString) => receivedString.toUpperCase();

const returnFirstLetter = (receivedString) => receivedString.slice(0, 1);

const concatStrings = (stringA, stringB) => stringA.concat(stringB);

module.exports = {
  genRandomNumber,
  transformToUpperCase,
  returnFirstLetter,
  concatStrings,
};
