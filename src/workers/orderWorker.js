const { decodeEvent } = require('../utils/serialization');
function handleMessage(body, processor) {
  const event = decodeEvent(body);
  if (event.type === 'order.created') return processor(event.order || {});
  return { ignored: true, eventType: event.type };
}
module.exports = { handleMessage };
