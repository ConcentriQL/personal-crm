import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';
import ContactCard from '../components/ContactCard.jsx'
import ViewContact from '../components/forms/ViewContact.jsx';

const mapStateToProps = ( { userData } ) => ({  
  userContacts: userData.userContacts,
  userTouchEvents: userData.userTouchEvents,
});

const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dispatch(actions.createNewContact(<PASS IN ARGUMENTS>))

})

const ContactsContainer = props => {
  //insert all subsequent containers or buttons etc. here
  const {userContacts, userTouchEvents} = props
  const contactCardList = [];
  
  const maxContactsToShow = 5;
  let contactsToShow = Math.min(Object.keys(userContacts).length, maxContactsToShow); //move this to state and have it incremenent on scroll or click
  //use for of loop on Object keys to avoid accidentally traversing up the prototype chain w/ a for...in 
  for (let i = 0; i < contactsToShow; i++){
    // doing it this way will allow us to sort the contact before rendering
    const key = Object.keys(userContacts)[i]
    contactCardList.push(
      <ContactCard 
        key={i}
        contactObj={userContacts[key]} 
        userTouchEvents={userTouchEvents} 
      />
    )
  }


  return(
    <div className="contactsContainer">
      <h2>Contacts</h2>
      {contactCardList}
    </div>
  )
  // redner an array of components, <ContactCard>
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);