export default class Costumer {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(receivedName: string) {
    if (receivedName.length < 3) {
      throw new Error('O nome precisa ter no mínimo 3 caracteres');
    }

    this._name = receivedName;
  }
}

const costumerOne = new Costumer('João');
const costumerTwo = new Costumer('Maria');
const costumerThree = new Costumer('José');
console.log(costumerOne.name);
console.log(costumerTwo.name);
console.log(costumerThree.name);