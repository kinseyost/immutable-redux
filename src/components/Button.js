import React, { PropTypes } from 'react';
import styles from './Button.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default function Button({ className = styles.Button, children, ...other }) {
  return (
    <button { ...other } className={ className }>
    { children }
    </button>
  );
}

Button.propTypes = propTypes;
