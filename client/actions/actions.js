//importing axios here to use (different way of doing fetch requests)
import axios from 'axios';
//import actionTypes file here
import * as types from './actionTypes.js';


/* THIS IS THE BEAST - GET from DB:
     - User Info (a single object)
     - User Contacts (Array of Objects)
     - User TouchEvents (Array of Objects)
 */
export const getUser = (userObj) => (dispatch, getState) => {
  
  /* THE DB CALLS ARE CURRENTLY NOT IN SERVICE 
    - There is stub code below that allows the page to render
    - The DB should return similarly fromatted array and it should be processed into an object of objects and placed into State
    - One issue the backend team had was sending the eventId and contactId back in camelCase, I beleive this is because they used it as a join key to their join table and couldn't also use an alias. ~ So the processing functions (commented below should be changed to process on event_id and contact_id or the backend error needs to be fixed)
  */

  // variables to include in payload
  let userContacts, userTouchEvents, userInfo;
  
  //Grab the userId from the userInfo Object to launch future DB calls
  const { userId } = userObj;
  console.log('USER ID IS: ',userId)

  userInfo = userObj; //this copies the user info passed from login into the state

  //This DB call should return a promise that evaluates to the processed userContacts  
  const getContacts = axios({
    method: 'post',
    url: `/database/getcontacts`,
    data: {
      userId: userId
    }
  })
  .then((result) => {
    console.log('getContacts returned')
    console.log(result.data);
    userContacts = {}
    //the line processes the API datat into an easily referenceable Object of Objects in state where the keys are contactId
    result.data.forEach(contactObj => userContacts[contactObj.contactId] = contactObj)
    return Promise.resolve(userContacts);
  })
  .catch( (error) => {
    console.log(error)
  })

  //This DB call should return a promise that evaluates to the processed userEvents 
  const getEvents = axios({
    method: 'post',
    url: `/events/getallevents`,
    data: {
      userId: userId
    }
  })
  .then((result) => {
    console.log('getEvents returned')
    console.log(result.data);
    userTouchEvents = {}
    //the line processes the API datat into an easily referenceable Object of Objects in state where the keys are eventId
    result.data.forEach(eventObj => userTouchEvents[eventObj.eventId] = eventObj)
    return Promise.resolve(userTouchEvents);
  }, (error) => {
    console.log(error)
  })

  // Stub data to sample DB
  //WE WILL NEED DATABASE USE ALIASES IN THE SELECT AND RETURNING STATEMENTS
  const userContactStub = [
    { contactId: 1, firstName: "Helen", lastName: "Regula", email: 'lsdjfalksd@gmail.com', phoneNumber: '123456789', prefferedMethod: 'call', contactCircle: 'family', contactPriority: 'high', touchEventIds: [1, 2] },
    { contactId: 2, firstName: "James", lastName: null, email: 'other@gmail.com', phoneNumber: '987654321', prefferedMethod: 'email', contactCircle: 'family', contactPriority: 'low', touchEventIds: [1, 2] },
    { contactId: 3, firstName: "Kat", lastName: '', email: '277@gmail.com', phoneNumber: '1231234455', prefferedMethod: 'text', contactCircle: 'family', contactPriority: 'low', touchEventIds: [] }
  ]

  //process stub data
  userContacts = {}
  userContactStub.forEach(contactObj => userContacts[contactObj.contactId] = contactObj)

  const userTouchEventStub = [
    { eventId: 1, eventName: "Birthday", eventDate: '2022-01-09', touchTime: '4:00pm', eventImportance: 'high', eventRecurring: 'annual', numOfContacts: 1, associatedContacts: [2] },
    { eventId: 2, eventName: "Follow Up", eventDate: '2021-05-18', touchTime: '7:59am', eventImportance: 'medium', eventRecurring: 'once', numOfContacts: 2, associatedContacts: [1,3] },
  ]

  //process stub data
  userTouchEvents = {}
  userTouchEventStub.forEach(eventObj => userTouchEvents[eventObj.eventId] = eventObj)

  const userInfoStub = {
    userId: 3,
    firstName: 'Bilbo',
    lastName: 'Baggins',
    email: 'bibbaggins03@aol.com'
  }
  // takes the DB response and populates the userContacts object with each individual contact object
  // where the key is the contactId for simple lookup later (since ID may not equal array index)
  
  userInfo = userInfoStub;


  /* AT ONE POINT WE HAD THESE WORKING */

  // Promise.all([getEvents, getContacts])
  //   .then(data => {
  //     console.log(data)
  //     dispatch({
  //       type: types.GET_USER,
  //       payload: {
  //         userContacts: userContacts,
  //         userTouchEvents: userTouchEvents,
  //         userInfo: userInfo
  //       }
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('error in getUser', err)
  //   })

    dispatch({
      type: types.GET_USER,
      payload: {
        userContacts: userContacts,
        userTouchEvents: userTouchEvents,
        userInfo: userInfo
      }
    })
}

/*
Invoked on successful login verification from server 
*/
export const logIn = () => ({
  type: types.LOG_IN,
  payload: 'true'
})

export const logOut = () => ({
  type: types.LOG_OUT,
  payload: 'false'
})

export const viewContacts = () => ({
  type: types.VIEW_CONTACTS,
  payload: 'Contacts'
})

export const viewTouchEvents = () => ({
  type: types.VIEW_TOUCH_EVENTS,
  payload: 'Touches'
})

export const viewSpecificContact = (contactId) => ({
  type: types.VIEW_SPECIFIC_CONTACT,
  payload: contactId,
})

export const viewSpecificTouch = (touchId) => ({
  type: types.VIEW_SPECIFIC_TOUCH,
  payload: touchId,
})

export const closeCard = () => ({
  type: types.CLOSE_CARD,
})
