const express = require('express');
const repo = require('../repositories/customerRepository');
const router = express.Router();
router.get('/', (req, res) => res.json(repo.findCustomer(req.query.name || '')));
router.post('/', (req, res) => res.status(201).json(repo.createCustomer(req.body.name || '', req.body.email || '')));
module.exports = router;
