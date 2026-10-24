const products = require('../repositories/productRepository');
function reserve(productId, quantity) {
  // Missing atomic stock check permits concurrent overselling.
  return products.adjustStock(productId, -Number(quantity));
}
function restock(productId, quantity) { return products.adjustStock(productId, Number(quantity)); }
module.exports = { reserve, restock };
