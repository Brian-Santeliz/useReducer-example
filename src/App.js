import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const acciones = {
  agregar: "agregar-tarea",
  toggle: "toggle-todo",
  eliminar: "eliminar",
};
function App() {
  const [title, setTitle] = useState("");

  const newTodo = (title) => {
    return { id: Date.now(), title, complete: false };
  };

  const reducer = (todos, action) => {
    switch (action.type) {
      case acciones.agregar:
        return [...todos, newTodo(action.payload.title)];
      case acciones.toggle:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case acciones.eliminar:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  };

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: acciones.agregar, payload: { title } });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;
