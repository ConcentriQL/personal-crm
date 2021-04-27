const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

router.post('/createevent', eventController.createevent, (req, res) => {
    res.status(200).send('event successdully created');
})
router.post('/getallevents', eventController.getEvents, (req, res) => {
    res.status(200).json(res.locals.allEvents);
})

router.get('/geteventcontacts/:event_id', eventController.getEventContacts, (req, res) => {
    res.status(200).json(res.locals.allContacts);
})

router.patch('/updateevent/:event_id', eventController.updateEvent, (req, res) => {
    res.status(200).send('event successfully updated');
})

router.delete('/deleteevent/:event_id', eventController.deleteEvent, (req, res) => {
    res.status(200).send('event successfully deleted');
})

module.exports = router;