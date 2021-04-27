const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const dbController = require('../controllers/dbController.js');
// const dbTouch = require('../controllers/dbTouch.js');


/*
This file will have all of the request methods going to the database, the middleware structure and the will be sending the responses back to the client
*/

//client will be sending a POST request to add a new contact to the contact table in the db
router.post('/createcontact', dbController.createContact, (req, res) => {
  res.status(200).send('new contact was successfully created')
})

router.post('/getcontacts', dbController.getContact, (req, res) => {
    res.status(200).json(res.locals.contactInfo);
})

router.patch('/updatecontactinfo/:contact_id', dbController.updateContact, (req, res) => {
    res.sendStatus(200);
})

router.delete('/deletecontact/:contact_id', dbController.deleteContact, (req, res) => {
    res.status(200).json('contact has been deleted');
})



module.exports = router;