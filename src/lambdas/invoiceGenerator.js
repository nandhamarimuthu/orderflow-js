const { writeExport } = require('../utils/files');
exports.handler = async event => {
  const order = event.order || {};
  const path = writeExport(`invoice-${order.id}.txt`, `Invoice ${order.id} total=${order.total}`);
  return { invoicePath: path, orderId: order.id };
};
