import { IndividualCustomer, EnterpriseCustomer } from './customer';
import { CustomerOrder } from './interfaces/customer-protocol';

const createIndividualCustomer = (): IndividualCustomer & CustomerOrder => {
  return new IndividualCustomer('Rafael', 'Noll', '123.123.123-99');
};

const createEnterpriseCustomer = (): EnterpriseCustomer & CustomerOrder => {
  return new EnterpriseCustomer('Cool company', '11.111.111/0001-11');
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have the properties firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer();
    expect(sut).toHaveProperty('firstName', 'Rafael');
    expect(sut).toHaveProperty('lastName', 'Noll');
    expect(sut).toHaveProperty('cpf', '123.123.123-99');
  });

  it('should have method getName and getIDN', () => {
    const sut = createIndividualCustomer();
    expect(sut.getName()).toBe('Rafael Noll');
    expect(sut.getIDN()).toBe('123.123.123-99');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have the properties name and cnpj', () => {
    const sut = createEnterpriseCustomer();
    expect(sut).toHaveProperty('name', 'Cool company');
    expect(sut).toHaveProperty('cnpj', '11.111.111/0001-11');
  });

  it('should method getName and getIDN', () => {
    const sut = createEnterpriseCustomer();
    expect(sut.getName()).toBe('Cool company');
    expect(sut.getIDN()).toBe('11.111.111/0001-11');
  });
});
