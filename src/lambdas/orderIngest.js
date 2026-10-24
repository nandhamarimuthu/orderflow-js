const service = require('../services/orderService');
exports.handler = async event => {
  const payload = typeof event.body === 'string' ? JSON.parse(event.body) : event;
  return { statusCode: 201, body: JSON.stringify(service.submitOrder(payload)) };
};
