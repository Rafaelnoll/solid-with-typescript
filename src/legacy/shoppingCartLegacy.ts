type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'close';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    const total = +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
    return total;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'close';
    this.sendMessage(`Seu pedido com total de R$${this.total()} foi recebido!`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }

  // Getters
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<string> {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Geladeira', price: 1000 });
shoppingCart.addItem({ name: 'MacBook', price: 8000 });
shoppingCart.addItem({ name: 'IPhone', price: 2000 });

console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
