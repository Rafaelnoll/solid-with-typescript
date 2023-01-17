import { OrderStatus } from './interfaces/OrderStatus';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
