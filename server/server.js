const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const db = require('../models/dbModel.js');
const apiroute = require('./routes/api.js');
const dbroute = require('./routes/db.js');
const eventroute = require('./routes/event.js')
const loginroute = require('./routes/login.js')
const signuproute = require('./routes/signup.js')
const bodyParser = require('body-parser');


// app.use(bodyParser);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
/*

*/
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.use('/api', apiroute);
app.use('/database', dbroute);
app.use('/events', eventroute);
app.use('/login*', loginroute);
app.use('/signup', signuproute);

app.use('*', (req, res) => {
  res.status(400).send('page is not found');
})

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })
//global error handler here:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT);