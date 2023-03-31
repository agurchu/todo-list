import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function TodoItem({ todo, markComplete, onDelete }) {
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
  };

  const getStyle = () => {
    return { textDecoration: todo.completed ? "line-through" : "none" };
  };

  /* ======================= Return ========================*/

  return (
    <Wrap style={getStyle()}>
      <Content>
        <input type="checkbox" onChange={() => markComplete(todo.id)} />
        {todo.title}
      </Content>
      <DeleteButton onClick={() => onDelete(todo.id)}>X</DeleteButton>
    </Wrap>
  );
}

export default TodoItem;

/* ========================================
                    Styling 
   ========================================*/

const Wrap = styled.div`
  background: #103e31;
  color: white;
  font-size: 14px;
  letter-spacing: 1.2px;
  padding: 10px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.7);
`;
const Content = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 20px;
    cursor: pointer;
    height: 20px;
    background: #2c9476;
  }
`;

const DeleteButton = styled.button`
  background: #cd353a;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #a8c2ba;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms;

  &:hover {
    color: white;
    background: #eb232a;
    border: 2px solid white;
  }
`;
