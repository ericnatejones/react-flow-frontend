import React, { Component } from 'react';
import './App.css';

import LoginSignUpContainer from './components/login-signup';
import RiverListContainer from './components/river-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginSignUpContainer/>
        <RiverListContainer/>
      </div>
    );
  }
}

export default App;
