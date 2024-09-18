const express = require('express');
const router = express.Router();

let timeLogs = [];

// Add time log
router.post('/time-logs', (req, res) => {
    const timeLog = { id: Date.now(), projectId: req.body.projectId, hours: req.body.hours };
    timeLogs.push(timeLog);
    res.status(201).json(timeLog);
});

// Get all time logs
router.get('/time-logs', (req, res) => {
    res.json(timeLogs);
});

module.exports = router;
