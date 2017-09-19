import React, { Component } from 'react';
import Weather from './containers/weather'
import logo from './logo.svg';
import {Provider} from 'react-redux'
import { store } from './redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    );
  }
}

export default App;
