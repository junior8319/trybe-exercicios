import cor from "./cores";
import direcao from "./direcao";
import portas from "./portas";

class Carro {
  _marca: string;
  _cor: cor;
  _portas: number;
  velocidade: number;
  direcao: direcao;

  constructor(marca: string, cor: cor, portas: number) {
    this._marca = marca;
    this._cor = cor;
    this._portas = portas;
    this.velocidade = 0;
    this.direcao = direcao.RETO;
  }

  buzinar(): void {
    console.log("Biii, Biii");
  }

  abrirPorta(porta: portas): void {
    // this.validaPorta(porta);
    console.log(`Porta ${porta} aberta`);
  }

  fecharPorta(porta: portas): void {
    // this.validaPorta(porta);
    console.log(`Porta ${porta} fechada`);
  }

  ligar(): void {
    console.log('Carro ligado!');
  }

  desligar(): void {
    console.log('Carro desligado.');
  }

  aumentaVelocidade(): number {
    this.velocidade += 1;
    console.log(`Velocidade subiu para ${this.velocidade}`);
    return this.velocidade;
  }

  diminuiVelocidade(): number {
    this.velocidade -= 1;

    if (this.velocidade === 0) {
      console.log(`Carro parou ${this.velocidade}`);
      return this.velocidade;
    };

    if (this.velocidade < 0) {
      console.log(`Marcha à ré, velocidade ${this.velocidade}`);
      return this.velocidade;      
    }
    
    console.log(`Velocidade diminuiu para ${this.velocidade}`);

    return this.velocidade;
  }

  parar(): number {
    this.velocidade = 0;
    console.log('Carro parado');
    return this.velocidade;
  }

  virar(direcao: direcao): string {
    this.direcao = direcao;
    console.log(`Carro virado em ${this.direcao}`);
    return this.direcao;
  }
}

export default Carro;