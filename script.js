let receivedNumbers = [1,2,9,9,6,2,5,4,4,3,1]
let testedNumber = 9
let indexesOfRepeateds = [];
for (let i = 0; i < receivedNumbers.length; i += 1) {
    (testedNumber === receivedNumbers[i]) ? indexesOfRepeateds.push(i) : false
}
console.log(indexesOfRepeateds)