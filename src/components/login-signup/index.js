import React from 'react'

import Login from './Login'
import SignUp from './Sign-Up'
import LogOut from './Log-Out'

import { connect } from "react-redux";
import { signUp, logOut, logIn } from "../../actions/auth";

class LoginSignUpContainer extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div>
        { !this.props.loggedIn ? <Login logIn={this.props.logIn}></Login> : null }
        { !this.props.loggedIn ? <SignUp signUp={this.props.signUp}></SignUp> : null }
        { this.props.loggedIn ? <LogOut logOut={this.props.logOut}></LogOut> : null }
      </div>
    )

  }
}

export default connect(state => state, {signUp, logOut, logIn}) (LoginSignUpContainer);
