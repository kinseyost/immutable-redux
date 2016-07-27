import React, { PropTypes } from 'react';
import styles from './Input.css';

const propTypes = {
  className: PropTypes.string,
  getInputRef: PropTypes.func,
};

export default function Input({ className = styles.Input, getInputRef, ...other }) {
  return (
    <span className={ styles.InputWrapper }>
      <input
        ref={ (c) => getInputRef(c) }
        className={ className }
        { ...other }
      />
    </span>
  );
}

Input.propTypes = propTypes;
