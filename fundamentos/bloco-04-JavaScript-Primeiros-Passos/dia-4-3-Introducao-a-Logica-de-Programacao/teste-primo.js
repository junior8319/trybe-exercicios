let num = 4;
let control = [];

for (let i = 1; i <= num; i+= 1) {

  if ( (num % i) === 0 ) {
    control.push(i);
  }
  
}
console.log("Divisores de " + num + ": " + control);
if (control.length <= 2) {
  console.log("Tendo apenas " + control.length + " divisor(es), " + num + " é primo");
} else {
  console.log("Tendo " + control.length + " divisores, " + num + " não é primo");
}