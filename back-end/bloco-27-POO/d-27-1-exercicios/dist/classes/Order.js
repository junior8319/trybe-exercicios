"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Costumer_1 = __importDefault(require("./Costumer"));
const OrderItem_1 = __importDefault(require("./OrderItem"));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CREDIT_CARD"] = "Credit Card";
    PaymentMethod["PAYPAL"] = "PayPal";
    PaymentMethod["DEBIT"] = "Debit Card";
    PaymentMethod["CASH"] = "Cash";
})(PaymentMethod || (PaymentMethod = {}));
class Order {
    constructor(client, items, paymentMethod, discount = 0) {
        this._items = [];
        this._discount = 0;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._client = client;
        this._discount = discount;
    }
    get items() {
        return this._items;
    }
    set items(receivedItems) {
        if (receivedItems.length < 1) {
            throw new Error('A lista de itens precisa ter pelo menos 1 item');
        }
        this._items = receivedItems;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(receivedPaymentMethod) {
        this._paymentMethod = receivedPaymentMethod;
    }
    get discount() {
        return this._discount;
    }
    set discount(receivedDiscount) {
        if (receivedDiscount < 0) {
            throw new Error('O desconto não pode ser negativo');
        }
        this._discount = receivedDiscount;
    }
    calculateTotal() {
        return this.items
            .reduce((accumulator, currentItem) => accumulator + currentItem.total, 0);
    }
    calculateBill() {
        return this.calculateTotal() * (1 - this.discount);
    }
}
exports.default = Order;
const client = new Costumer_1.default('João');
const sandwiche = new OrderItem_1.default('Sandwiche Natural', 5.00, 1);
const juice = new OrderItem_1.default('Suco de Abacaxí', 5.00, 1);
const dessert = new OrderItem_1.default('Gelatina de Uva', 2.50, 1);
const order = new Order(client, [sandwiche, juice, dessert], PaymentMethod.CASH, 0.10);
console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateBill());
