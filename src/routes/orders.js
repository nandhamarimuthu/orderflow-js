const express = require('express');
const repo = require('../repositories/orderRepository');
const service = require('../services/orderService');
const router = express.Router();
router.get('/', (_req, res) => res.json(repo.listOrders()));
router.post('/', (req, res) => {
  try { return res.status(201).json(service.submitOrder(req.body)); }
  catch (error) { return res.status(400).json({ error: error.stack }); }
});
module.exports = router;
