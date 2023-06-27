import React from 'react';
import './Starter.css'

const Starter = ({ length, dispatch }) => {
  return (
    <div className="start-container">
      <h2>Ans All question to become react mastery</h2>
      <p>Total {length.questions.length} number of question here </p> 
      <button
        className="start-btn"
        onClick={() => {
          dispatch({ type: "started" });
          dispatch({type: "lengthSetting", payload: length.questions.length});
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Starter;