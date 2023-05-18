import React, { useState } from 'react';
import questionsData from '../atoms/data';
import NextButton from '../atoms/NextButton';
import styles from './QuestionTemplate.module.css';

function QuestionTemplate() {
  const [currentQus, setCurrentQus]=useState(0);
  const [correct, setCorrect]= useState(0);

  function handelButton(index){
    setCurrentQus(index);
  }

  function handelAnswer(){

  }

  return (
    <div className={styles.container}>
      <div 
        className={styles.questionNumber}>Question ({questionsData[currentQus].questionNum})
      </div>
      <div 
        className={styles.question}>{questionsData[currentQus].question}
      </div>
        <div 
          className={styles.options}>{questionsData[currentQus].options.map((option, index)=>{
            return (<ul>
              <li onClick={handelAnswer} key={index} className={styles.option}>{option }  </li>
              </ul>)
            })}
        </div>
      <div>
        <NextButton handelButton={handelButton} lastQus={questionsData.length}/>
      </div>
    </div>
  )
}

export default QuestionTemplate;