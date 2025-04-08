import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<>
<nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/about" className={styles.link}>About</Link>
      <Link to="/contact" className={styles.link}>Contact</Link>
      <Link to="/products" className={styles.link}>Products</Link>

    </nav>

</>
  )
}

export default Navbar
