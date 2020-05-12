import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      Todos
      <TodoForm
        saveTodo={(todo) => {
          if (todo.trim().length) {
            setTodos([...todos, todo]);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={(index) => {
          const todosWithIndexRemoved = todos.filter((t, i) => i !== index);
          setTodos(todosWithIndexRemoved);
        }}
      />
    </>
  );
}

export default App;
