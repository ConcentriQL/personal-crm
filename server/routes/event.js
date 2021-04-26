const express = require('express');
const dbModel = require('../../models/dbModel.js');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

router.post('/createevent', eventController.createevent, (req, res) => {
    res.sendStatus(200);
})
router.get('/getallevents/', eventController.getEvents, (req, res) => {
    res.status(200).json(res.locals.allEvents);
})

router.get('/geteventcontacts/:event_id', eventController.getEventContacts, (req, res) => {
    res.status(200).json(res.locals.allContacts);
})

router.patch('/updateevent/:event_id', eventController.updateEvent, (req, res) => {
    res.sendStatus(200);
})

router.delete('/deleteevent/:event_id', eventController.deleteEvent, (req, res) => {
    res.sendStatus(200);
})

// function switchCases (array) {
//     let newString = '';
//     let underscore = false;
//     const obj = {};
//     for (let i = 0; i < array.length; i++) {
//         let keys = Object.keys(array[i])
//         let values = Object.values(array[i])
//         for (let j = 0; j < keys.length; j++) {
//             for (let k = 0; k < keys[j].length; k++) {
//                 if (underscore === true) {
//                     newString = newString + keys[j][k].toUpperCase();
//                     underscore = false;
//                 }
//                 else if (keys[j][k] === '_') {
//                     underscore = true;
//                 }
//                 else {
//                     newString = newString + keys[j][k];
//                 }
//             }
//             obj[newString] = values[j];
//             newString = '';
//         }
//     }
//     return obj;
// }

// console.log(switchCases([{'this_is_snake_case': true, 'this_is': true}, {'this_is_snake_case1': true, 'this_is1': true}]));


module.exports = router;