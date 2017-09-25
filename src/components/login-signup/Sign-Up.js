import React from 'react'
import { Panel, Button, FormControl, ControlLabel, Col, FormGroup, Form } from 'react-bootstrap';

class SignUp extends React.Component {
  render () {
    return (
      <Panel>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              Name
            </Col>
            <Col sm={9}>
              <FormControl type="text" placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              User Name
            </Col>
            <Col sm={9}>
              <FormControl type="text" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Password
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Repeat Password
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Repeat Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={9}>
              <Button onClick={this.props.signUp} bsStyle="info" type="button">
                Sign up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    )
  }
}

export default SignUp;
