import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../Reducers/reducer";
import "../App.css";

// function TodoItem({ item, state, dispatch }) {

function TodoItem({ item }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCompleted, setIsCompleted] = useState(item.completed);
  console.log(state);

  return (
    <div>
      <h3
        className={isCompleted === true ? "completed" : null}
        onClick={() => {
          dispatch({ type: "TOGGLE_COMPLETED", payload: isCompleted });
          setIsCompleted(!isCompleted);
          dispatch({ type: "TOGGLE_COMPLETED", payload: item.id });
        }}
      >
        {item.item}
      </h3>
    </div>
  );
}

export default TodoItem;
