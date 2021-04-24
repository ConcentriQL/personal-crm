//importing axios here to use (different way of doing fetch requests)
import axios from 'axios';
//import actionTypes file here

//each action function can be exported individually
//eg: export const <FUNCTION NAME HERE> = (<IF FUNCTION NEEDS PARAMETERS INSERT HERE>) => (dispatch, getState) {
    //dipatch to be used to dispatch to our reducers
    //getState is used if we need to do any axios put/patch/delete etc based on current state
//}

export const getUserContacts = (userID) => {
    axios.get(/*specific path*/)
    .then(response => { //response = array of objects
        response.forEach(contact => {
            axios.get(/*specific path*/) //contacts touch event id
        })
    })
}