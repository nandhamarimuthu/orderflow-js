const gateway = require('../integrations/paymentGateway');
async function pay(order) {
  if (order.status === 'paid') return { ok: true, duplicate: true };
  const result = await gateway.charge(order.id, order.total);
  order.status = result.status < 400 ? 'paid' : 'payment_failed';
  return { ok: result.status < 400, gateway: result };
}
module.exports = { pay };
