import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';


export default class App extends Component {
  render() {
    return (
      <h1>Hello, Redux</h1>
    );
  }
}
