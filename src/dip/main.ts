import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const customer = new IndividualCustomer('Rafael', 'Noll', '123456789');
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('Geladeira', 1000));
shoppingCart.addItem(new Product('MacBook', 8000));
shoppingCart.addItem(new Product('IPhone', 2000));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
