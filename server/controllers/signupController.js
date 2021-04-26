const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const db = require('../../models/dbModel')

const signupController = {};

signupController.createUser = (req, res, next) => {
  // const { email, password } = req.params;

}

// const addUserParams = [firstName, lastName, password, email]
// const addUserQuery = `INSERT INTO "user" (fist_name, last_name, password, email) 
// VALUES ($1, $2, $3, $4)`
module.exports = signupController;

