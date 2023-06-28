import React, { useEffect, useReducer } from "react";
import MainTop from "../MainTop/MainTop";
import Question from "../Questions/Question";
import "./Main.css";
import NumberSection from "../NumberSection/NumberSection";
import questions from "../../data/questions";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Starter from "../Starter/Starter";
import End from "../End/End";

  const initialState = {
    allQuestions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    allAnswer: Array(100).fill(0),
  };
const reducer = (state, action) => {
  switch (action.type) {
    case "dataLoaded":
      return {
        ...state,
        allQuestions: action.payload,
        status: "start",
      };
    case "error":
      return {
        ...state,
        status: "error",
      };
    case "started":
      return {
        ...state,
        status: "active",
        /// allAnswer:state.allAnswer(state.allQuestions.questions.length).fill(0),
      };
    case "setAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "setPoints":
      return {
        ...state,
        points: state.points + action.payload,
      };
    case "nextOption":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "lengthSetting":
      return {
        ...state,
        allAnswer: Array(action.payload).fill(0),
      };
      case "setNumber":
        console.log("all answer: " + action.payload.number, action.payload.answer);
         const newArray = [...action.payload.array];
         newArray[action.payload.number] = action.payload.answer;
         console.log("New Array: ", newArray);
        return {
        ...state,
        allAnswer: newArray,
        };
      case "endOption":
        return{
        ...state,
        status:"end"
        } ;  
    default:
      return state;
  }
};

const Main = () => {


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "dataLoaded", payload: questions });
    
  }, []);

  const dataLength = state.allQuestions;
  //console.log("dataLength: ", dataLength.questions);

  return (
    <span className="main">
      {state.status === "loading" && <Loader />}
      {state.status === "error" && <Error />}
      {state.status === "start" && (
        <Starter length={dataLength} dispatch={dispatch} />
      )}

      {state.status === "active" && (
        <section>
          <MainTop marks={state.points} index={state.index} />
          <Question
            questions={dataLength.questions[state.index]}
            dispatch={dispatch}
            answer={state.answer}
            state={state}
          />
          <NumberSection  allAnswer={state.allAnswer}/>
        </section>
      )} 
      {state.status === 'end' && (<End />)}
    </span>
  );
};

export default Main;
