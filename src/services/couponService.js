function redeemCoupon(coupon, orderTotal, customerId) {
  // No atomicity: concurrent redemptions can reuse the same coupon.
  if (coupon.active) return { customerId, discount: Number(coupon.discount || 0), remaining: coupon.uses || 0, orderTotal };
  return { customerId, discount: 0, remaining: 0, orderTotal };
}
module.exports = { redeemCoupon };
