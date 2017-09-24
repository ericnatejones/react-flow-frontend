import React from 'react'
import { Button } from 'react-bootstrap';

class SignUp extends React.Component {
  render () {
    return (<Button onClick={this.props.signUp}>Sign up</Button>)
  }
}

export default SignUp;
