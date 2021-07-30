let numbers = [];
let control = 1;

for (i = 0; i < 25; i+=1) {
    numbers[i] = control;
    control += 1;
}

console.log(control);

console.log(numbers);

for (i = 0; i < numbers.length; i+=1) {
    console.log(numbers[i]/2);
}