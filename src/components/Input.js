import React, { PropTypes } from 'react';
import styles from './Input.css';

const propTypes = {
  className: PropTypes.string,
};

export default function Input({ className = styles.Input, ...other }) {
  return (
    <input { ...other } className={ className } />
  );
}

Input.propTypes = propTypes;
