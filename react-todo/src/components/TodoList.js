import React from "react";
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          <button onClick={() => deleteTodo(i)}>delete</button>
          {todo}
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
