/*needed to combine our reducers into our store file!*/

import { combineReducers } from 'redux';
//import any and all reducer files here
import userDataReducers from './userDataReducers'
import displayReducers from './displayReducers'

// console.log('reducers loads', reducers);

export default combineReducers({
    //name of the reducer: name of the imported file,
    userData: userDataReducers,
    display: displayReducers
});