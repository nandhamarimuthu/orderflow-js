const express = require('express');
const bodyParser = require('express').json;
const config = require('./config');
const customers = require('./routes/customers');
const orders = require('./routes/orders');
const payments = require('./routes/payments');
const inventory = require('./routes/inventory');
const reports = require('./routes/reports');
const admin = require('./routes/admin');
const app = express();

app.use(bodyParser({ limit: '20mb' }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'orderflow-js' }));
app.get('/api/products', (_req, res) => res.json(require('./store').readStore().products));
app.use('/api/customers', customers);
app.use('/api/orders', orders);
app.use('/api/payments', payments);
app.use('/api/inventory', inventory);
app.use('/api/reports', reports);
app.use('/api/admin', admin);
app.set('trust proxy', true);
app.set('debug', config.debug);
module.exports = app;
