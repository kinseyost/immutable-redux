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
        <NavItem to='/Behavior'>Animal Behavior</NavItem>
        <NavItem to='/Diet'>Diet</NavItem>
        <NavItem to='/Gallery'>Images</NavItem>
        <NavItem to='/Habitat'>Habit</NavItem>
        <NavItem to='/Habitat'>Name</NavItem>
        <NavItem to='/Habitat'>Mating</NavItem>
        <NavItem to='/Habitat'>Biology</NavItem>
      </ul>
    </nav>
  );
}

Navbar.propTypes = propTypes;
