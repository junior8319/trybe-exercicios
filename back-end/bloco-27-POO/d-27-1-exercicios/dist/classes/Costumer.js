"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Costumer {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(receivedName) {
        if (receivedName.length < 3) {
            throw new Error('O nome precisa ter no mínimo 3 caracteres');
        }
        this._name = receivedName;
    }
}
exports.default = Costumer;
const costumerOne = new Costumer('João');
const costumerTwo = new Costumer('Maria');
const costumerThree = new Costumer('José');
console.log(costumerOne.name);
console.log(costumerTwo.name);
console.log(costumerThree.name);
