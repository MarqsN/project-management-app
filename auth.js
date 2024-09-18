const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [];  // Temporary array for users

// Register
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { email: req.body.email, password: hashedPassword };
        users.push(user);
        res.status(201).send('User Registered');
    } catch {
        res.status(500).send();
    }
});

// Login
router.post('/login', async (req, res) => {
    const user = users.find(user => user.email === req.body.email);
    if (!user) return res.status(400).send('User not found');

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user, 'SECRET_KEY');
            res.json({ accessToken });
        } else {
            res.status(400).send('Invalid password');
        }
    } catch {
        res.status(500).send();
    }
});

module.exports = router;
