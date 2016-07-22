import React, { PropTypes } from 'react';
import styles from './Navbar.css';
import NavItem from './NavItem.js';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default function Navbar() {
  return (
    <ul className={ styles.Navbar }>
      <NavItem to='/rsvp'>RSVP</NavItem>
      <NavItem to='/viewUsers'>Users</NavItem>
    </ul>
  );
}

Navbar.propTypes = propTypes;
