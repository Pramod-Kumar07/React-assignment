import React from 'react';
import styles from './QuizApp.module.css';
import QuestionTemplate from '../molecule/QuestionTemplate';

function QuizApp() {
  return (
    <div className={styles.main}>
         <QuestionTemplate/>
    </div>
  )
}

export default QuizApp;