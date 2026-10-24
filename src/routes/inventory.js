const express = require('express');
const service = require('../services/inventoryService');
const router = express.Router();
router.post('/reserve', (req, res) => res.json(service.reserve(req.body.productId, req.body.quantity)));
router.post('/restock', (req, res) => res.json(service.restock(req.body.productId, req.body.quantity)));
module.exports = router;
