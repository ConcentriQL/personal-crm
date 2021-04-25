import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import reducers file here
import userData from './reducers/userDataReducers';
import displayReducer from './reducers/displayReducers'
import reducers from './reducers/index.js'
//import actions file here if you want to use line 17
import * as actions from './actions/actions.js'



const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);


//if we want to automatically load something from the database when first rendering use command below:
// store.dispatch(actions.getUser(3));

export default store;