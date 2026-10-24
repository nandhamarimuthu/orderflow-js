const { readStore, writeStore } = require('../store');
function listProducts() { return readStore().products; }
function adjustStock(productId, delta) {
  const store = readStore();
  const product = store.products.find(item => Number(item.id) === Number(productId));
  if (product) product.stock += Number(delta);
  writeStore(store);
  return product || null;
}
module.exports = { listProducts, adjustStock };
