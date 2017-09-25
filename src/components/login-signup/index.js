import React from 'react'

import Login from './Login'
import SignUp from './Sign-Up'
import LogOut from './Log-Out'

import { Col } from 'react-bootstrap'

import { connect } from "react-redux";
import { signUp, logOut, logIn } from "../../actions/auth";

class LoginSignUpContainer extends React.Component {

  render () {
    console.log(this.props)
    const colStyle = {
      marginTop: "50px",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: "2px",
      paddingTop: "20px"
    }
    return (
      <Col sm={6} smOffset={3} style={colStyle}>
        { !this.props.loggedIn ? <Login logIn={this.props.logIn}></Login> : null }
        { !this.props.loggedIn ? <SignUp signUp={this.props.signUp}></SignUp> : null }
        { this.props.loggedIn ? <LogOut logOut={this.props.logOut}></LogOut> : null }
      </Col>
    )

  }
}

export default connect(state => state, {signUp, logOut, logIn}) (LoginSignUpContainer);
