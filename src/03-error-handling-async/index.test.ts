import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'yay!';
    const result = await resolveValue(value);
    expect(result).toEqual(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'yay!';
    let caughtError = null;
    try {
      throwError(message);
    }
    catch (error) {
      caughtError = error;
    }
    expect(caughtError).toEqual(new Error(message));
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultMessage = 'Oops!';
    let caughtError = null;
    try {
      throwError();
    }
    catch (error) {
      caughtError = error;
    }
    expect(caughtError).toEqual(new Error(defaultMessage));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    let caughtError = null;
    try {
      throwCustomError();
    }
    catch (error) {
      caughtError = error;
    }
    expect(caughtError).toBeInstanceOf(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toBeInstanceOf(MyAwesomeError);
  });
});
