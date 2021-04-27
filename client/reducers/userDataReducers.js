/*may be too generic of a file name, here we will define our reducers where actions will dispatch to and update state accordingly*/

//import all actions from actionTypes
import { bindActionCreators } from 'redux';
import * as types from '../actions/actionTypes.js';

//initialize initialState
const initialState = {
  //Stare starts empty and is populated be the GET USER reducer that is fired off at login
  // - It should then be maintained by future reducers as items go through CRUD 
  // - (e.g. when the ADD CONTACT reducer is fired, it should add the new object to the userContacts piece of state when the DB confirms successful add and returns a user ID)
  userContacts: {},
  userTouchEvents: {},
  userInfo: {}

  
}

/* THIS REDUCER CONTROLS ALL THE STATE RELATING THE CURRENT USER AND THEIR ACCOUNT DATA 
    - Display state variables are setup in the displayReducers file
*/

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_USER: {
      const userContacts = action.payload.userContacts;
      const userTouchEvents = action.payload.userTouchEvents;
      const userInfo = action.payload.userInfo;
      //should be able to override state with single word because the labels match
      //may need to rename varibale names if code is breaking to different variable names than the ones in our state
      return {
        ...state,
        userContacts,
        userTouchEvents,
        userInfo
      }
    }

    case types.ADD_CONTACT: {
      const newContacts = { ...state.userContacts };
      newContacts[action.payload.contactId] = action.payload;
      return {
        ...state,
        userContacts
      };
    }

    case types.ADD_TOUCH_EVENT: {
      const newTouchEvent = { ...state.userTouchEvents };
      newTouchEvent[action.payload.eventId] = action.payload;
      return {
        ...state,
        userTouchEvents
      }
    }



    case types.UPDATE_CONTACT: {
      const userContacts = { ...state.userContacts };
      // userContacts[action.payload.contactId] = action.payload;
      let currentContact = userContacts[action.payload.contactId];
      currentContact = Object.assign(currentContact, action.payload); // this is the line I'm least sure about 

      return {
        ...state,
        userContacts
      }
    }

    case types.UPDATE_TOUCH_EVENT: {
      const userTouchEvents = { ...state.userTouchEvents };

      let currentTouchEvent = userTouchEvent[action.payload.eventId];
      currentTouchEvent = Object.assign(currentTouchEvent, action.payload);

      return {
        ...state,
        userTouchEvents
      }
    }

    case types.CLEAR_USER_DATA: {
      return initialState
    }

    default: return state;
  }
}

export default reducers;


/*





*/



//Completed Reducer
/*
export const GET_USER = 'GET_USER';
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_TOUCH_EVENT ='ADD_TOUCH_EVENT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_TOUCH_EVENT = 'UPDATE_TOUCH_EVENT';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
*/
