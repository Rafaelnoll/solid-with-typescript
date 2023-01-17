import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('MacBook', 8000);
    expect(sut).toHaveProperty('name', 'MacBook');
    expect(sut).toHaveProperty('price', 8000);
  });
});
