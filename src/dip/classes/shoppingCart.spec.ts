import { Discount } from './discount';
import { CartItem } from './interfaces/CartItem';
import { ShoppingCart } from './shoppingCart';

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createProductMock = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createProductMock('MacBook', 8000);
  const cartItem2 = createProductMock('IPhone', 5000);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(13000);
    expect(sut.totalWithDiscount()).toBe(13000);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
  });

  it('should remove products from the cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(0);
    expect(sut.items.length).toBe(1);
  });
});
