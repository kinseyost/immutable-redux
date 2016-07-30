import React, { PropTypes } from 'react';
import styles from './Notification.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ]),
};

export default function Notification({ children }) {
  return <div className={ styles.Notification }>{ children }</div>;
}

Notification.propTypes = propTypes;
