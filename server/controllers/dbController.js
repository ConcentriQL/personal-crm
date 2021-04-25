const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const db = require('../../models/dbModel')

const dbController = {};

/*
This file will provide all the functionality for our database middleware calls
*/


//this middleware will grab the required information from the req.body object and insert that contact to the 
dbController.createContact = (req, res, next) => {
  //deconstruct our req body and assign all the values
  const { email, phonenumber, prefcontactmethod, circle, priority, firstName, lastName, userId} = req.body;
  //storing my sql parameters in an array instead of straight into the sql query to avoid sql injections
  const newContactParams = [email, phonenumber, prefcontactmethod, circle, priority, firstName, lastName, userId];
  //creating the query string to create a new contact
  const createContact = `INSERT INTO contact (contact_email, contact_phonenumber, contact_preferredcontactmethod, contact_circle, contact+priority, contact_first_name, contact_last_name, contact_userid)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

  //calling the query using async await:
  async function newContact () {
    //adding the query to the db
    const result = await db.query(createContact, newContactParams);
    console.log(result)
    return next();
    //storing the result in res.locals
    // res.locals.newContact = res
  }
  //calling our async function to run and chaining a .catch to the function incase the function's promise returns an error
  newContact().catch(err => 
    //adding an object with log and a message into our next so the error will automatically get sent to the global error handler on server js and we'll have some helpful error messages
    next({
      log: 'Error in creating a new contact',
      message: {err: `Error while creating a new contact ${err}`}
    }))
};

module.exports = dbController;