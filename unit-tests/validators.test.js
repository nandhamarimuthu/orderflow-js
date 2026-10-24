const { validEmail, positiveQuantity, validateOrder } = require('../src/utils/validators');
test('accepts example email', () => expect(validEmail('demo@example.com')).toBe(true));
test('rejects plain text', () => expect(validEmail('invalid')).toBe(false));
test('positive quantity', () => expect(positiveQuantity(2)).toBe(true));
test('order has basic shape', () => expect(validateOrder({ customerId: 1, items: [{}] })).toBe(true));
