import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';
import ContactsContainer from './ContactsContainer.jsx';
import ViewButtons from '../components/ViewButtons.jsx'
import LoginContainer from './LoginContainer.jsx';
import TouchEventsContainer from './TouchEventsContainer.jsx'
import ViewContact from '../components/forms/ViewContact.jsx';


const mapStateToProps = ({ userData, display }) => ({
  userContacts: userData.userContacts,
  userTouchEvents: userData.userTouchEvents,
  userInfo: userData.userInfo,
  feedView: display.feedView,
  cardView: display.cardView

});
//separate out each reducer
const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dispatch(actions.createNewContact(<PASS IN ARGUMENTS>))
    getUser: (userId) => dispatch(actions.getUser(userId)),
    viewContacts: () => dispatch(actions.viewContacts()),
    viewTouchEvents: () => dispatch(actions.viewTouchEvents()),

})

const MainContainer = props => {
  
    let view;
    //set view variable to render component based on the state of the app
    //this state is toggled by the user clicking buttons a the top of the main container
    console.log(props.cardView.type);

    //if there is a cardView property set, use it's type property in the switch. 
    //else, use the feedView to decide what to render on the page
    switch (props.cardView.type || props.feedView) {
      case 'contactCard':{
        // if the cardView state has a type of 'contact', render the card for a specific contact using id from the cardView object in state
        view = <ViewContact contactObj={props.userContacts[props.cardView.id]}/>
        break;
      }
      case 'touchCard':{
        view = 0;
      }
      case 'Contacts': {
        view = <ContactsContainer />
        break;
      }
      case 'Touches': {
        view = <TouchEventsContainer />
        break;
      }
    }



  


    return (
        //insert all subsequent containers or buttons etc. here
        //eg: <ContactsContainer {...props} />
        //<TouchEventsContainer {...props} />
        <div className="main-container">
            <h3>Welcome, {props.userInfo.firstName}</h3>
            <ViewButtons
                viewContacts={props.viewContacts}
                viewTouchEvents={props.viewTouchEvents}
            />
            {view}
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

