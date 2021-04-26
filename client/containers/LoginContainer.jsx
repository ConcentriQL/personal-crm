//on button click make database call with email and password to verify login credentials
//returns boolean - if true, invoke login action creator (which will be)
//if false, display error alert
import React from 'react';
import { connect } from 'react-redux';
import { logIn, getUser } from '../actions/actions.js';
import axios from 'axios';

//mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(logIn()),
  getUser: (id) => dispatch(getUser(id))
})

const LoginContainer = props => {
  return (
    <div className="login-page">
      <form className="login-form" action="/" method="post" onSubmit={(e) => {
        e.preventDefault();
        //do db post request 
        //check if response is 200
        //if yes invoke logIn & getUser
        //save the sent back id to use in getUser
        //else render error message
        if (true) props.logIn();
        props.getUser(3);
        console.log(e.target[0].value, e.target[1].value)
      }}>
        <label htmlFor="username">Username </label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" name="password" />
        <br />
        <button>Login</button>
      </form>
      {/* onClick = {(event) => {
            event.preventDefault
        //   axios.post('/PLACEHOLDER_LOGIN', {body: {
        //       email: document.getElementById('username').value
        //   }})
        //     .then(isValid => {
        //       isValid ? props.logIn() : window.alert("Invalid Username AND/OR Password");
        //     })
        //  }
      //   >Login</button>
        // </form> */}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(LoginContainer);