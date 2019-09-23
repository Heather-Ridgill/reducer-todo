import React from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Context/TodoContext";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <Form />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
