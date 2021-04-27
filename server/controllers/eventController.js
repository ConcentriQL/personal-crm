const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const db = require('../../models/dbModel')

const eventController = {};

//CREATE A NEW TOUCH EVENT
eventController.createevent = (req, res, next) => {
    const { event_name, event_date, touch_time, event_importance, event_recurring, num_of_contacts } = req.body;
    const newTouchParams = [event_name, event_date, touch_time, event_importance, event_recurring, num_of_contacts];
    console.log(req.body);
    const newTouchQuery = `INSERT INTO event (event_name, event_date, touch_time, event_importance, event_recurring, numofcontacts)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING event_id`;
    db.query(newTouchQuery, newTouchParams)
      .then(result => { console.log(result)
    //   .then(result => {
    //     console.log(result);
    //     //this is not the actually spot for eventId
    //     res.locals.eventId = result;
        return next();
      })
    //   })
      .catch(err => next(err))
  };

//GET ALL EVENTS
  eventController.getEvents = (req, res, next) => {
    console.log('GET EVENTS, GET EVENTS, GET EVENTS, GET EVENTS, GET EVENTS, GET EVENTS, GET EVENTS, GET EVENTS, GET EVENTS');
    const { userId } = req.body;
    const queryGetEvents = `SELECT e.event_id, e.event_name AS "eventName", e.event_date AS "eventDate", e.touch_time as "touchTime", e.event_importance AS "eventImportance", e.event_recurring AS "eventRecurring", e.numofcontacts AS "numofcontacts", j.contact_id AS "contactId"
    FROM event e LEFT JOIN joincontactandevent AS j ON e.event_id = j.event_id
    WHERE event_userid = ${userId}`;
    // const queryGetEvents = `SELECT e.*, j.contact_id 
    // FROM event e LEFT JOIN joincontactandevent j ON e.event_id = j.event_id
    // WHERE  event_userid = ${userId}`;
    async function getAllEvents () {
        const events = await db.query(queryGetEvents);
        console.log('test');
        // console.log(events.rows)
        const newArray = updateCotnactIdtoArray(events.rows);
        console.log(newArray);
        // res.locals.allEvents = {eventName: newArray.event_name, eventDate: newArray.event_date, touchTime: newArray.touch_time, numOfContacts: newArray.numofcontacts}
        res.locals.allEvents = newArray; 
        console.log(res.locals.allEvents)
        return next();
    } getAllEvents()
    .catch(err => next({log: err}));
}

//GET ALL EVENT CONTACTS

eventController.getEventContacts = (req, res, next) => {
    const { event_id } = req.params;
    const touch = [event_id];
    const grabContacts = `SELECT c.*, e.event_name, e.event_date, e.touch_time, e.numofcontacts
    FROM contact c
    INNER JOIN joinContactAndEvent j
    ON c.contact_id = j.contact_id
    INNER JOIN event e
    ON j.event_id = e.event_id
    WHERE e.event_id = $1`;
    async function listContacts () {
      const result = await db.query(grabContacts, touch);
      console.log(result);
      res.locals.allContacts = result.rows;
      return next();
    } listContacts()
    .catch(err => next(err))
  }

//UPDATE EVENT

eventController.updateEvent = (req, res, next) => {
    
    const keys = [], values = [];
    const { id } = req.params;
    for(let info in req.body){
        if(req.body[info]){
            keys.push(info);
            values.push(req.body[info]);
        }
    }
    console.log(req.body);
    let updateEventQuery = `UPDATE event SET `;

    for(let i = 0; i < keys.length; i++){
        updateEventQuery = updateEventQuery + `${keys[i]} = $${i + 1}, `;
    }
    console.log(keys, values);
    let updateEventQuerySliced = updateEventQuery.slice(0, -2);
    updateEventQuerySliced = updateEventQuerySliced + ` WHERE event_id = ${id}`;

    async function updateEventInfo(){
        const updated = await db.query(updateEventQuerySliced, values);
        console.log(updated);
        return next();
    } updateEventInfo()
    .catch(err => next(err));
}

//DELETE EVENT

eventController.deleteEvent = (req, res, next) => {
    const { event_id } = req.params;
    const idParams = [event_id];
    const deleteEventQuery = 'DELETE FROM event WHERE event_id = $1';
    const deleteTouchinJoin = `DELETE FROM joincontactandevent WHERE event_id = $1`;
    async function deleteEventInfo(){
        const deletion = await db.query(deleteEventQuery, idParams);
        const result2 = await db.query(deleteTouchinJoin, idParams);
        return next();
    } deleteEventInfo()
    .catch(err => next(err));
}



  //Grabbing all contacts associated with a specific touch

/*
contact_id = 1     j.contact_id = 1   j.event_id = 1    event_id = 1
contact_id = 2     j.contact_id = 1   j.event_id = 2    event_id = 1
contact_id = 3     j.contact_id = 2   j.event_id = 1    event_id = 2
*/

function updateCotnactIdtoArray (arr) {
  console.log('in the function')
  //initialize an event_id holder object w/ event_id's from previous objects as keys and true as values
  const id = {};
  //initialzing a new array that will be returning. We'll push in all objects that have an evnet_id that is not in our id object
  const newArr = [];
  //iterate through initial array
  for (let i = 0; i < arr.length; i++) {
    //check if the current object's event_id is currently in our id object
    if (id[arr[i].event_id]) {
      //if it is then grab the current objects contact_id and store it in variable c
      let c = arr[i].contact_id
      //push variable c in the previous object in our newArr's contact_id's array
      newArr[newArr.length - 1].contact_id.push(c);
    }
    //if event_id is not current in our id object then just into this else
    else {
      //grab the contact_id and set equal to c
      let c = arr[i].contact_id;
      //grab the key contact_id in our object and reassign the value to be an array with c in it
      arr[i].contact_id = [c];
      //push object into newArr
      newArr.push(arr[i])
      //grab the event_id from our current object
      let event = arr[i].event_id;
      //store the event_id into the id object for future checking
      id[event] = true;
    }
  }
  //return newArr
  return newArr;
}











module.exports = eventController;