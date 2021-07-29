let angulo1 = 60;
let angulo2 = 60;
let angulo3;

let soma;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    soma = angulo1 + angulo2 + angulo3;
    if (soma === 180) {
        console.log(soma);
        console.log(true);
    } else {
        console.log(soma);
        console.log(false);
    }
} else {
    console.log("ERRO! Algum ângulo informado é inválido.");
}
