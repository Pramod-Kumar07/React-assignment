import React from 'react';
import styles from './Contacts.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

function Contacts() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.bg}>
      
      <div className={styles.content}>
        <h1>GET IN TOUCH...</h1>
        <p>
            You can reach me via email or contact me on social networks.
        </p>
        <p>
            I would love to hear from you!
        </p>

        <span>pkpramodkumar102@gmail.com</span>
      </div>

    </div>
    <div className={styles.contactContainer}>
      <ContactForm/>

        <div className={styles.socialMedia}>
          <a href='https://github.com/Pramod-Kumar07' target='_blank' rel='noreferrer'><FaGithub/></a>
          <a href='https://www.linkedin.com/in/pramod0kumar/' target='_blank' rel='noreferrer' > <FaLinkedin/> </a>
        </div>

    </div>
    
    </div>
  )
}

export default Contacts;