import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../Reducers/reducer";
import TodoItem from "./TodoItem";

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [todoItems, setTodoItems] = useState(state);
  const [newTodoItem, setNewTodoItem] = useState();
  let [clearCompleted, setClearCompleted] = useState(0);

  const handleChanges = e => {
    // setTodoItems(e.target.value);
    setNewTodoItem(e.target.value);
  };

  console.log(state);

  return (
    <div>
      <input
        type="text"
        name="todoItems"
        value={newTodoItem}
        onChange={handleChanges}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodoItem });
        }}
      >
        Add New Item
      </button>
      {state.map(item => {
        return <TodoItem item={item} state={state} dispatch={dispatch} />;
      })}
      <button
        onClick={() => {
          setClearCompleted((clearCompleted += 1));
          console.log(state);
          dispatch({ type: "COMPLETED_BEGONE" });
        }}
      >
        Clear Completed!
      </button>
    </div>
  );
}

export default Todo;
