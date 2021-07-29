let peca = ("dDAMA".toLowerCase());
console.log(peca);


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