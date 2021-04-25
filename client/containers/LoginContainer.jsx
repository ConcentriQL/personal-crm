//on button click make database call with email and password to verify login credentials
  //returns boolean - if true, invoke login action creator (which will be)
  //if false, display error alert
import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/actions.js';
import axios from 'axios';

  //mapDispatchToProps
mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(logIn())
})

const LoginContainer = props => {
  return(
    <div className="login-page">
      <form className="login-form" action="/PLACEHOLDER_LOGIN" method="post">
        <input type="text" id="username" name="username"/>
        <label for="username">Username</label>
        <br />
        <input type="password" id="password" name="password"/>
        <label for="password">Password</label>
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