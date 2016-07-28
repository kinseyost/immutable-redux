import React from 'react';
import styles from './Logo.css';
import logo from 'images/kinseyost.jpg';

export default function Logo({ ...props }) {
  return (<img src={ logo } className={ styles.Logo } { ...props } />);
}
