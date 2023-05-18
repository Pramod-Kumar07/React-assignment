import React from 'react';
import questionsData from '../atoms/data';

function QuestionTemplate(props) {
  return (
    <div>
      <div>{questionsData[0].questionNum}/{questionsData.length}</div>
      <div>{questionsData[0].question}</div>
    </div>
  )
}

export default QuestionTemplate;