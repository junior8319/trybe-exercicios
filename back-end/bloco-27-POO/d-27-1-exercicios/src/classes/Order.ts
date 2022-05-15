import Costumer from './Costumer';
import OrderItem from './OrderItem';

enum PaymentMethod {
  CREDIT_CARD = "Credit Card",
  PAYPAL = "PayPal",
  DEBIT = "Debit Card",
  CASH = "Cash"
}

export default class Order {
  private _items: OrderItem[] = [];
  private _paymentMethod: PaymentMethod;
  private _client: Costumer;
  private _discount: number = 0;

  constructor(client: Costumer, items: OrderItem[],
    paymentMethod: PaymentMethod, discount: number = 0) {
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._client = client;
    this._discount = discount;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(receivedItems: OrderItem[]) {
    if (receivedItems.length < 1) {
      throw new Error('A lista de itens precisa ter pelo menos 1 item');
    }
    this._items = receivedItems;
  }

  get paymentMethod(): PaymentMethod {
    return this._paymentMethod;
  }

  set paymentMethod(receivedPaymentMethod: PaymentMethod) {
    this._paymentMethod = receivedPaymentMethod;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(receivedDiscount: number) {
    if (receivedDiscount < 0) {
      throw new Error('O desconto não pode ser negativo');
    }
    this._discount = receivedDiscount;
  }

  calculateTotal(): number {
    return this.items
      .reduce((accumulator, currentItem) => accumulator + currentItem.total, 0);
  }

  calculateBill(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

const client = new Costumer('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00, 1);
const juice = new OrderItem('Suco de Abacaxí', 5.00, 1);
const dessert = new OrderItem('Gelatina de Uva', 2.50, 1);

const order = new Order(client, [sandwiche, juice, dessert], PaymentMethod.CASH, 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateBill());
