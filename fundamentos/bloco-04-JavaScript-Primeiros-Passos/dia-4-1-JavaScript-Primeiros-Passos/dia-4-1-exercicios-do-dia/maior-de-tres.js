let valor1 = 60;
let valor2 = 70;
let valor3 = 80;

if (valor1 > valor2 && valor1 > valor3) {
    console.log("Maior é valor1: " + valor1);
} else if (valor2 > valor3 && valor2 > valor1) {
    console.log("Maior é valor 2: " + valor2);
} else if (valor1 === valor2 && valor2  === valor3) {
    console.log("valor1, valor2 e valor3 São estritamente iguais e valem: " + valor1);
} else {
    console.log("Maior é valor3: " + valor3);
}