import React, { Component } from 'react';
import Weather from './containers/weather'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
