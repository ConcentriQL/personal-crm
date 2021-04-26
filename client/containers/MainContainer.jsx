import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';
import ContactsContainer from './ContactsContainer.jsx';
import ViewButtons from '../components/ViewButtons.jsx'
import LoginContainer from './LoginContainer.jsx';
import TouchEventsContainer from './TouchEventsContainer.jsx'


const mapStateToProps = ({ userData, display }) => ({
    userInfo: userData.userInfo,
    feedView: display.feedView
});
//separate out each reducer


const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dispatch(actions.createNewContact(<PASS IN ARGUMENTS>))
    getUser: (userId) => dispatch(actions.getUser(userId)),
    viewContacts: () => dispatch(actions.viewContacts()),
    viewTouchEvents: () => dispatch(actions.viewTouchEvents())

})

const MainContainer = props => {

    let view;
    //decalre variable
    switch (props.feedView) {
        case 'Contacts': {
            view = <ContactsContainer />
            break;
        }
        case 'Touches': {
            view = <TouchEventsContainer />
            break;
        }
    }
    //variable set in switch


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

