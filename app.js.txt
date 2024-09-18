const express = require('express');
const app = express();
const authRoutes = require('./auth');
const projectRoutes = require('./projects');
const accountingRoutes = require('./accounting');
const timeLogsRoutes = require('./time-logs');

// Middleware
app.use(express.json());
app.use(express.static('public'));  // Serve frontend files

// Routes
app.use(authRoutes);
app.use(projectRoutes);
app.use(accountingRoutes);
app.use(timeLogsRoutes);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
