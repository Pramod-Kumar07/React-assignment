import React, { Fragment } from 'react';
import styles from './Skills.module.css';
import css from './css.png';
import github from './github.png';
import HTML from './HTML.png';
import js from './js.png';
import mui from './mui.png';
import react from './react.png';
import redux from './redux.png';


function Skills() {
  return (
    <Fragment>
    <div className={styles.bg}></div> 
    <h2 className={styles.skills}><span>SKILL SET</span></h2>
    <div className={styles.logoContainer}>         
        <div className={styles.logo}>
            <img src={HTML} alt='html logo' />
            <h3>HTML</h3>
        </div> 
        <div className={styles.logo}>
            <img src={css} alt='css logo' />
            <h3>CSS</h3>
        </div>  
        <div className={styles.logo}>
            <img src={js} alt='js logo' />
            <h3>JAVASCRIPT</h3>
        </div> 
        <div className={styles.logo}>
            <img src={react} alt='react logo' />
            <h3>REACT</h3>
        </div>
        <div className={styles.logo}>
            <img src={redux} alt='redux logo' />
            <h3>REDUX</h3>
        </div>  
        <div className={styles.logo}>
            <img src={mui} alt='mui logo' />
            <h3>MATERIAL UI</h3>
        </div> 
        <div className={styles.logo}>
            <img className={styles.github} src={github} alt='github logo' />
            <h3>GITHUB</h3>
        </div> 

    </div>
    </Fragment>
  )
}

export default Skills;