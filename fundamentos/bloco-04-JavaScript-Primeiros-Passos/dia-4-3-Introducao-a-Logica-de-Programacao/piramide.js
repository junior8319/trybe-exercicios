let n = 21;
let meioDaPiramide = (n + 1)/2;
let controleDireito = meioDaPiramide;
let controleEsquerdo = meioDaPiramide;
let simbolo = '*';
let saidaLinha = '';

for (let iLinha = 0; iLinha <= meioDaPiramide; iLinha += 1) { 
    for (let iColuna = 0; iColuna <= n; iColuna += 1) { 
        if (iColuna < controleDireito && iColuna > controleEsquerdo) { 
            saidaLinha += simbolo;
        } else { 
            saidaLinha += ' ';
        }
    }
    console.log(saidaLinha);
    saidaLinha = '';
    controleEsquerdo -= 1;
    controleDireito += 1;
} //consegui resolver somente com ajuda do gabarito e da explicação do Isaac no mesmo.