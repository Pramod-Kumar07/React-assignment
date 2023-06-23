import React, { Fragment } from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <Fragment>
        <div className={styles.bg}></div>
    <div className={styles.main}>
        <h1>GET IN TOUCH...</h1>
        <p>
            You can reach me via email or contact me on social networks.
        </p>
        <p>
            I would love to hear from you!
        </p>

        <span>pkpramodkumar102@gmail.com</span>

    </div>
    </Fragment>
  )
}

export default Contacts;