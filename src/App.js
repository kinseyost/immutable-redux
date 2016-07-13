import React, { PropTypes } from 'react';
import styles from './App.css';
import Navbar from './components/Navbar.js';
import io from 'socket.io-client';
const host = process.env.IP;
import Perf from 'react-addons-perf';
const devMode = process.env.NODE_ENV !== 'production';


if (devMode) {
  window.Perf = Perf;
}

const socket = io.connect(':8081');

const propTypes = {
  children: PropTypes.element,
};

export default function App(props) {
  return (
    <div className={ styles.Skeleton }>
      <div className={ styles.Header }>
        <Navbar />
      </div>
      <div className={ styles.Content }>
        { props.children }
      </div>
    </div>
  );
}

App.propTypes = propTypes;
