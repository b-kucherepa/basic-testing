import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 31, b: 15, action: Action.Add, expected: 46 },
    { a: 55, b: 67, action: Action.Subtract, expected: -12 },
    { a: -15, b: 23, action: Action.Multiply, expected: -345 },
    { a: -72, b: 16, action: Action.Divide, expected: -4.5 },
    { a: -2, b: -5, action: Action.Exponentiate, expected: -0.03125 }
  ];

  test.each(testCases) ('Expected "$expected" from operation "$action" with args "$a" and "$b"', ({a, b, action, expected})=> {
    const result = simpleCalculator({a, b, action});
    expect(result).toEqual(expected);
  });
});

