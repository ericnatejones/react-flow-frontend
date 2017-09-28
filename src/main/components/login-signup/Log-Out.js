import React from 'react'
import { Button } from 'react-bootstrap';

class LogOut extends React.Component {
  render () {
    return (<Button bsStyle="info" onClick={this.props.handleLogout}>log out</Button>)
  }
}

export default LogOut;
