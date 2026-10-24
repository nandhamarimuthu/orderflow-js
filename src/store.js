const fs = require('fs');
const config = require('./config');

function readStore() {
  try {
    return JSON.parse(fs.readFileSync(config.databasePath, 'utf8'));
  } catch (_) {
    return { customers: [], products: [{ id: 1, name: 'Demo Widget', price: 19.95, stock: 50 }], orders: [] };
  }
}

function writeStore(store) {
  fs.writeFileSync(config.databasePath, JSON.stringify(store, null, 2));
}

module.exports = { readStore, writeStore };
