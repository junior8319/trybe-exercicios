function findBigger (v1, v2) {
    
  if (v1 > v2) {
    console.log("Maior é v1: " + v1);
  } else if (v1 === v2 ) {
    console.log("v1 e v2 São estritamente iguais e valem: " + valor1);
  } else {
    console.log("Maior é v2: " + v2);
  }
}
findBigger (41, 42);

function oneEvenOfThree (a, b, c) {

  if ((a%2 === 0) || (b%2 === 0) || (c%2 === 0)) {
    console.log(true);
  } else {
    console.log(false);
  }

}
oneEvenOfThree(1,3,5);

function triangleTest (angle1, angle2, angle3) {
  let sum;

  if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    sum = angle1 + angle2 + angle3;
    if (sum === 180) {
        console.log(sum);
        console.log(true);
    } else {
        console.log(sum);
        console.log(false);
    }
  } else {
    console.log("ERRO! Algum ângulo informado é inválido.");
  }

}
triangleTest(90, 45, 45);

function positivityTest (test) {

  if (typeof(test) === "number" && test > 0) {
    console.log("positive");
  } else if (typeof(test) === "number" && test < 0) {
    console.log("negative");
  } else if(typeof(test) === "number" && test === 0) {
    console.log("zero");
  } else {
    console.log("não é número: " + test);
  }

}
positivityTest(400);

function operators (a, b) {

  console.log("a: " + a + " e b: " + b);

  let soma = a + b;
  console.log("Soma: " + soma);

  let subtracao = a - b;
  console.log("Subtração: " + subtracao);

  let multiplicacao = a * b;
  console.log("Multiplicação: " + multiplicacao);

  let divisao = a / b;
  console.log("Divisão:" + divisao);

  let modulo = a % b;
  console.log("Módulo da divisão: " + modulo);

}
operators (100, 100);

function chessMoves (peca) {

  console.log(peca);
  peca = peca.toLowerCase();

  switch (peca) {
    case "peao":
        console.log("No primeiro movimento, pode até duas casas à frente. Na sequência somente uma casa à frente. Captura na diagonal(uma casa).");
        break;
    case "torre":
        console.log("Move-se em linha, na horizontal ou na vertical quantas casas estiverem livres. Captura no mesmo sentido, ocupando a casa da peça capturada.");
        break;
    
    case "cavalo":
        console.log("Faz um movimento de L duas casas em uma direção e mais uma para outra (sem diagonais). Esta peça pode saltar outras peças. Captura ao final do movimento, ocupando a casa da peça capturada.");
        break;
    
    case "bispo":
        console.log("Move-se em diagonais, quantas casas estiverem livres. Captura no mesmo sentido, ocupando a casa da peça capturada.");
        break;
    
    case "dama":
        console.log("Move-se em qualquer direção (linhas, colunas e diagonais), quantas casas estiverem livres. Captura no mesmo sentido, ocupando a casa da peça capturada.");
        break;
    
    case "rei":
        console.log("Move-se em qualquer direção, apenas uma casa. Captura no mesmo sentido, ocupando a casa da peça capturada.");
        break;
    
    default:
        console.log("Erro, esta não é uma peça de xadrez.");
  }
}
chessMoves("cavaLo");

