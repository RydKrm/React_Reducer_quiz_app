import React from 'react';
import MainTop from '../MainTop/MainTop';
import Question from '../Questions/Question';
import './Main.css'
import NumberSection from '../NumberSection/NumberSection';
import { useEffect, useReducer } from "react";
import questions from '../../data/questions.json';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Starter from '../Starter/Starter';

const reducer =(state,action)=>{
  switch(action.type){
    case 'dataLoaded': return{
      ...state,
        allQuestions:action.payload,
        status:'start'
    };
    case 'error': return{
      ...state,
      status:'error'
    };
    case 'started':return {
      ...state,
      status:'active'
    };
    default: return state;
  }
}

const Main = () => {
  const initialState = {
    allQuestions: [],
    status:'loading',
    index: 0,
  }
  // ?  initial reducer state
  const [state,dispatch] = useReducer(reducer,initialState);
  

  useEffect(() =>{
    dispatch({type: 'dataLoaded', payload: questions});
  },[]);
  console.log("all question",state.allQuestions);
  const dataLength = state.allQuestions.length;

    return (
      <span className="main">
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "start" && (
          <Starter dataLength ={dataLength} dispatch={dispatch} />
        )}

        {state.status === "active" && (
          <section>
            <MainTop />
            <Question questions={state.questions[state.index]}/>
            <NumberSection />
          </section>
        )}
      </span>
    );
};

export default Main;