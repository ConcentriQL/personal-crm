import React from 'react';

const ContactUpcomingTouches = props => {
  
  const numOfTouches = Math.min(3,props.touchIds.length); //display all upcoming touches up 3
  const upcomingTouchList = []; //array to hold touch list
  let touchId, touchObj, touchDate, touchLabel; //variables used to 

  for(let i = 0; i < numOfTouches; i += 1){
    touchId = props.touchIds[i]; //DB id of the event 
    touchObj = props.touchEvents[touchId]; //Object containing all data related to the touchEvent
    //https://stackoverflow.com/questions/42987492/format-time-in-sql
    touchDate = touchObj.eventDate; //will need to convert this to proper format. Look into https://momentjs.com/
    touchLabel = touchObj.name; //would like to change the variavble "name" to label
    
    upcomingTouchList.push(
    <li id={`cc-ut-${touchId}`}> {/* li #id = contactCard-upcomingTouch-id*/}
      <p><span className="upcoming-touch-date">{touchDate}: </span><span className="upcoming-touch-label">{touchLabel}</span></p>
    </li>
    )
  }


  return (
    <div className="upcoming-events" id={`ue-${props.contactId}`}> 
      <h5>Upcoming Touches</h5>
      {/* Conditional Render - if there are upcoming touches, display them (max 3 set above); else display link to add new Touch*/}
      {numOfTouches > 0 
        ? <ul className="cc-upcoming-touch-list">{upcomingTouchList}</ul>
        : <button>Schedule a Touch!</button>
      }
    </div>
  )
};

export default ContactUpcomingTouches;
