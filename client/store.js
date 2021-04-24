import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extention';
import thunk from 'redux-thunk';
//import reducers file here
import reducer from './reducers/reducers';
//import actions file here if you want to use line 17



const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);


//if we want to automatically load something from the database when first rendering use command below:
//store.dispatch(<insert_action_here>);

export default store;