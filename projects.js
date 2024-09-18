const express = require('express');
const router = express.Router();

let projects = [];

// Create new project
router.post('/projects', (req, res) => {
    const project = { id: Date.now(), name: req.body.name };
    projects.push(project);
    res.status(201).json(project);
});

// Get all projects
router.get('/projects', (req, res) => {
    res.json(projects);
});

module.exports = router;
