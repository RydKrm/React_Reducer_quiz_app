import React from 'react';
import './MainTop.css'
const MainTop = ({marks,index}) => {
    return (
        <div className="main-title">
          <h4 className="main-mark">Total Mark {marks}</h4>
          <h4 className="main-question">Question {index+1}</h4>
        </div>
    );
};

export default MainTop;