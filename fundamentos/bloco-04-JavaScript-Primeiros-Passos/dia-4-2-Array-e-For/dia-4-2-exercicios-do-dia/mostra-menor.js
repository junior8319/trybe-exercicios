let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = numbers[0];

for (i = 0; i < numbers.length; i+=1) {
    if (numbers[i] < smaller) {
        smaller = numbers[i];
    }
}

console.log ("O menor valor é: " + smaller);
console.log ("Que está no índice: " + numbers.indexOf(smaller));