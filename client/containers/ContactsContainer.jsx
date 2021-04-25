import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';

const mapStateToProps = ( mainReducer ) => ({  
  userContacts: mainReducer.userContacts,
  userTouchEvents: mainReducer.userTouchEvents,
});

const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dispatch(actions.createNewContact(<PASS IN ARGUMENTS>))

})

const ContactsContainer = props => (
    //insert all subsequent containers or buttons etc. here
    <h2>Contacts</h2>
    // redner an array of components, <ContactCard>
);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);