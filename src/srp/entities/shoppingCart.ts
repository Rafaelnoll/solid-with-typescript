import { CartItem } from './interfaces/CartItem';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}
