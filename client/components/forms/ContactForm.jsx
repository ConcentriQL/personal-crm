import React from 'react';

/* Note to future developers. This form component system is like my favorite child and if you hurt it I will hunt you down */

// expects props: formClass (for html class), type: (create or update), [contactOnbj (only if type=update)]
// relevant docs: https://reactjs.org/docs/forms.html, https://reactjs.org/docs/forms.html, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
const ContactForm = props => {

  const {isViewOnly, contactObj} = props;
  const isNew = (contactObj === 'new')

  //default state for the form, used for "Create new Contact"
  let contact = { 
    contactId: null, 
    firstName: null, 
    lastName: null, 
    email: null, 
    phoneNumber: null,
    prefferedMethod: null,
    contactCircle: null, 
    contactPriority: 'Medium', 
  }

  //if the contactObj is not new, overwrite the default states with the contact specific info
  if(!isNew) contact = Object.assign(contact,contactObj)
  // need to fix the :disabled CSS https://stackoverflow.com/questions/47840194/how-to-disable-input-but-not-get-the-greyed-out-tone-on-the-text

  //render form
  return (
    //make sure to include the contact id for update requests in the onSubmit
    //make sure to include the user id for create requests in the onSubmit
    //need to add DB calls here
    <form 
      className={`ContactForm ${props.formClass}`} 
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target)
        
        if(isNew) {}//send create API call
        else if(!isNew) {} //send update API Call
        else {
          console.log('and error occured submitting contact form');
        }
      }
        //put API call here

    }>
      <fieldset className="ContactForm-Container" disabled={isViewOnly}>
        <label className="ContactForm-Field" htmlFor="firstName">First Name: </label>
        <input className="ContactForm-Field" type="text" id="firstName" name="contact_first_name" defaultValue={contact.firstName}/>
        <br />
        <label className="ContactForm-Field" htmlFor="contact_last_name">Last Name: </label>
        <input className="ContactForm-Field" type="text" id="contact_last_name" name="contact_last_name" defaultValue={contact.lastName}/>
        <br />
        <label className="ContactForm-Field" htmlFor="contact_preferredcontactmethod">Preferred Contact Method: </label>
        <select className="ContactForm-Field" defaultValue={contact.prefferedMethod} name="contact_preferredcontactmethod" id="contact_preferredcontactmethod">
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
        </select>
        <br />
        <label className="ContactForm-Field" htmlFor="contact_email">Email: </label>
        <input className="ContactForm-Field" type="email" id="contact_email" name="contact_email" defaultValue={contact.email}/>
        <br />
        <label className="ContactForm-Field" htmlFor="contact_phonenumber">Phone Number: </label>
        <input type="tel" id="contact_phonenumber" name="contact_phonenumber" defaultValue={contact.phoneNumber}/>
        <br />
        <label className="ContactForm-Field" htmlFor="contact_circle">Circle: </label>
        <select className="ContactForm-Field" defaultValue={contact.contactCircle} id="contact_circle" name="contact_circle">
          <option value=''></option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
        <label className="ContactForm-Field" htmlFor="contact_priority">Priority: </label>
        <select className="ContactForm-Field" defaultValue={contact.contactPriority} id="contact_priority" name= "contact_priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <br />
          {/* This line = if the form is not View Only, include a Save & Submit button */}
          {!isViewOnly && <button>Save</button>} 
      </fieldset> 
    </form>
  )
};

export default ContactForm;
