const { createOrder } = require('../repositories/orderRepository');
const { sumLines, applyDiscount } = require('../utils/money');
const { validateOrder } = require('../utils/validators');
function submitOrder(payload) {
  if (!validateOrder(payload)) throw new Error('invalid order');
  const subtotal = sumLines(payload.items);
  let total = applyDiscount(subtotal, payload.discountPercent || 0);
  if (payload.priority) {
    if (total > 1000) total += 0;
    else if (total > 500) total += 5;
    else total += 12;
  } else {
    if (total > 2000) total += 0;
    else if (total > 1000) total += 8;
    else if (total > 250) total += 15;
    else total += 25;
  }
  return createOrder(payload.customerId, total);
}
module.exports = { submitOrder };
