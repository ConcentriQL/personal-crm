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
  const { userId } = req.body;
  const getContactsQuery = `
  SELECT c.contact_first_name AS "firstName", c.contact_last_name AS "lastName", c.contact_email AS "email", c.contact_id AS "contactId", j.event_id AS "touchEventIds", c.contact_phonenumber AS "phoneNumber", contact_preferredcontactmethod AS "prefferedMethod", c.contact_circle AS "contactCircle", c.contact_priority AS "contactPriority", 
  FROM contact c
  LEFT JOIN joincontactandevent j
  ON c.contact_id = j.contact_id
  WHERE c.contact_userid = ${userId};`;

  async function contactsInfo(){
    const result = await db.query(getContactsQuery);
    const newArray = updateCotnactIdtoArray(result.rows)
    console.log('newArray')
    console.log(newArray)
    res.locals.contactInfo = newArray;
    return next();
  } 
  contactsInfo()
    .catch(err => {
      next({log: err});
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
      keys.push(info);
      values.push(req.body[info]);
  }
   
  //create beginning of query string and store it into variable
  let updateContactQuery = 'UPDATE contact SET ';
  //iterate through keys array adding to query string name of key equal to corresponding index of query values (???)
  for(let i = 0; i < keys.length; i++){
    updateContactQuery = updateContactQuery + `${keys[i]} = $${i + 1}, `
  }                                           //contact_first_name = $1
  //remove ', ' from the end of string
  console.log(updateContactQuery);
  updateContactQuerySliced = updateContactQuery.slice(0, -2);
  console.log(updateContactQuerySliced);
  //add condition to the query string which specifies that updates to be implemented for contact whose id was in the req.params
  updateContactQuerySliced = updateContactQuerySliced + ` WHERE contact_id = ${contact_id}`;
  async function updateContactInfo(){
    const update = await db.query(updateContactQuerySliced, values);
    console.log(update);
    return next()
  } updateContactInfo()
  .catch(err => next(err));

}

function updateCotnactIdtoArray (arr) {
  console.log('in the function')
  //initialize an event_id holder object w/ event_id's from previous objects as keys and true as values
  const id = {};
  //initialzing a new array that will be returning. We'll push in all objects that have an evnet_id that is not in our id object
  const newArr = [];
  //iterate through initial array
  for (let i = 0; i < arr.length; i++) {
    //check if the current object's event_id is currently in our id object
    if (id[arr[i].contactId]) {
      //if it is then grab the current objects contact_id and store it in variable c
      let c = arr[i].touchEventIds
      //push variable c in the previous object in our newArr's contact_id's array
      newArr[newArr.length - 1].touchEventIds.push(c);
    }
    //if event_id is not current in our id object then just into this else
    else {
      //grab the contact_id and set equal to c
      let c = arr[i].touchEventIds;
      //grab the key contact_id in our object and reassign the value to be an array with c in it
      arr[i].touchEventIds = [c];
      //push object into newArr
      newArr.push(arr[i])
      //grab the event_id from our current object
      let contact = arr[i].contactId;
      //store the event_id into the id object for future checking
      id[contact] = true;
    }
  }
  //return newArr
  return newArr;
}

module.exports = dbController;