import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <h1 className={ styles.Body }>Hello, Lara</h1>
      </Provider>
    );
  }
}
