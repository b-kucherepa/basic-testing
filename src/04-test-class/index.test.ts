import { BankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError } from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const testAccount = new BankAccount(1000);
    expect(testAccount.getBalance()).toBe(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const testAccount = new BankAccount(1000);
    expect(() => testAccount.withdraw(1500)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const donorAccount = new BankAccount(1000);
    const recipientAccount = new BankAccount(5000000);
    expect(() => donorAccount.transfer(1500, recipientAccount)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const testAccount = new BankAccount(1000);
    expect(() => testAccount.transfer(500, testAccount)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const testAccount = new BankAccount(1000);
    testAccount.deposit(500);
    expect(testAccount.getBalance()).toBe(1500);
  });

  test('should withdraw money', () => {
    const testAccount = new BankAccount(1000);
    testAccount.withdraw(500);
    expect(testAccount.getBalance()).toBe(500);
  });

  test('should transfer money', () => {
    const donorAccount = new BankAccount(1000);
    const recipientAccount = new BankAccount(0);
    donorAccount.transfer(500, recipientAccount);
    expect(donorAccount.getBalance()).toBe(500);
    expect(recipientAccount.getBalance()).toBe(500);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const testAccount = new BankAccount(1000);
    //note the standard ".isInstanceOf" solution won't work here:
    await expect(testAccount.fetchBalance()).resolves.toEqual(expect.any(Number));
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const initialBalance = 0;
    const testAccount = new BankAccount(initialBalance);

    await expect(testAccount.synchronizeBalance()).resolves.not.toThrow(SynchronizationFailedError);
    expect(testAccount.getBalance).not.toBe(initialBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const testAccount = new BankAccount(1000);
    await expect(() => testAccount.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
