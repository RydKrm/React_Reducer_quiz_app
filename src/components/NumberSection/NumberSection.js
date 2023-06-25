import './NumberSection.css';
import React from 'react';
const NumberSection = () => {
    return (
    <div className='number-container'>
     <div className="all-number">
        <button className='right btn'>1</button>
        <button className='right btn'>2</button>
        <button className='not-visited btn'>3</button>
        <button className='focused btn'>4</button>
        <button className='not-visited btn'>5</button>
        <button className='not-visited btn'>6</button>
     </div>
    </div>
    );
};

export default NumberSection;