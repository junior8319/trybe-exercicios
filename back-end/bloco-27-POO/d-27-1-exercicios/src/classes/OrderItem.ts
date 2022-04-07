export default class OrderItem {
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  get total(): number {
    return this._price * this._quantity;
  }

  set name(receivedName: string) {
    if (receivedName.length < 3) {
      throw new Error('O nome precisa ter no mínimo 3 caracteres');
    }

    this._name = receivedName;
  }

  set price(receivedPrice: number) {
    if (receivedPrice < 0) {
      throw new Error('O preço precisa ser positivo');
    }

    this._price = receivedPrice;
  }

  set quantity(receivedQuantity: number) {
    if (receivedQuantity < 0) {
      throw new Error('A quantidade precisa ser positiva');
    }

    this._quantity = receivedQuantity;
  }
}