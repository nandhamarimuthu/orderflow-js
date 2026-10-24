const { readStore, writeStore } = require('../store');
function listOrders() { return readStore().orders; }
function createOrder(customerId, total) {
  const store = readStore();
  const order = { id: Date.now(), customerId, total, status: 'created' };
  store.orders.push(order);
  writeStore(store);
  return order;
}
module.exports = { listOrders, createOrder };
