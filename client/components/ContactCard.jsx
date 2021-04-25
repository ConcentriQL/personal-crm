import React from 'react';
import ContactUpcomingTouches from './ContactUpcomingTouches.jsx';

const ContactCard = props => {

  const { contactObj } = props;

  let contactName = contactObj.firstName + (contactObj.lastName ? ` ${contactObj.lastName}` : ''); //if no last name exists, leave blank

  return (
    <div className="contact-card" id={`cc-${props.contactObj.id}`}>
      <div className="contact-pic"><img src="https://img.icons8.com/cotton/2x/user-male--v4.png" /></div>
      <div className="contact-name">{contactName}</div>
      <ContactUpcomingTouches 
        contactId={props.contactObj.id} 
        touchIds={props.contactObj.touchEventIds}
        touchEvents={props.userTouchEvents}
      />
    </div>
  )
};

export default ContactCard;
