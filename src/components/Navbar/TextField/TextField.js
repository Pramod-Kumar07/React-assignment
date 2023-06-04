import React from 'react';
import styles from './TextField.module.css';

function TextField() {
  return (
    <div>
        <div className={styles.pageContainer}>
            <textarea placeholder='Type @ to insert' className={styles.page}/>
        </div>
    </div>
  )
}

export default TextField;