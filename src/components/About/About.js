import React from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import dp from './dp.jpg';

function About() {
  return (
    <div className={styles.main}>
        <div className={styles.wrapper}>
        <div className={styles.know}><h1>GET TO KNOW ME...</h1></div>
            <div>
                <h3>Hello, my name is Pramod Kumar. I am a Front-End Delevoper, a resident of Pilibhit, Uttar Pradesh</h3>
                <hr/>
                <p>
                    Passion-driven learner and a web Delevoper with the ability to write clean, reusable and optimised code. Skilled at building and maintaining Front-End based responsive web applications. Looking forward to join a progressive and challenging work environment.
                </p>
            </div>
            <Link className={styles.link} to='/Resume'><div className={styles.resume}>Resume</div></Link>
        </div>
        
        <img className={styles.dp} src={dp} alt='profile_picture' />
    </div>
  )
}

export default About