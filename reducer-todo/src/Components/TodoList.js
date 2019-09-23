import React from "React";

import { TodoContext } from "../Context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const [todos] = useContext(TodoContext);
  return (
    <div>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
