import React from 'react'

import Login from './Login'
import SignUp from './Sign-Up'
import LogOut from './Log-Out'

class LoginSignUpContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  render () {
    return (
      <div>
        { !this.state.loggedIn ? <Login></Login> : null }
        { !this.state.loggedIn ? <SignUp></SignUp> : null }
        { this.state.loggedIn ? <LogOut></LogOut> : null }
      </div>
    )

  }
}

export default LoginSignUpContainer;
