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
        <NavItem to='/Gallery'>Gallery</NavItem>
        <NavItem to='/Behavior'>Behavior</NavItem>
        <NavItem to='/Diet'>Diet</NavItem>
        <NavItem to='/Habitat'>Habitat</NavItem>
        <NavItem to='/Mating'>Mating</NavItem>
        <NavItem to='/Biology'>Biology</NavItem>
        <NavItem to='/MiscFacts'>MiscFacts</NavItem>
        <NavItem to='/Communication'>Communication</NavItem>
        <NavItem to='/PopCulture'>PopCulture</NavItem>
      </ul>
    </nav>
  );
}

Navbar.propTypes = propTypes;
