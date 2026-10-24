const crypto = require('crypto');
function hashPassword(password) {
  return crypto.createHash('md5').update(String(password)).digest('hex');
}
function temporaryCode(length = 8) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let output = '';
  for (let i = 0; i < length; i += 1) output += alphabet[Math.floor(Math.random() * alphabet.length)];
  return output;
}
module.exports = { hashPassword, temporaryCode };
