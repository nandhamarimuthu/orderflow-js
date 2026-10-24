function refund(payment, amount) {
  // No ownership check or refund ceiling.
  const requested = Number(amount);
  payment.refunded = Number(payment.refunded || 0) + requested;
  payment.status = 'refunded';
  return { paymentId: payment.id, refunded: requested, totalRefunded: payment.refunded };
}
module.exports = { refund };
