const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const db = require('../../models/dbModel')

const dbController = {};

/*
This file will provide all the functionality for our database middleware calls
*/


//CONTACTS TABLE

//create contact

//this middleware will grab the required information from the req.body object and insert that contact to the 
dbController.createContact = (req, res, next) => {

  //deconstruct our req body and assign all the values
  const { contactEmail, contactPhonenumber, contactPreferredontactmethod, contactCircle, contactPriority, contactFirstName, contactLastName, contactUserId} = req.body;
  //storing my sql parameters in an array instead of straight into the sql query to avoid sql injections
  const newContactParams = [contactEmail, contactPhonenumber, contactPreferredcontactmethod, contactCircle, contactPriority, contactFirstName, contactLastName, contactUserId];
  //creating the query string to create a new contact
  const createContact = `INSERT INTO contact (contact_email, contact_phonenumber, contact_preferredcontactmethod, contact_circle, contact_priority, contact_first_name, contact_last_name, contact_userid)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
//'${email}', '${phonenumber}', '${prefcontactmethod}', '${circle}', '${priority}', '${firstName}', '${lastName}', ${userId})
  //calling the query using async await:
  async function newContact () {
    // adding the query to the db
    const result = await db.query(createContact, newContactParams)
    //   .then(result => result.json())
    //   .then(result => {
        console.log(result)
        return next();
    //   })
    // console.log(result)
    
    //storing the result in res.locals
    // res.locals.newContact = res
  } newContact()
  //calling our async function to run and chaining a .catch to the function incase the function's promise returns an error
  // newContact()
    .catch(err => {
      //passing in err into our next to hit the global error handler
      next(err)
    })
        // log: 'Error in creating a new contact',
        // message: {err: `Error while creating a new contact ${err}`}
      
};


//get contacts
dbController.getContact = (req, res, next) => {
  console.log('in here')
  const getContactsQuery = 'SELECT contact_first_name as "contactFirstName", contact_last_name as "contactLastName", contact_email as "contactEmail" FROM contact';

  async function contactsInfo(){
    const result = await db.query(getContactsQuery);
    res.locals.contactInfo = result.rows;
    return next();
  } contactsInfo()
  .catch(err => {
    next(err);
  });
};



dbController.deleteContact = (req, res, next) => {
  console.log('in delete contact')
  const { contact_id } = req.params;
  const paramId = [contact_id];
  const deleteContactQuery = `DELETE FROM contact WHERE contact_id=$1`;

  async function deleteContactRow() {
    const deletion = await db.query(deleteContactQuery, paramId);
    return next();
  } deleteContactRow()
  .catch(err => {
    next(err);
  })
}


//update contact
dbController.updateContact = (req, res, next) => {

  const keys = [], values =[];
  //get id of contact to be updated
  const { contact_id } = req.params;
  console.log(req.body)
  //iterate through req.body object, pushing keys and values into arrays if value of corresponding key is not equal to null
  for(let info in req.body){
    // if(req.body[info]) {
      keys.push(info);
      values.push(req.body[info]);
    // }
  }

  console.log(keys);
  let snakeCased = '';
  keys.forEach(string => {
    for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase){
        
      } else {
        snakeCased = snakeCased + string[i];
      }
    }
  })

  //create beginning of query string and store it into variable
  let updateContactQuery = 'UPDATE contact SET ';
  //iterate through keys array adding to query string name of key equal to corresponding index of query values (???)
  for(let i = 0; i < keys.length; i++){
    updateContactQuery = updateContactQuery + `${keys[i]} = $${i + 1}, `
  }                                           //contact_first_name = $1
  //remove ', ' from the end of string
  updateContactQuerySliced = updateContactQuery.slice(0, -2);
  //add condition to the query string which specifies that updates to be implemented for contact whose id was in the req.params
  updateContactQuerySliced = updateContactQuerySliced + ` WHERE contact_id = ${id}`;

  async function updateContactInfo(){
    const update = await db.query(updateContactQuerySliced, values);
    console.log(update);
    return next()
  } updateContactInfo()
  .catch(err => next(err));

}


module.exports = dbController;