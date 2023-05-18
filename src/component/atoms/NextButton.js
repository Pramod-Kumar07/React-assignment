import React, {useState} from 'react';
import styles from './NextButton.module.css';

function NextButton(props) {

  const[index, setIndex]=useState(1);

  function handleIndex(){
    if(index!==props.lastQus){
    setIndex(index+1);
    props.handelButton(index);
    }
  }

  function handelRestart(){
    props.handelButton(0);
    setIndex(1);
  }

  return (
    <>
      <button className={styles.next} onClick={handleIndex}>{index===props.lastQus ? "Finish" : "Next"}</button>
      {index===props.lastQus && <button className={styles.restart} onClick={handelRestart}>Restart</button> }
    </>
  )
}

export default NextButton;