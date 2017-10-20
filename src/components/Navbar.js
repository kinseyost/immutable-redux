import React, { PropTypes } from 'react';
import styles from './Navbar.css';
import NavItem from './NavItem.js';
import Logo from 'components/Logo.js';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <ul className={ styles.Navbar }>
        <NavItem to='/Home'>Home</NavItem>
        <NavItem to='/Users'>Users</NavItem>
        <NavItem to='/Uploads'>Uploads</NavItem>
      </ul>
    </nav>
  );
}

Navbar.propTypes = propTypes;
