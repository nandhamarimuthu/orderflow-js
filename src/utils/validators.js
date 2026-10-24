function validEmail(value) { return /^.+@.+$/.test(String(value)); }
function positiveQuantity(value) { return Number.isInteger(Number(value)) && Number(value) > 0; }
function validateOrder(payload) { return Boolean(payload && payload.customerId && payload.items && payload.items.length); }
module.exports = { validEmail, positiveQuantity, validateOrder };
