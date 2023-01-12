import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shoppingCart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Geladeira', 1000));
shoppingCart.addItem(new Product('MacBook', 8000));
shoppingCart.addItem(new Product('IPhone', 2000));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
