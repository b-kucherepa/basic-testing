import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 0, b: 1, action: Action.Add, expected: 1 },
    { a: -1, b: 1, action: Action.Add, expected: 0 },
    { a: -10, b: 5, action: Action.Add, expected: -5 },
    { a: 8, b: -4, action: Action.Add, expected: 4 },
    { a: -10, b: -11, action: Action.Add, expected: -21 },
    { a: 999999999, b: 333333333, action: Action.Add, expected: 1333333332 },
    { a: 71, b: 64, action: Action.Subtract, expected: 7 },
    { a: 55, b: 67, action: Action.Subtract, expected: -12 },
    { a: -25, b: -33, action: Action.Subtract, expected: 8 },
    { a: 0, b: 2, action: Action.Subtract, expected: -2 },
    { a: -2, b: 0, action: Action.Subtract, expected: -2 },
    { a: 0, b: 5, action: Action.Subtract, expected: -5 },
    { a: 55, b: 67, action: Action.Subtract, expected: -12 },
    { a: 444444444, b: 111111111, action: Action.Subtract, expected: 333333333 },
    { a: 12, b: 5, action: Action.Multiply, expected: 60 },
    { a: -15, b: 23, action: Action.Multiply, expected: -345 },
    { a: -10, b: -12, action: Action.Multiply, expected: 120 },
    { a: 1, b: 5, action: Action.Multiply, expected: 5 },
    { a: -4, b: 14, action: Action.Multiply, expected: -56 },
    { a: 323, b: 0, action: Action.Multiply, expected: 0 },
    { a: 500000, b: 30000, action: Action.Multiply, expected: 15000000000 },
    { a: 16, b: 2, action: Action.Divide, expected: 8 },
    { a: -72, b: 16, action: Action.Divide, expected: -4.5 },
    { a: -20, b: -4, action: Action.Divide, expected: 5 },
    { a: 0, b: 5, action: Action.Divide, expected: 0 },
    { a: 5, b: 0, action: Action.Divide, expected: Infinity },
    { a: 2, b: 10, action: Action.Exponentiate, expected: 1024 },
    { a: 8, b: 1, action: Action.Exponentiate, expected: 8 },
    { a: 1600, b: 0, action: Action.Exponentiate, expected: 1 },
    { a: -4, b: 2, action: Action.Exponentiate, expected: 16 },
    { a: -3, b: 3, action: Action.Exponentiate, expected: -27 },
    { a: 5, b: -1, action: Action.Exponentiate, expected: 0.2 },
    { a: -2, b: -5, action: Action.Exponentiate, expected: -0.03125 },
    { a: 2, b: 2, action: '$', expected: null },
    { a: 1, b: 'value', action: Action.Add, expected: null },
    { a: '1', b: 2, action: Action.Add, expected: null },
    { a: 'a', b: 'value', action: Action.Add, expected: null }
  ];

  test.each(testCases) ('should return "$expected" after operation "$action" with args "$a" and "$b"', ({a, b, action, expected})=> {
    const result = simpleCalculator({a, b, action});
    expect(result).toEqual(expected);
  });
});

