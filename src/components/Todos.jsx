import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styled from "styled-components";

function Todos({ todos, markComplete, onDelete }) {
  Todos.propTypes = {
    todos: PropTypes.array.isRequired,
  };

  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          onDelete={onDelete}
        />
      ))}
    </Container>
  );
}

export default Todos;

const Container = styled.div`
  width: calc(100% - 100px);
  max-width: 1012px;
  margin: 0 auto;
`;
