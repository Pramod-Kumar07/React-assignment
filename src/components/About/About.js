import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.main}>
        <div className={styles.wrapper}>
        <h1>GET TO KNOW ME...</h1>
        {/* <div> */}
            <div>
                <h3>Hello, my name is Pramod Kumar. I am a Front-End Delevoper located in Pilibhit, Uttar Pradesh</h3>
                <hr/>
                <p>
                    Passion-driven learner and a web Delevoper with the ability to write clean, reusable, optimised code. Skilled at building and maintaining Front-End based responsive web applications. Looking forward to join a progressive and challenging work environment.
                </p>
            </div>
        {/* </div> */}
        </div>
        
        <img className={styles.dp} src='https://c4.wallpaperflare.com/wallpaper/955/421/134/artistic-alpha-coders-blue-robot-hd-wallpaper-preview.jpg' alt='profile_picture' />
    </div>
  )
}

export default About