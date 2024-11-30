const express = require('express');
const path = require('path');
const app = express();

// Serve the wrestler data
const wrestlerData = require('../wrestlerData');

// Serve the wrestler data
app.get('/api/wrestlers', (req, res) => {
  res.json(wrestlerData);
});

// Serve the static assets (images)
app.use(express.static(path.join(__dirname, '../public')));

// Export the Express app
module.exports = app;