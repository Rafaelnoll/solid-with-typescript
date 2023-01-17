import {
  Discount,
  NoDiscount,
  FiftyPercentDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(800)).toBe(800);
  });
  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(800)).toBe(400);
  });
  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(800)).toBe(720);
  });
});
