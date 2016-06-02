import React, { PropTypes } from 'react';
import styles from './Navbar.css';
import NavItem from './NavItem.js';

const propTypes = {
  children: PropTypes.element,
  to: PropTypes.string,
};

export default function Navbar() {
  return (
    <ul className={ styles.Navbar }>
      <NavItem to='/page1'>Page 1</NavItem>
      <NavItem to='/page2'>Page 2</NavItem>
    </ul>
  );
}

Navbar.propTypes = propTypes;
