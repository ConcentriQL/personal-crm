import React, { useState } from 'react';
import { connect } from 'react-redux';
import TouchForm from './TouchForm.jsx';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(actions.closeCard())
})


//copy contact form
//expects a contactObj as props
const ViewTouch = props => {

  const [canEdit, toggleEdit] = useState(false)

  //if this a new contact, make sure the form is unlcoked to be edited and dont display edit button
  const isNew = (props.touchObj === 'new')
  if (isNew && !canEdit) toggleEdit(true);

  return (
    <div>
      <h2>Touches</h2>{!isNew && <button className="edit-form-button" onClick={() => toggleEdit(true)}>Edit</button>}
      <button className="form-back-button" onClick={() => props.closeCard()}>Back</button>
      <button className="delete-button">Delete</button>
      <TouchForm isViewOnly={!canEdit} touchObj={props.touchObj}/>
    </div>
  )
};
  
export default connect(null, mapDispatchToProps)(ViewTouch);