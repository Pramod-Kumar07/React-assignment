import React from 'react';
import styles from './Resume.module.css';
import resume from './resume.png';

function Resume() {

  return (
    <div className={styles.main}>
      <div>
        <img src={resume} alt='resume' />
      </div>
      <a href='https://drive.google.com/file/d/1zYzFu42Cx0VAfHGGeLMLWFNP-456ID-Z/view?usp=sharing' target='_blank' rel="noreferrer">
        <button>
          Download Resume
        </button>
      </a>
    </div>
  )
}

export default Resume