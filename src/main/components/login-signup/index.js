import React from 'react'

import Login from './Login'
import SignUp from './Sign-Up'

import { Col } from 'react-bootstrap'

import { connect } from "react-redux";
import { signup, login } from "../../../redux/actions/auth";


class LoginSignUpContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: "",
                loginUsername: "",
                loginPassword: "",
                name: ""
            }
        }

    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: "",
                email: ""
            }
        })
    }

    handleLogin(e){
      e.preventDefault();
      this.props.login({username: this.state.inputs.username,
                        password: this.state.inputs.password});
      this.clearInputs();
    }

    handleSignup(e){
      e.preventDefault();
      this.props.signup({username: this.state.inputs.username,
                        password: this.state.inputs.password,
                        name: this.state.inputs.name});
      this.clearInputs();
    }

    render() {
        const colStyle = {
          marginTop: "50px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "2px",
          paddingTop: "20px"
        }
        return (
          <Col sm={6} smOffset={3} style={colStyle}>
              <SignUp
                handleChange={this.handleChange.bind(this)}
                handleSignup={this.handleSignup.bind(this)}
                {...this.state.inputs} />
              <Login
                handleChange={this.handleChange.bind(this)}
                handleLogin={this.handleLogin.bind(this)}
                {...this.state.inputs} />
          </Col>
        )
    }
}

export default connect(state => state, {signup, login}) (LoginSignUpContainer);
