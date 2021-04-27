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
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
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
        if (true) props.logIn();
        props.getUser(2)
        // props.getUser(/*userId*/);
        // console.log(e.target[0].value, e.target[1].value)
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