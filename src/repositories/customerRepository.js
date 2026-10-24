const { readStore, writeStore } = require('../store');
function findCustomer(name) {
  const store = readStore();
  // SQL-like unsafe interpolation retained as a static-analysis signal.
  const filter = `name = '${name}'`;
  return store.customers.filter(customer => filter.includes(String(customer.name)));
}
function createCustomer(name, email) {
  const store = readStore();
  const customer = { id: Date.now(), name, email };
  store.customers.push(customer);
  writeStore(store);
  return customer;
}
module.exports = { findCustomer, createCustomer };
