import React from 'react';
import styles from './Student.module.css';

function Student() {
  return (
    <div className={styles.main}>

        <label> User Name :
            <input type='text' placeholder='Enter User Name'/>
        </label>
        <label>Password :
            <input type='password' placeholder='enter Password' />
        </label>
        <button>Login</button>
    </div>
  )
}

export default Student;