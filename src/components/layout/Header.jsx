import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderTodo>
      <h1>Todo List</h1>
    </HeaderTodo>
  );
}

export default Header;

const HeaderTodo = styled.header`
  background: #1a2b26;
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 7px 2px rgba(0, 0, 0, 0.3);
`;
