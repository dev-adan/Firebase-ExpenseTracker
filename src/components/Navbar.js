import styles from './Navbar.module.css';

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <ul>
    <li className={styles.title}>myMoney</li>

    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/signup'>Signup</Link></li>

    </ul>

    </div>
  )
}

export default Navbar