/*may be too generic of a file name, here we will define our reducers where actions will dispatch to and update state accordingly*/

//import all actions from actionTypes
import { bindActionCreators } from 'redux';
import * as types from '../actions/actionTypes.js';

//initialize initialState
const initialState = {
    //dummy state
    userContacts: {
        1: {contactId: 1, firstName: "Helen", lastName: "Regula", email: 'lsdjfalksd@gmail.com', phoneNumber: '123456789', prefferedMethod: 'email', contactCircle: 'family', contactPriority: 'high', touchEventIds: [1, 2]},
        2: {contactId: 2, firstName: "James", lastName: null, email: 'other@gmail.com', phoneNumber: '987654321', prefferedMethod: 'phone', contactCircle: 'family', contactPriority: 'low', touchEventIds: [1,2]},
        3: {contactId: 3, firstName: "Kat", lastName: '', email: '277@gmail.com', phoneNumber: '1231234455', prefferedMethod: 'phone', contactCircle: 'family', contactPriority: 'low', touchEventIds: []}
    },
    //TODO: we need to add the contact Id's to the touch state if we're going to list contact info on the cards
    userTouchEvents: {
        1: {eventId: 1, name: "Birthday", eventDate: '2022-01-09', eventTime: '4:00pm', eventImportance: 'high', isRecurring: 'annual'},
        2: {eventId: 2, name: "Follow Up", eventDate: '2021-05-18', eventTime: '7:59am', eventImportance: 'medium', isRecurring: 'once'}
    },
    userInfo: {
      userId: 3,
      firstName: 'Bilbo',
      lastName: 'Baggins',
      email: 'bibbaggins03@aol.com'
    }
    //we should add a display reducers that will control the flow of the display state. (which toggle is clicked, how many cards are showing, is a modal open, loggedinVsOut)
}

const reducers = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_USER: {
          const userContacts = action.payload.userContacts;
          const userTouchEvents = action.payload.userTouchEvents;
          const userInfo = action.payload.userInfo
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
            const newContacts = {...state.userContacts};
            newContacts[action.payload.contactId] = action.payload;
            return {
                ...state,
                userContacts: newContacts
            };
        }

        case types.ADD_TOUCH_EVENT: {
            const newTouchEvent = {...state.userTouchEvents};
            newTouchEvent[action.payload.eventId] = action.payload;
            return {
                ...state,
                userTouchEvents: newTouchEvent
            }
        }

   

        case types.UPDATE_CONTACT: {
          const userContacts = {...state.userContacts};
          // userContacts[action.payload.contactId] = action.payload;
          let currentContact = userContacts[action.payload.contactId];
          currentContact = Object.assign(currentContact, action.payload); // this is the line I'm least sure about 

          return {
            ...state,
            userContacts
          }
        }

        case types.UPDATE_TOUCH_EVENT:{
          const userTouchEvents = {...state.userTouchEvents};

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
