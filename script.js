function apparitionsOfNumber (receivedNumber, receivedArray) {
    let indexesOfRepeated = [];
    for (let i = 0; i < receivedArray.length; i += 1) {
        (receivedNumber === receivedArray[i]) ? indexesOfRepeated.push(i) : false
    }
    return indexesOfRepeated.length
}

function

console.log(apparitionsOfNumber(9, [1,2,9,9,6,2,5,4,4,3,1]))