import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return(
        <div>
            <header className={styles.header}>
                <img className={styles.logo} src='https://de6-engine.flamingtext.com/netfu/tmp28000/coollogo_com-4314303.png' alt='logo' />
                <div className={styles.container}> 
                <section className={styles.sec}>Home</section>
                <section className={styles.sec}>About</section>
                <section className={styles.sec}>Projects</section>
                <section className={styles.sec}>Videos</section>
                <section className={styles.sec}>Contact</section>
                <button className={styles.btn}>Login</button>
                <button className={styles.menu}><i class="fa fa-bars"></i></button>
                </div>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                <h1 className={styles.heading}>Be There</h1>
                <p>Deliver brilliant messages in the moments <br/> that truely define your brand</p>
                <button className={styles.button}>See How </button>
                {/* <div className={styles.image}>
                <img src='https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg' alt='image' />
                </div> */}
                </div>
            </div>
        </div>
    )
}