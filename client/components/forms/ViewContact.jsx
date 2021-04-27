import React, { useState } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm.jsx';
import * as actions from '../../actions/actions.js'

const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch(actions.closeCard())
})

//expects a contactObj as props
const ViewContact = props => {

  const [canEdit, toggleEdit] = useState(false)
  //if this a new contact, make sure the form is unlcoked to be edited and dont display edit button
  const isNew = (props.contactObj === 'new')
  if (isNew && !canEdit) toggleEdit(true);

  return (
    <div className="ViewContact-Container">
      <h2>Contact</h2>{!isNew && <button className="edit-form-button" onClick={() => toggleEdit(true)}>Edit</button>}
      <button className="form-back-button" onClick={ () => props.closeCard() }>Back</button>
      <button className="delete-button">Delete</button>
      <ContactForm isViewOnly={!canEdit} contactObj={props.contactObj}/>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(ViewContact);
