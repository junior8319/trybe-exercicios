"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const direcao_1 = __importDefault(require("./direcao"));
class Carro {
    constructor(marca, cor, portas) {
        this._marca = marca;
        this._cor = cor;
        this._portas = portas;
        this.velocidade = 0;
        this.direcao = direcao_1.default.RETO;
    }
    buzinar() {
        console.log("Biii, Biii");
    }
    abrirPorta(porta) {
        // this.validaPorta(porta);
        console.log(`Porta ${porta} aberta`);
    }
    fecharPorta(porta) {
        // this.validaPorta(porta);
        console.log(`Porta ${porta} fechada`);
    }
    ligar() {
        console.log('Carro ligado!');
    }
    desligar() {
        console.log('Carro desligado.');
    }
    aumentaVelocidade() {
        this.velocidade += 1;
        console.log(`Velocidade subiu para ${this.velocidade}`);
        return this.velocidade;
    }
    diminuiVelocidade() {
        this.velocidade -= 1;
        if (this.velocidade === 0) {
            console.log(`Carro parou ${this.velocidade}`);
            return this.velocidade;
        }
        ;
        if (this.velocidade < 0) {
            console.log(`Marcha à ré, velocidade ${this.velocidade}`);
            return this.velocidade;
        }
        console.log(`Velocidade diminuiu para ${this.velocidade}`);
        return this.velocidade;
    }
    parar() {
        this.velocidade = 0;
        console.log('Carro parado');
        return this.velocidade;
    }
    virar(direcao) {
        this.direcao = direcao;
        console.log(`Carro virado em ${this.direcao}`);
        return this.direcao;
    }
}
exports.default = Carro;
