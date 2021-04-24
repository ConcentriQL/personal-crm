const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const db = require('../models/dbModel.js')

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.listen(PORT);