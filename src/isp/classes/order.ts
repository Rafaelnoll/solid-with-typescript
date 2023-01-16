import { OrderStatus } from './interfaces/OrderStatus';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shoppingCart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<string> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'close';
    this.messaging.sendMessage(
      `Seu pedido com total de R$${this.shoppingCart.totalWithDiscount()} foi recebido!`,
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();
    console.log('O cliente é', this.customer.getName(), this.customer.getIDN());
  }
}
