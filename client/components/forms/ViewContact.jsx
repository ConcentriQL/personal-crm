import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm.jsx';

const ViewContact = props => {

  const [canEdit, toggleEdit] = useState(false)

  return (
    <div>
      <h2>View Contact</h2><button onClick={() => toggleEdit(true)}>Edit</button>
      <ContactForm isViewOnly={!canEdit} contactObj={props.contactObj}/>
    </div>
  )
};

export default ViewContact;
