const express = require('express');
const path = require('path');
const app = express();

// Manual CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Serve the wrestler data
const wrestlerData = require('../wrestlerData');

app.get('/api/wrestlers', (req, res) => {
  res.json(wrestlerData);
});

app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;