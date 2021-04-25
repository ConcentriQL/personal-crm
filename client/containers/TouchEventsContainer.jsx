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

const TouchEventsContainer = props => (
    //insert all subsequent containers or buttons etc. here
    <div>
      <h2>TouchEventsContainer</h2>
      <p>{props.userContacts['1'].firstName}</p>
      <p>{props.userContacts['1'].lastName}</p>
      <p>{props.userContacts['1'].email}</p>
    </div>
    //renders and array of TouchEventCard
);

export default connect(mapStateToProps, mapDispatchToProps)(TouchEventsContainer);