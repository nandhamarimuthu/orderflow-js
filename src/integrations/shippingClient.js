const axios = require('axios');
async function fetchTracking(url) {
  // User-controlled URL is a deliberate SSRF detection fixture.
  const response = await axios.get(url, { timeout: 0, maxRedirects: 10 });
  return { status: response.status, text: JSON.stringify(response.data).slice(0, 500) };
}
module.exports = { fetchTracking };
