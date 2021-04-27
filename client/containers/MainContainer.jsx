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
import ViewTouch from '../components/forms/ViewTouch.jsx';
import CreateButtons from '../components/CreateButtons.jsx';


const mapStateToProps = ({ userData, display }) => ({
  userContacts: userData.userContacts,
  userTouchEvents: userData.userTouchEvents,
  userInfo: userData.userInfo,
  feedView: display.feedView,
  cardView: display.cardView
});

//separate out each reducer function to be used
const mapDispatchToProps = dispatch => ({
    getUser: (userId) => dispatch(actions.getUser(userId)),
    viewContacts: () => dispatch(actions.viewContacts()),
    viewTouchEvents: () => dispatch(actions.viewTouchEvents()),
    viewSpecificContact: (contactId) => dispatch(actions.viewSpecificContact(contactId)),
    viewSpecificTouch: (touchId) => dispatch(actions.viewSpecificTouch(touchId))
})

const MainContainer = props => {

    let view = [];
    //set view variable to render component based on the state of the app
    //this state is toggled by the user clicking buttons a the top of the main container
    //console.log(props.cardView.type);

    //if the state "cardView" has an id set to new, it means we want to create a new contact, so there is no obj to pass down
    const contactObj = props.cardView.id === 'new' ? 'new' : props.userContacts[props.cardView.id];
    const touchObj = props.cardView.id === 'new' ? 'new' : props.userTouchEvents[props.cardView.id];
    
    //if there is a cardView property set, use it's type property in the switch. 
    //else, use the feedView to decide what to render on the page
    switch (props.cardView.type || props.feedView) {
      case 'contactCard':{
        // if the cardView state has a type of 'contact', render the card for a specific contact using id from the cardView object in state
        view.push(<ViewContact contactObj={contactObj}/>);
        break;
      }
      case 'touchCard':{
        view.push(<ViewTouch touchObj={touchObj}/>);
        break;
      }
      // If there is a cardView property set, one of the above two cards would be triggered.
      // If not, the below cases would be triggered from the feedView 
      case 'Contacts': {
        view.push(<ViewButtons
          viewContacts={props.viewContacts}
          viewTouchEvents={props.viewTouchEvents}
          />)
        view.push(<ContactsContainer />)
        break;
      } 
      case 'Touches': {
        view.push(<ViewButtons
          viewContacts={props.viewContacts}
          viewTouchEvents={props.viewTouchEvents}
        />)
        view.push(<TouchEventsContainer />)
        break;
      }
    }

    return (
        //insert all subsequent containers or buttons etc. here
        //eg: <ContactsContainer {...props} />
        //<TouchEventsContainer {...props} />
        <div className="main-container">
            <h3>Welcome, {props.userInfo.firstName}</h3>
            <CreateButtons 
              viewSpecificContact={props.viewSpecificContact}
              viewSpecificTouch={props.viewSpecificTouch}
            />
            {view}
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

