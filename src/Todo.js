import React from "react";
import { acciones } from "./App";
export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#aaa" : "#000" }}>
        {todo.title}
      </span>
      <button
        onClick={() =>
          dispatch({ type: acciones.toggle, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: acciones.eliminar, payload: { id: todo.id } });
        }}
      >
        Eliminar
      </button>
    </div>
  );
}
