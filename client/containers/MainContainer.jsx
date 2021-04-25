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
    <div>
      <h2>MainContainer</h2>
      <h3>Hi, {props.userInfo.firstName}</h3>
      <ContactsContainer />
      <TouchEventsContainer />
    </div>
);

export default connect(mapStateToProps, null)(MainContainer);

//need to change to mapDispatchToProps where null is