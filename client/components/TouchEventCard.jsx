import React from 'react';


const TouchEventCard = props => {
  
  const { touchObj, userContacts } = props;
  
  console.log('USER CONTACTS OBJECT IN TOUCH EVENT CARD: ', userContacts)

  let contactNames = '';

  //loop through the associatedContacts in touchObj and grab their first names and concat it to the variable contactNames
  touchObj.associatedContacts.forEach(contact => {

    if (contactNames.length === 0){
      contactNames = contactNames.concat(userContacts[contact].firstName)
    } else {
      contactNames = contactNames.concat(` & ${userContacts[contact].firstName}`)
    }
    
  })

  

  return (
    <div className="event-card" id={`cc-${touchObj.eventId}`}>
      <div className="event-header">
       <h4 className="event-name">{touchObj.eventName} With {contactNames}</h4>

      </div>

      <div className="event_details">
        <p className="event-date">Date: {touchObj.eventDate}</p>
        <p className="touch-time">Time: {touchObj.touchTime}</p>
        <p className="event_importance">Priority: {touchObj.eventImportance}</p>
        <p className="event_recurring">Recurring Event: {touchObj.eventRecurring}</p>
      </div>

    </div>
  )
};

export default TouchEventCard;

/*
eventId: null, 
    eventName: null, 
    eventDate: null, 
    touchTime: null, 
    eventImportance: null,
    eventRecurring: null,
    numOfContacts: null, 
    associatedContacts: null 
*/
