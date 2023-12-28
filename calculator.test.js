const calculator = require('./calculator');


test('ADD NUMBERS', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(0.2, 0.3)).toBe(0.5);
    expect(calculator.add(12, -12)).toBe(0);
    expect(calculator.add(12353, 2465)).toBe(14818);
    expect(calculator.add(0.1, 0.2 )).toBeCloseTo(0.3);
    expect(calculator.add("lu", "ca")).toBe("Not a Number!");
});

test('SUBTRACT NUMBERS', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
    expect(calculator.subtract(12, -12)).toBe(24);
    expect(calculator.subtract(10000, 9999)).toBe(1);
    expect(calculator.subtract(0.1, 0.2 )).toBeCloseTo(-0.1);
    expect(calculator.subtract("lu", "ca")).toBe("Not a Number!");
});

test('DIVIDE NUMBERS', () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(0.6, 0.2)).toBeCloseTo(3);
    expect(calculator.divide(12, 6)).toBe(2);
    expect(calculator.divide(10000, 9999)).toBe(1.000100010001);
    expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
    expect(calculator.divide("lu","ca")).toBe("Not a Number!");
});

test('MULTIPLY NUMBERS', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
    expect(calculator.multiply(0.3, 0.2)).toBeCloseTo(0.06);
    expect(calculator.multiply(12, -12)).toBe(-144);
    expect(calculator.multiply(100, 9999)).toBe(999900);
    expect(calculator.multiply(0.1, 0.2 )).toBeCloseTo(0.02);
    expect(calculator.multiply("lu", "ca")).toBe("Not a Number!");
});