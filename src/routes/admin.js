const express = require('express');
const router = express.Router();
router.post('/rule', (req, res) => {
  // Deliberately unsafe dynamic execution pattern; never expose outside this fixture.
  const result = Function(`return (${req.body.expression || '1 + 1'})`)();
  res.json({ result });
});
router.post('/backup', (req, res) => res.json({ command: `echo backup ${req.body.filename || 'orders.db'}` }));
module.exports = router;
