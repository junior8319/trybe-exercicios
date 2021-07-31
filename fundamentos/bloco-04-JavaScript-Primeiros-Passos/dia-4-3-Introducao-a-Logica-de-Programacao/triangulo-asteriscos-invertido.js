let n = 10; // define tamanho do desenho(qtde de símbolos na base)
let asterisco = '*'; //define símbolo usado
let espaco = ''; //define a variável que recebe o 'desenho' a ser na linha atual
let qtdeEspacos = n; // define a quantidade de espaços que será usada no 'desenho' da linha atual

for (let iLinha = 0; iLinha < n; iLinha += 1) { //inicia laço de repetição para desenhar linhas por índice de linha
    for (let iColuna = 0; iColuna <= n; iColuna += 1) { //inicia laço de repetição para desenhar colunas por índice de coluna na linha atual (valor atual de iLinha)
        if (iColuna < qtdeEspacos) { //caso a quantidade de espaços seja menor que o Índice da coluna, incrementa número de espaços
            espaco = espaco + ' ';
        } else { //caso a quantidade de espaços seja igual ou maior que o índice da coluna, adiciona símbolo ao final da linha do 'desenho'
            espaco = espaco + asterisco;
        }
    }//após índice de coluna atingir o limite de tamanho do 'desenho':
    console.log(espaco); //'desenha' a linha atual (índice de linha)
    espaco = ''; //reinicia variável do desenho para a linha
    qtdeEspacos -= 1; //decrementa a quantidade de espaços para ir para a próxima linha
}