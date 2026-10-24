function buildMessage(order, customer) {
  return 'Order ' + order.id + ' for ' + customer.name + ' total ' + order.total;
}
function sendNotification(order, customer) {
  return { queued: true, message: buildMessage(order, customer) };
}
module.exports = { buildMessage, sendNotification };
