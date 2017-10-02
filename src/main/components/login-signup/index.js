import React from 'react'

import Login from './Login'
import SignUp from './Sign-Up'
import LogOut from './Log-Out'

import { Col } from 'react-bootstrap'

import { connect } from "react-redux";
import { signup, login, logout } from "../../../redux/actions/auth";


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
                loginUsername: "",
                loginPassword: "",
                name: ""
            }
        })
    }

    handleLogin(e){
        e.preventDefault();
        this.props.login({username: this.state.inputs.loginUsername,
                          password: this.state.inputs.loginPassword});
        this.clearInputs();

    }

    handleSignup(e){
        e.preventDefault();
        this.props.signup({username: this.state.inputs.username,
                          password: this.state.inputs.password,
                          name: this.state.inputs.name});
        this.clearInputs();
    }

    handleLogout(e){
        this.props.logout();
    }

    render() {
        const colStyle = {
          marginTop: "50px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "2px",
          paddingTop: "20px"
        }
        console.log(this.props);
        return (
          <Col sm={6} smOffset={3} style={colStyle}>
              { !this.props.authReducer.isAuthenticated ? <SignUp
                handleChange={this.handleChange.bind(this)}
                handleSignup={this.handleSignup.bind(this)}
                {...this.state.inputs} /> : null }
              { !this.props.authReducer.isAuthenticated ? <Login
                handleChange={this.handleChange.bind(this)}
                handleLogin={this.handleLogin.bind(this)}
                {...this.state.inputs} /> : null }
              { this.props.authReducer.isAuthenticated ? <LogOut
                handleLogout={this.handleLogout.bind(this)}
                username={this.props.authReducer.user.username}>
                </LogOut> : null }
          </Col>
        )
    }
}

export default connect(state => state, {signup, login, logout}) (LoginSignUpContainer);
