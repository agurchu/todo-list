import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function TodoItem({ todo, markComplete }) {
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
  };

  const getStyle = () => {
    return { textDecoration: todo.completed ? "line-through" : "none" };
  };

  return (
    <Wrap style={getStyle()}>
      <Content>
        <input type="checkbox" onChange={() => markComplete(todo.id)} />
        {todo.title}
      </Content>
    </Wrap>
  );
}

export default TodoItem;

const Wrap = styled.div`
  background: #103e31;
  color: white;
  font-size: 14px;
  letter-spacing: 1.2px;
  padding: 10px;

  border-radius: 8px;
  margin-bottom: 10px;
`;
const Content = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;
