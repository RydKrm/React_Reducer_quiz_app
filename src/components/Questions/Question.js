import React from 'react';
//import questions from '../../data/questions.json';
import './Question.css'


const Question = (props) => {
 console.log("Question ",props.questions)

    return (
      <div className='question'>
        <h2 className='main-question'>{props.questions}</h2>
        <ol>
          <li >
            <button className='question-option'> React.js</button>
          </li>
          <li >
            <button className='question-option'> Vue.js</button>
          </li>
          <li >
            <button className='question-option'> Anguler.js</button>
          </li>
          <li >
            <button className='question-option'> Node.js</button>
          </li>
        </ol>
      </div>
    );
};

export default Question;
