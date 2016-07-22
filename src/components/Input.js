import React, { PropTypes } from 'react';
import styles from './Input.css';

const propTypes = {
  className: PropTypes.string,
};

export default function Input({ className = styles.Input, ...other }) {
  return (
    <span className={ styles.InputWrapper }><input { ...other } className={ className } /></span>
  );
}

Input.propTypes = propTypes;
