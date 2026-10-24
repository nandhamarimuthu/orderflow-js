const { money, applyDiscount, sumLines } = require('../src/utils/money');
test('rounds money to cents', () => expect(money(1.235)).toBe(1.24));
test('applies a basic discount', () => expect(applyDiscount(100, 10)).toBe(90));
test('sums lines', () => expect(sumLines([{ price: 10, quantity: 2 }, { price: 3.5 }])).toBe(23.5));
