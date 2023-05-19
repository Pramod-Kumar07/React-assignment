import React, { useState } from 'react';
import questionsData from '../atoms/data';
import styles from './QuestionTemplate.module.css';

function QuestionTemplate() {
  const [currentQus, setCurrentQus]=useState(0);
  const [answer, setAnswer]= useState('');
  const [click, setClick]= useState('');
  const [showResult, setShowResult]= useState(false);
  const [result, setResult]=useState({
    score: 0,
    correctAnswers:0,
    wrongAnswers:0
  })


  function handleAnswer(option, index){
    setClick(index);
    if(option===questionsData[currentQus].correctAns){
      setAnswer(true);
    }else{
      setAnswer(false);
    }
  }

  function handleNext() {
    setClick('');
    setResult((prev)=>
    answer ? {
      ...prev,
      score: prev.score +2,
      correctAnswers: prev.correctAnswers + 1
    } : {
      ...prev,
      wrongAnswers: prev.wrongAnswers + 1
    })
    if(currentQus !== questionsData.length-1){
      setCurrentQus(currentQus + 1)
    }else{
      setShowResult(true);
    }
  }

  function handleRestart(){
    setCurrentQus(0);
    setShowResult(false);
    setResult({
      score:0,
      correctAnswers:0,
      wrongAnswers:0
    })
  }

  return (
    <div className={styles.container}>
      {!showResult ? 
      (
      <>
      <div className={styles.questionNumber}>
          Question({currentQus+1})
      </div>
      <div className={styles.question}>
        {questionsData[currentQus].question}
      </div>
        <div className={styles.options}>
          {questionsData[currentQus].options.map((option, index)=>(<ul>
              <li onClick={()=>handleAnswer(option, index)} key={index} className={click===index ? styles.selected : styles.option}>
                {option }  
              </li>
              </ul>)
            )}
        </div>
      <div>
        <button onClick={handleNext} className={styles.next}>
          {currentQus === questionsData.length-1 ? "Finish" : "Next" }
        </button>
      </div>
      </>
      ) : (
        <div>
          <h3>Result</h3>
          <p>
            Total Questions : {questionsData.length}
          </p>
          <p>
            Total Score : {result.score}
          </p>
          <p>
          Correct Answers : {result.correctAnswers}
          </p>
          <p>
            Wrong Answers : {result.wrongAnswers}
          </p>
          <button className={styles.restart} onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  )
}

export default QuestionTemplate;