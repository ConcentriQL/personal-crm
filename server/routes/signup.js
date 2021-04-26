const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const signupController = require('../controllers/signupController.js');


router.post('/:email&:password', signupController.createUser, (req, res) => { 
  res.sendStatus(200);
})

// const addUserParams = [firstName, lastName, password, email]
// const addUserQuery = `INSERT INTO "user" (fist_name, last_name, password, email) 
// VALUES ($1, $2, $3, $4)`
module.exports = router;