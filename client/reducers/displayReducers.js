import { bindActionCreators } from 'redux';
import * as types from '../actions/actionTypes.js';

const initialState = {
    //dummy state
    
    //we should add a display reducers that will control the flow of the display state. (which toggle is clicked, how many cards are showing, is a modal open, loggedinVsOut)

    feedView: 'Contacts', //valid choices: Contacts, Touches
    isLoggedIn: true, //need to be set to false initally 
    
}

const displayReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:{
            return {
                ...state,
                isLoggedIn: true
            }
        }

        case types.LOG_OUT:{
            return{
                ...state,
                isLoggedIn: false
            }
        }

        case types.VIEW_CONTACTS:{
            return {
                ...state,
                feedView: 'Contacts'
            }
        }

        case types.VIEW_TOUCH_EVENTS: {
            return {
                ...state,
                feedView: 'Touches'
            }
        }

        default: return state;
    }
}

export default displayReducers;

//need to add to store.js and index.js to access it



