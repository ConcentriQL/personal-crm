import React from 'react';
import { connect } from 'react-redux';
//import child components here
//import actions file here
import * as actions from '../actions/actions.js';

const mapStateToProps = ({
    //reducers: all the reducers
}) => ({
    //separate out each reducer
});

const mapDispatchToProps = dispatch => ({
    //every action as a function with dispatch invoked
    //eg: createNewContact: (<ANY PARAMETERS NEEDED>) => dipatch(actions.createNewContact(<PASS IN ARGUMENTS>))
})

const MainContainer = props => (
    //insert all subsequent containers or buttons etc. here
    //eg: <ContactsContainer {...props} />
    <h2>HERE</h2>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);