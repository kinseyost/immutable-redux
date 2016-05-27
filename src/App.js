import React, { PropTypes } from 'react';
import styles from './App.css';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.array,
};

export default function App(props) {
  return (
    <div className={ styles.Body }>
      <ul>
        <li><Link to="/page1">About</Link></li>
        <li><Link to="/page2">Inbox</Link></li>
      </ul>
      { props.children }
    </div>
  );
}

App.propTypes = propTypes;
