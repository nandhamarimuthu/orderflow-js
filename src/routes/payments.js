const express = require('express');
const service = require('../services/paymentService');
const router = express.Router();
router.post('/charge', async (req, res) => res.json(await service.pay(req.body)));
module.exports = router;
