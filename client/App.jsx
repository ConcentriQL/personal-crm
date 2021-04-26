import React, { Component } from 'react';
import { connect } from 'react-redux';
//import the Main Container File
import MainContainer from './containers/MainContainer.jsx'
//import Login Container
import LoginContainer from './containers/LoginContainer.jsx';

const mapStateToProps = ({ display }) => ({
  isLoggedIn: display.isLoggedIn
})

const App = props => {
  return (
    <div>
      { props.isLoggedIn
        ? <MainContainer />
        : <LoginContainer />}
    </div>
  )
}

export default connect(mapStateToProps, null)(App);