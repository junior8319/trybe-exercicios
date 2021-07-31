let n = 9;
let meioDaPiramide = (n + 1)/2;
let controleDireito = meioDaPiramide;
let controleEsquerdo = meioDaPiramide;
let simbolo = '*';

for (let iLinha = 1; iLinha <= meioDaPiramide; iLinha += 1) { 
    let saidaLinha = '';
    for (let iColuna = 1; iColuna <= n; iColuna += 1) { 
        if (iColuna == controleDireito || iColuna == controleEsquerdo || iLinha == meioDaPiramide) { 
            saidaLinha += simbolo;
        } else { 
            saidaLinha += ' ';
        }
    }
    controleEsquerdo -= 1;
    controleDireito += 1;
    console.log(saidaLinha);
} //consegui resolver somente com ajuda do gabarito e da explicação do Isaac no mesmo.