import React, { PropTypes } from 'react';
import styles from './Select.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default function Select({ children }) {
  return (
    <span className={ styles.InputWrapper }>
      <select className={ styles.Select }>
      { children }
      </select>
    </span>
  );
}

Select.propTypes = propTypes;
