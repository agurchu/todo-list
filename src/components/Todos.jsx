import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styled from "styled-components";

function Todos({ todos, markComplete, onDelete }) {
  Todos.propTypes = {
    todos: PropTypes.array.isRequired,
  };

  /* ======================= Return ========================*/

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

/* ========================================
                    Styling 
   ========================================*/

const Container = styled.div`
  width: calc(100% - 100px);
  max-width: 1012px;
  background: #2c9476;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  padding: 20px 40px;
  border-radius: 8px;
  margin: 0 auto;
`;
