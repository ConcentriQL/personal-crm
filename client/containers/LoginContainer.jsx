
import React from 'react';
import { connect } from 'react-redux';
import { logIn, getUser } from '../actions/actions.js';
import axios from 'axios';

//mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(logIn()),
  getUser: (id) => dispatch(getUser(id))
})

//on button click make database call with email and password to verify login credentials
//returns boolean - if true, invoke login action creator (which will be)
//if false, display error alert
const LoginContainer = props => {
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();

        /* THIS LOGIN REQUEST WAS WORKING */ 
        /*  - It should return the user object to be consumed by the action creater 
            - If validation is successful, it should invoke getUser and pass in the obj to load the user's info into state
            - console.log(e.target[0].value, e.target[1].value) represetnt the username and PW
        */ 
      
        // axios({
        //   method: 'post',
        //   url: '/login/',
        //   data: {
        //     email: e.target[0].value,
        //     password: e.target[1].value
        //   }
        // })
        // .then((result) => {
        //   console.log(result.data)
        //   if (result.data === false) result.data = 1;
        //   props.getUser(result.data)
        //   console.log(result.data)
        //   props.logIn();
        // }, (error) => {
        //   console.log(error)
        // })
        //mike@hotmail.com
        //do db post request 
        // body: {email: e.target[0].value, password: e.target[1].value}
        //check if response is 200
        //if yes invoke logIn & getUser .then()
        //save the sent back id to use in getUser
        //else render error message
        
        //THESE ARE HERE TO RENDER THE SYSTEM despite the login calls being commented out
        if (true) props.logIn();
        props.getUser({userId : 2})
        // props.getUser(/*userId*/);
        
      }}>
        <label htmlFor="username">Username </label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" name="password" />
        <br />
        <button className="login-button">Login</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(LoginContainer);