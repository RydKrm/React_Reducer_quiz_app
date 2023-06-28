import './NumberSection.css';
import React from 'react';
const NumberSection = ({allAnswer}) => {
  //  console.log('AllAnswer', allAnswer);
    return (
      <div className="number-container">
        <div className="all-number">
          
        {  allAnswer.map((al, index) => (
            <button key={index} className={`btn  ${al===0 ? "not-visited": ""} ${al===1 ? "right":""} ${al===2?"wrong":""} `}>{index+1}</button>
        ))
        }
        </div>
      </div>
    );
};

export default NumberSection;