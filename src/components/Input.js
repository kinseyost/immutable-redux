import React, { PropTypes } from 'react';
import styles from './Input.css';

const propTypes = {
  className: PropTypes.string,
  getInputRef: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default function Input({
  className = styles.Input,
  required,
  placeholder,
  getInputRef,
  ...other,
}) {
  return (
    <span className={ styles.InputWrapper }>
      <input
        ref={ (c) => getInputRef(c) }
        className={ className }
        placeholder={ placeholder }
        { ...other }
      />
      { required && <div className={ styles.Required }>*</div> }
    </span>
  );
}

Input.propTypes = propTypes;
