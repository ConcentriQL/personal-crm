const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const db = require('../../models/dbModel')

/*
Middlewar for all touch events
*/

// const dbTouch = {};

//creating a new touch event
dbTouch.createTouch = (req, res, next) => {
  const { name, date, time, importance, recurring, numContacts } = req.body;
  const newTouchParams = [name, date, time, importance, recurring, numContacts];
  const newTouchQuery = `INSERT INTO event (event_name, event_date, touch_time, event_importance, event_recurring, numofcontacts)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING event_id`;
  db.query(newTouchQuery, newTouchParams)
    .then(result => result.json())
    .then(result => {
      console.log(result);
    })
};

// //deleting a new touch
// db.deleteTouch = (req, res, next) => {
//   //eventId is given from frontend in the params
//   const { event_id } = req.params;
//   //deleting touch from event table
//   const eventParam = [event_id];
//   const deleteTouchQuery = `DELETE FROM event WHERE event_id = $1`;
//   //deleting the touch reference from the join table
//   const deleteTouchinJoin = `DELETE FROM joincontactandevent WHERE event_id = $1`;
//   async function deleteTouch () {
//     //query to delete from the event table
//     const result = await db.query(deleteTouchQuery, eventParam);
//     //query to delete from the join table
//     const result2 = await db.query(deleteTouchinJoin, eventParam);
//     return next();
//   } deleteTouch()
//   .catch(err => {
//     next(err)
//   });
// };

// db.updateTouch = (req, res, next) => {
//   const { keyWord, newParam } = req.body;
//   if (keyWord === 'event_name') {
//     const newEventName = [newParam];
//     const updateQuery = `UPDATE event
//     SET event_name = $1`;
//     db.query(updateQuery, newEventName)
//       .then(result => result.json())
//       .then(result => {
//         return next()
//       })
//       .catch(err => next(err))
//   }
//   if (keyWord === 'event_date') {
//     const newDate = [newParam];
//     const updateQuery = `UPDATE event
//     SET event_date = $1`;
//     db.query(updateQuery, newDate)
//       .then(result => result.json())
//       .then(result => {
//         return next()
//       })
//       .catch(err => next(err))
//   }
//   if (keyWord === 'event_importance') {
//     const newImportance = [newParam];
//     const updateQuery =  `UPDATE event
//     SET event_importance = $1`;
//     db.query(updateQuery, newImportance)
//       .then(result => result.json())
//       .then(result => {
//         return next()
//       })
//       .catch(err => next(err))
//   }
//   if (keyWord === 'event_recurring') {
//     const newRecur = [newParam];
//     const updateQuery = `UPDATE event
//     SET event_recurring = $1`;
//     db.query(updateQuery, newRecur)
//       .then(result => result.json())
//       .then(result => {
//         return next()
//       })
//       .catch(err => next(err))
//   }
//   if (keyWord === 'touch_time') {
//     const newTime = [newParam];
//     const updateQuery = `UPDATE event
//     SET touch_time = $1`;
//     db.query(updateQuery, newTime)
//       .then(result => result.json())
//       .then(result => {
//         return next()
//       })
//       .catch(err => next(err))
//   }
//   if (keyWord === 'numOfContacts') {
//     const newNum = [newParam];
//     const updateQuery = `UPDATE event
//     SET numofcontacts = $1`;
//     db.query(updateQuery, newNum)
//       .then(result => result.json())
//       .then(result => {
//         return next()
//       })
//       .catch(err => next(err))
//   }
// }

// //Grabbing all contacts associated with a specific touch

// db.getAllContacts = (req, res, next) => {
//   const { event_id } = req.params;
//   const touch = [event_id];
//   const grabContacts = `SELECT c.*, e.event_id
//   FROM contact c
//   INNER JOIN joinContactAndEvent j
//   ON c.contact_id = j.contact_id
//   INNER JOIN event e
//   ON j.event_id = e.event_id
//   WHERE e.event_id = $1`
//   async function listContacts () {
//     const result = await db.query(grabContacts, touch);
//     console.log(result);
//     res.locals.allContacts = result.rows;
//     return next();
//   } listContacts()
//   .catch(err => next(err))
// }

module.exports = dbTouch;