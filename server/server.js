const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const db = require('../models/dbModel.js')

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  const call = 'SELECT * FROM "public"."test" LIMIT 100';
  db.query(call)
    .then(pleasework => {
      console.log(pleasework);
    })
    .catch(e => console.log('did not work in sql', e.stack))
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.listen(PORT);