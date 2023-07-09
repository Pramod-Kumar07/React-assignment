import React from 'react';
import styles from './Projects.module.css';
import { RxGlobe, RxGithubLogo } from 'react-icons/rx';

function Projects() {
  return (
    <div className={styles.main}>
        <div className={styles.project1}>
          <div className={styles.project1Link}>
            <a href='https://bakersgym.netlify.app/' target='_blank' rel='noreferrer'><RxGlobe/></a>
            <a href='https://github.com/Pramod-Kumar07/Gym-website/blob/gym/project/README.md' target='_blank' rel='noreferrer'><RxGithubLogo/></a>
          </div>
          <p>The Baker's Gym</p>
        </div>
        
        <div className={styles.project2}>
          <div className={styles.project2Link}>
            <a href='https://codepeen.netlify.app/' target='_blank' rel='noreferrer'><RxGlobe/></a>
            <a href='https://github.com/Pramod-Kumar07/CodePenClone/blob/main/README.md' target='_blank' rel='noreferrer'><RxGithubLogo/></a>
          </div>
          <p>CodePen Clone</p>
        </div>

        <div className={styles.project3}>
          <div className={styles.project3Link}>
            <a href='https://ttweeterr.netlify.app/' target='_blank' rel='noreferrer'><RxGlobe/></a>
            <a href='https://github.com/Pramod-Kumar07/Twitter-Clone' target='_blank' rel='noreferrer'><RxGithubLogo/></a>
          </div>
          <p>Twitter Clone</p>
        </div>
    </div>
  )
}

export default Projects