import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function Todos({ todos, markComplete }) {
  Todos.propTypes = {
    todos: PropTypes.array.isRequired,
  };

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
      ))}
    </>
  );
}

export default Todos;
