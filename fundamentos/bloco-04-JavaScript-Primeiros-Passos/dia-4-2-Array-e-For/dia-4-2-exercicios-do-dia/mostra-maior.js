let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigger = 0;

for (i = 0; i < numbers.length; i+=1) {
    if (numbers[i] > bigger) {
        bigger = numbers[i];
    }
}

console.log ("O maior valor é: " + bigger);
console.log ("Que está no índice: " + numbers.indexOf(bigger));