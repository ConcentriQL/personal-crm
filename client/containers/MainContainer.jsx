import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';
import ContactsContainer from './ContactsContainer.jsx';
import TouchEventsContainer from './TouchEventsContainer.jsx'


const mapStateToProps = ( mainReducer ) => ({
    userInfo : mainReducer.userInfo
});
    //separate out each reducer


const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dispatch(actions.createNewContact(<PASS IN ARGUMENTS>))

})

const MainContainer = props => (
    //insert all subsequent containers or buttons etc. here
    //eg: <ContactsContainer {...props} />
    //<TouchEventsContainer {...props} />
    <div className="main-container">
      <h3>Welcome, {props.userInfo.firstName}</h3>
      {/* TODO: Add Conditional Logic here based on page State (which option is picked) */}
      <ContactsContainer />
      <TouchEventsContainer />
    </div>
);

export default connect(mapStateToProps, null)(MainContainer);

//need to change to mapDispatchToProps where null is