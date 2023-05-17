import React , { useState } from 'react';
import styles from './userInput.module.css';

function UserInput(props) {
    const [user, setUser]= useState('');

    function handelEnter(e){
        if(e.keyCode===13){
            props.addUser(user);
            setUser('');
        }
    }

  return (
    <div className={styles.input}>
        <input 
            type='text' 
            placeholder='Add user' 
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            onKeyDown={handelEnter}
        />
    </div>
  )
}

export default UserInput;