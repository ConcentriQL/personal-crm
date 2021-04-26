//copy from Contact Form
import React from 'react';

/* Note to future developers. This form component system is like my favorite child and if you hurt it I will hunt you down */

// expects props: formClass (for html class), type: (create or update), [contactOnbj (only if type=update)]
// relevant docs: https://reactjs.org/docs/forms.html, https://reactjs.org/docs/forms.html, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
const TouchForm = props => {

  const {isViewOnly, touchObj} = props;
  const isNew = (touchObj === 'new')

  //default state for the form, used for "Create new Touch"
  let touch = { 
    eventId: null, 
    eventName: null, 
    eventDate: null, 
    touchTime: null, 
    eventImportance: null,
    eventRecurring: null,
    numOfContacts: null, 
    associatedContacts: null 
  }

  //if the contactObj is not new, overwrite the default states with the contact specific info
  if(!isNew) touch = Object.assign(touch,touchObj)
  // need to fix the :disabled CSS https://stackoverflow.com/questions/47840194/how-to-disable-input-but-not-get-the-greyed-out-tone-on-the-text

  //render form
  return (
    //make sure to include the contact id for update requests in the onSubmit
    //make sure to include the user id for create requests in the onSubmit
    //need to add DB calls here
    <form 
      className={`TouchForm ${props.formClass}`} 
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target)
        
        if(isNew) {}//send create API call
        else if(!isNew) {} //send update API Call
        else {
          console.log('and error occured submitting contact form');
        }
      }
        //put API call here

    }>
      <fieldset disabled={isViewOnly}>
        <label htmlFor="event_name">Event: </label>
        <input type="text" id="eventname" name="event_name" defaultValue={touch.eventName}/>
        <br />
        <label htmlFor="event_date">Date: </label>
        <input type="text" id="event_date" name="event_date" defaultValue={touch.eventDate}
        />
        <br />
        <label htmlFor="touch_time">Time: </label>
        <input type="text" id="touch_time" defaultValue={touch.eventTime} name="touch_time" id="touch_time">
        </input>
        <br />
        <label htmlFor="event_importance">Priority: </label>
        <select defaultValue={touch.eventImpotance} id="event_importance" name="event_importance">
        <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <br />
        <label htmlFor="event_recurring">Recurring Touch?: </label>
        <select defaultValue={touch.eventRecurring} id="event_recurring" name="event_recurring">
        <option value="once">Once</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
        <br />
          {/* This line = if the form is not View Only, include a Save & Submit button */}
          {!isViewOnly && <button>Save</button>} 
      </fieldset> 
    </form>
  )
};

export default TouchForm;
