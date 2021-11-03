import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css-modules/Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <h2>Math Magician</h2>
    <div>
      <Link to="/"><span>Home</span></Link>
      <Link to="/calculator"><span>calculator</span></Link>
      <Link to="/quote"><span>Quote</span></Link>
    </div>
  </div>
);

export default Header;
