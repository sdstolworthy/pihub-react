import React, { Component } from 'react';
import Containers from './containers'
import logo from './logo.svg';
import {Provider} from 'react-redux'
import { store } from './redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Containers />
      </Provider>
    );
  }
}

export default App;
