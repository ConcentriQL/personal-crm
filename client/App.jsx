import React, { Component } from 'react';
import { connect } from 'react-redux';
//import the Main Container File
import MainContainer from './containers/MainContainer.jsx'
//import Login Container
import LoginContainer from './containers/LoginContainer.jsx';
import AddNewContact from './components/forms/AddNewContact.jsx';
import banner from './components/img/logo.svg';

const mapStateToProps = ({ display }) => ({
  isLoggedIn: display.isLoggedIn
})

const App = props => {
  return (
    //ONLY COMMENTED OUT TO TEST FORM LOGIC
    <div className="App-Container">
      <img className="App-Banner" src={banner} alt="ConcentriQL logo" />
      //Based on the isLoggedIn State (which is set to true on successful login), rendr login or the MainApp
      { props.isLoggedIn
        ? <MainContainer />
        : <LoginContainer />}
    </div>
  )
}

export default connect(mapStateToProps, null)(App);