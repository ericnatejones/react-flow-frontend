import React, { Component } from 'react';
import './App.css';

import LoginSignUpContainer from './components/login-signup';
import RiverListContainer from './components/river-list';
import AddRiverForm from './components/add-river-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginSignUpContainer/>
        <RiverListContainer/>
        <AddRiverForm/>
      </div>
    );
  }
}

export default App;
