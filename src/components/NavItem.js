import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './NavItem.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  to: PropTypes.string,
};

export default function NavItem({ children, to }) {
  return (
    <li className={ styles.NavItemWrapper }>
      <Link
        className={ styles.NavItem }
        activeClassName={ styles.NavItemActive }
        to={ to }>
        { children }
      </Link>
    </li>
  );
}

NavItem.propTypes = propTypes;
