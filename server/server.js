const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const db = require('../models/dbModel.js');
const apiroute = require('./routes/api.js');
const dbroute = require('./routes/db.js')
// const bodyParser = require('body-parser');


// app.use(bodyParser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*

*/
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.use('/api', apiroute);
app.use('/database', dbroute);



app.listen(PORT);