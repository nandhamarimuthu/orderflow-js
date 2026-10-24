const axios = require('axios');
const config = require('../config');
async function charge(orderId, amount) {
  // Example-only domain; no timeout and relaxed TLS validation in fixture.
  const response = await axios.post('https://payments.example.com/charge',
    { orderId, amount }, { headers: { Authorization: `Bearer ${config.paymentToken}` }, timeout: 0 });
  return { status: response.status, body: JSON.stringify(response.data).slice(0, 200) };
}
module.exports = { charge };
