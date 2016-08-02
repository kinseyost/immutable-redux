import React, { PropTypes } from 'react';
import styles from './App.css';
import Navbar from 'components/Navbar.js';
import Perf from 'react-addons-perf';
import Notification from 'components/Notification.js';
const devMode = process.env.NODE_ENV !== 'production';

if (devMode) {
  window.Perf = Perf;
}

const propTypes = {
  children: PropTypes.element,
};

export default function App(props) {
  return (
    <div className={ styles.Skeleton }>
      <header className={ styles.Header }>
        <Navbar />
      </header>
      <div className={ styles.Content }>
        { props.children }
      </div>
      <Notification />
    </div>
  );
}

App.propTypes = propTypes;
