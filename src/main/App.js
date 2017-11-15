import React, { Component } from 'react';
import './App.css';

import LoginSignUpContainer from './components/login-signup';
import RiverListContainer from './components/river-list';
import AddRiverFrom from './components/add-river-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginSignUpContainer/>
        <RiverListContainer/>
        <AddRiverFrom/>
      </div>
    );
  }
}

export default App;
