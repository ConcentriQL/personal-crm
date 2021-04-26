import React from 'react';
import ContactUpcomingTouches from './ContactUpcomingTouches.jsx';

const TouchEventCard = props => {

  const touchId = props.touchObj.id
  const touchTime = props.touchObj.eventTime;
  const touchName = props.touchObj.eventName;
  const contactInfo = props.userContacts;

  

  return (
    <p>Touch Card</p>
  )
};

export default TouchEventCard;
