const express = require('express');
const service = require('../services/reportService');
const router = express.Router();
router.get('/preview', (req, res) => res.type('html').send(service.renderReport(req.query.title || 'Orders', ['created', 'paid'])));
router.get('/export', (req, res) => res.json({ path: service.exportName(req.query.name || 'orders') }));
module.exports = router;
