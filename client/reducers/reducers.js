/*may be too generic of a file name, here we will define our reducers where actions will dispatch to and update state accordingly*/

//import all actions from actionTypes
import * as types from '../actions/actionTypes.js';

//initialize initialState
const initialState = {
    //need to decide what info needed for display
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //case for each action type
            //what state should now look like based on this action
        //many cases...
        default: return state;
    }
}

export default reducer;
