import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

const messageSented = 'Message sented';

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // SUT - System under test
    const sut = createSut();
    expect(sut.sendMessage(messageSented)).toBeUndefined();
  });
  it('Should call console.log once', () => {
    // SUT - System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(messageSented);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('Should call console.log with "Mensagem enviada:" and msg', () => {
    // SUT - System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(messageSented);
    expect(consoleSpy).toBeCalledWith('Mensagem enviada:', messageSented);
  });
});
