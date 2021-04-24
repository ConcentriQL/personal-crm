const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const dbController = require('../controllers/dbController.js');

/*
router.post('/createcontact', (req, res) => {
    //req.body = {name: Kat, phone: 123; email: }

    const contactName = req.body.contact_name;
    const contactPhone = req.body.contact_phone;
    const contactEmail = req.body.contact_email;

    // const queryCreateContact = `INSERT INTO contact (contact_name) WHERE ${contactName}`
    
    
    
    //rewrite in promises
    //.then
    ///.then
    //.catch((err) => next(err))
    //sesrver.js has global error handling
    //separate error handling function; catch
    //change events to touches
   
    db.query(queryCreateContact, (error, response) => {
        if(error){
            console.log(error.stack);
            res.json('error occured in create contact');
        }
        // else if(response) {
            res.status(200).json('success');
            //res.locals.contactInfo = response.rows;
            //return res.status(200).json(res.local.contactInfo);
        }
    
 )

router.get('/getcontacts/:type', (req, res) => {
  //add contacts query from Mike
  //add touches query from Mike
  //const data = results of the queries
  //const data = db.query(stringFromMike)
 // const queryCreateContact = `INSERT INTO contact (contact_name) WHERE ${contactName}`
  db.query(getContacts, (error, response) => {
    if(error){
        console.log(error.stack);
        //status 400?
        res.status(400).json('no contacts found');
    }
    else if(response) {
        res.locals.contactInfo = response.rows;
        return res.status(200).json(res.local.contactInfo);
    }
  })
});


//create event: get, post, update

router.post('/createevent', (req, res) => {
    const date = req.body.date;
    const eventName = req.body.event_name;
    const eventDescription = req.body.eventDescription;
    const isRequrring = req.body.isRequrring;

    const createEvent = '';
    db.query('', (error, response) => {
        if(error) {
            console.log(error.stack);
            res.json('error while creating a contact');
        } 
    res.json('event successfully added');
    })
});

router.get('/getevent', (req, res) => {
    const getEventQuery = '';
    db.query(getEventQuery, (error, response) => {
        if(error) console.log(error.stack);
        res.locals.events = response.rows;
        res.status(200).json(res.locals.events);
    })
})
 */

module.exports = router;