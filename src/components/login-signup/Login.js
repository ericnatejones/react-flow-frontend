import React from 'react'
import { Button } from 'react-bootstrap';

class Login extends React.Component {
  render () {
    return (<Button onClick={this.props.logIn}>Login</Button>)
  }
}

export default Login;
