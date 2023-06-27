import React from 'react';
//import questions from '../../data/questions.json';
import './Question.css'


const Question = ({ questions, dispatch, answer,state }) => {
  //const question = questions.questions[index]
  console.log(questions);

  const isAnswer = answer === null;
  
  const answerSetter = (index)=>{;
    dispatch({ type: "setAnswer",payload:index });
    if(index===questions.correctOption){
      dispatch({type:"setPoints",payload:questions.points})
    }
    console.log("answer ",index," ", answer ," ",state);
  };
  

  return (
    <div className="question">
      {!isAnswer ? <div className="answer"> {answer===questions.correctOption ? <p className='right'>Right Answer</p>: <p className='wrong'>Wrong Answer </p>} </div>: " "}
      <h2 className="main-question">{questions.question}</h2>
      <ol>
        {questions.options.map((op, index) => (
          <li key={index}>
            <button
              className={`question-option ${isAnswer ? " " :index===questions.correctOption ? "right":"wrong"} `}
              disabled={!isAnswer}
              onClick={() => answerSetter(index) 
                /*dispatch({type:"setAnswer",payload:index}) */}
            >
              {op}
            </button>
          </li>
        ))}
      </ol>
      {!isAnswer &&  <button className='btn-next' onClick={()=>{dispatch({type:"nextOption"})}}>Next</button>
      }
    </div>
  );
};

export default Question;
