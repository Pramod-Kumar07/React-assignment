import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
    <div className={styles.home}></div>
      <div className={styles.container}>
        <div className={styles.divs}>
          <h1>Hi There!</h1>
        </div>
        <div className={styles.divs}>
          <h1>Welcome...</h1>
        </div>
        <div className={styles.divs}>
          <h1>I'M <span className={styles.first}>PRA</span><span className={styles.last}>MOD</span> KUMAR</h1>
        </div>
        <div className={styles.divs}>
          <h1>FRONT-END DEVELOPER</h1>
        </div>
      </div>
    </div>
  )
}

export default Home