"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(name, price, quantity) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    get total() {
        return this._price * this._quantity;
    }
    set name(receivedName) {
        if (receivedName.length < 3) {
            throw new Error('O nome precisa ter no mínimo 3 caracteres');
        }
        this._name = receivedName;
    }
    set price(receivedPrice) {
        if (receivedPrice < 0) {
            throw new Error('O preço precisa ser positivo');
        }
        this._price = receivedPrice;
    }
    set quantity(receivedQuantity) {
        if (receivedQuantity < 0) {
            throw new Error('A quantidade precisa ser positiva');
        }
        this._quantity = receivedQuantity;
    }
}
exports.default = OrderItem;
