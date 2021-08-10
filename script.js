function apparitionsOfNumber (receivedNumber, receivedArray) {
    let indexesOfRepeated = [];
    for (let i = 0; i < receivedArray.length; i += 1) {
        (receivedNumber === receivedArray[i]) ? indexesOfRepeated.push(i) : false
    }
    return indexesOfRepeated.length
}

function apparitionsAreTooMuch (receivedNumbers) {
    let controlArray = [];
    for (let index = 0; index < receivedNumbers.length; index += 1) {
        (apparitionsOfNumber(receivedNumbers[index], receivedNumbers) >= 3) ? controlArray.push(receivedNumbers[index]) : false;
    }
    return controlArray.length >= 3;

}

function isValidArrayOfNumbers (receivedNumbers) {
    let validNumbers = [];
    for (receivedNumber of receivedNumbers) {
      (receivedNumber <= 9 && receivedNumber >= 0) ? validNumbers.push(receivedNumber) : validNumbers = [];
    }
    return validNumbers.length === 11;
  }
  
  function generatePhoneNumber (receivedNumbers) {
    if (receivedNumbers.length != 11) {
        return  'Array com tamanho incorreto.';
    } else if (!isValidArrayOfNumbers(receivedNumbers) || apparitionsAreTooMuch(receivedNumbers)) {
        return 'não é possível gerar um número de telefone com esses valores';
    } else {
        return receivedNumbers.join('').replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  }
  
// console.log(isValidArrayOfNumbers([1,2,9,9,6,2,5,4,4,3,1]));
// console.log(isValidArrayOfNumbers([1,2,9,9,6,2,-5,4,4,3,1]));
// console.log(isValidArrayOfNumbers([1,2,9,9,6,2,5,4,4,3,10]));
// console.log(findIndexesOfNumbers([1,2,9,9,9,2,5,4,4,3,1]));
// console.log(apparitionsOfNumber(9, [1,2,9,9,6,2,5,4,4,3,1]))
// console.log(apparitionsAreTooMuch([1,2,9,9,6,2,5,4,4,3,1]))
// console.log(apparitionsAreTooMuch([1,1,2,2,3,3,4,4,5,5,6]))
console.log(generatePhoneNumber([1,2,9,9,6,2,5,4,4,-3,1]))
console.log(generatePhoneNumber([1,2,9,9,6,2,5,4,4,3,1]))

