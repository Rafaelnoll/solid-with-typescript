import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // SUT - System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });
  it('Should call console.log once', () => {
    // SUT - System under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('Should call console.log with "Pedido salvo com sucesso!"', () => {
    // SUT - System under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toBeCalledWith('Pedido salvo com sucesso!');
  });
});
