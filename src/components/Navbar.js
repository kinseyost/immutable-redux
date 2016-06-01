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
      <NavItem to='/page1'>Page</NavItem>
      <NavItem to='/page2'>Page</NavItem>
    </ul>
  );
}

Navbar.propTypes = propTypes;
