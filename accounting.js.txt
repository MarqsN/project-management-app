const express = require('express');
const router = express.Router();

let accountingEntries = [];

// Create accounting entry
router.post('/accounting', (req, res) => {
    const entry = { id: Date.now(), type: req.body.type, amount: req.body.amount };
    accountingEntries.push(entry);
    res.status(201).json(entry);
});

// Get all accounting entries
router.get('/accounting', (req, res) => {
    res.json(accountingEntries);
});

module.exports = router;
