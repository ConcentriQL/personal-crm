import React from 'react';
import { connect } from 'react-redux';
import ContactUpcomingTouches from './ContactUpcomingTouches.jsx';
import * as actions from '../actions/actions.js'

const mapDispatchToProps = dispatch => ({
  viewSpecificContact: (contactId) => dispatch(actions.viewSpecificContact(contactId)),
  viewSpecificTouch: (touchId) => dispatch(actions.viewSpecificTouch(touchId))
})

const ContactCard = props => {

  const { contactObj } = props;
  const contactId = contactObj.contactId

  let contactName = contactObj.firstName + (contactObj.lastName ? ` ${contactObj.lastName}` : ''); //if no last name exists, leave blank

  return (
    <div className="contact-card" id={`cc-${contactId}`}>
      <div className="contact-header" onClick={() => {
        console.log('clicky click', contactId)
        props.viewSpecificContact(contactId)}
      }>
        <div className="contact-pic"><img src="https://img.icons8.com/cotton/2x/user-male--v4.png" /></div>
        <p className="contact-name">{contactName}</p>
      </div>
      <ContactUpcomingTouches 
        contactId={contactId} 
        touchIds={contactObj.touchEventIds}
        touchEvents={props.userTouchEvents}
        viewSpecificTouch={props.viewSpecificTouch}
      />
    </div>
  )
};



export default connect(null, mapDispatchToProps)(ContactCard)
