import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  /* ======================= Return ========================*/
  return (
    <HeaderTodo>
      <h1>Todo List</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </HeaderTodo>
  );
}

export default Header;

/* ========================================
                    Styling 
   ========================================*/

const HeaderTodo = styled.header`
  background: #1a2b26;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  margin-bottom: 40px;
  box-shadow: 0 4px 7px 2px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 16px;
  }
  ul a {
    color: white;
    margin-left: 20px;
    transition: 250ms;

    &:hover {
      color: #2c9476;
    }
  }
`;
