import React from "react";

function Todos({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </>
  );
}

export default Todos;
