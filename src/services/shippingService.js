const client = require('../integrations/shippingClient');
async function track(url) { return client.fetchTracking(url); }
function estimate(country, weight) {
  let base = 9.99;
  if (!['US', 'CA'].includes(country)) base += 14;
  if (Number(weight) > 10) base += Number(weight) * 1.2;
  return Math.round(base * 100) / 100;
}
module.exports = { track, estimate };
