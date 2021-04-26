import { bindActionCreators } from 'redux';
import * as types from '../actions/actionTypes.js';

const initialState = {
    //dummy state

    //we should add a display reducers that will control the flow of the display state. (which toggle is clicked, how many cards are showing, is a modal open, loggedinVsOut)

    feedView: 'Contacts', //valid choices: Contacts, Touches
    isLoggedIn: false, //need to be set to false initall
    cardView: false,

}

const displayReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN: {
            return {
                ...state,
                isLoggedIn: action.payload
            }
        }

        case types.LOG_OUT: {
            return {
                ...state,
                isLoggedIn: action.payload
            }
        }

        case types.VIEW_CONTACTS: {
            return {
                ...state,
                feedView: action.payload
            }
        }

        case types.VIEW_TOUCH_EVENTS: {
            return {
                ...state,
                feedView: action.payload
            }
        }

        case types.VIEW_SPECIFIC_CONTACT:{          
          return {
            ...state,
            cardView: {type: 'contactCard', id: action.payload}
          }
        }

        case types.VIEW_SPECIFIC_TOUCH:{
          return {
            ...state,
            cardView: {type: 'touchCard', id: action.payload}
          }
        }

        case types.CLOSE_CARD:{
          return{
            ...state,
            cardView: false
          }   
        }  
            default: return state;
    }
   }

    export default displayReducers;
    
    //need to add to store.js and index.js to access it
    
    

                                                                                      