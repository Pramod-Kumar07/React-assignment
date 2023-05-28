import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.main}>
        <h1>
            Welcome Home
        </h1>
        <footer className={styles.footer}>
        <Link className={styles.link} to='/student'>Student Login</Link>
        <Link className={styles.link} to='/Admin'>Admin Login</Link>
        </footer>
    </div>
  )
}

export default Home;