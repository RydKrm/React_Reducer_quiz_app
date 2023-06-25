import React from 'react';
import './Starter.css'

const Starter = ({ dataLength, dispatch }) => {
  return (
    <div className="start-container">
      <h2>Ans All question to become react mastery</h2>
      <p>Total {dataLength} number of question here </p>
      <button
        className="start-btn"
        onClick={() => {
          dispatch({ type: "started" });
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Starter;