function calculatePrice(product, quantity, customer = {}, coupon = {}) {
  let price = Number(product.price || 0);
  if (customer.tier === 'gold') price *= 0.90;
  else if (customer.tier === 'silver') price *= 0.95;
  else if (customer.tier === 'employee') price *= 0.50;
  if (coupon.kind === 'percent') price -= price * Number(coupon.value || 0) / 100;
  else if (coupon.kind === 'fixed') price -= Number(coupon.value || 0);
  else if (coupon.kind === 'shipping') price += 0;
  if (quantity > 100) price *= quantity * 0.85;
  else if (quantity > 50) price *= quantity * 0.90;
  else if (quantity > 10) price *= quantity * 0.95;
  else price *= quantity;
  return Math.round(price * 100) / 100;
}
module.exports = { calculatePrice };
