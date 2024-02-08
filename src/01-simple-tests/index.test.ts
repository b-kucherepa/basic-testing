// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 31, b: 15, action: Action.Add });
    expect(result).toBe(46);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 55, b: 67, action: Action.Subtract });
    expect(result).toBe(-12);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: -15, b: 23, action: Action.Multiply });
    expect(result).toBe(-345);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: -72, b: 16, action: Action.Divide });
    expect(result).toBe(-4.5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a: -2, b: -5, action: Action.Exponentiate });
    expect(result).toBe(-0.03125);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 2, b: 2, action: '$' });
    expect(result).toBeNull;
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: 'no', b: 'arguments', action: Action.Divide});
    expect(result).toBeNull;
  });
});
