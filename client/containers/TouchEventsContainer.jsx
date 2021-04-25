import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';
import TouchEventCard from '../components/TouchEventCard.jsx';

const mapStateToProps = ( mainReducer ) => ({  
  userContacts: mainReducer.userContacts,
  userTouchEvents: mainReducer.userTouchEvents,
});

const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dispatch(actions.createNewContact(<PASS IN ARGUMENTS>))

})

const TouchEventsContainer = props => {
    //insert all subsequent containers or buttons etc. here

  const {userContacts, userTouchEvents} = props
  const touchEventCardList = [];
  const maxCardsToShow = 5;
  let cardsToShow = Math.min(Object.keys(userTouchEvents).length, maxCardsToShow); 
  
  for (let i = 0; i < cardsToShow; i++){
    // doing it this way will allow us to sort the events before rendering
    const key = Object.keys(userTouchEvents)[i] 
    touchEventCardList.push(
      <TouchEventCard 
        touchObj={userTouchEvents[key]} 
        userContacts={userContacts} 
      />
    )
  }

  return(
    <div>
      <h2>Touches</h2>
      {touchEventCardList}
    </div>
    //renders and array of TouchEventCard
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchEventsContainer);