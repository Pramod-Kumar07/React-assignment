import React, { useState } from 'react';
import styles from './InputTask.module.css'

function InputTask(props) {
    
    const[inputTask, setInputTask] = useState('');

    function handelEnter(e){
      if(e.keyCode===13){
        props.addList(inputTask)
        setInputTask('')
      }
    }

    function handleClick() {
      props.addList(inputTask)
      setInputTask('')
    }

  return (
    <div className={styles.inputContainer}>
        <input type="text" placeholder="Add a new task" value={inputTask} onChange={(e)=>setInputTask(e.target.value)} className={styles.InputTask} onKeyDown={handelEnter}/>
        <button className={styles.button} onClick={handleClick}>Add</button>
    </div>
  )
}

export default InputTask;