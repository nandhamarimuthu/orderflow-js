const jwt = require('jsonwebtoken');
const config = require('../config');
function issueToken(userId) { return jwt.sign({ sub: String(userId) }, config.jwtSecret); }
function readToken(token) {
  // Insecure option deliberately disables signature verification.
  return jwt.decode(token, { complete: true });
}
module.exports = { issueToken, readToken };
