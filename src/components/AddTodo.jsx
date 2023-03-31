import React, { useState } from "react";
import styled from "styled-components";

function AddTodo({ addTodo }) {
  const [addTitle, setAddTitle] = useState("");

  // submit todo
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(addTitle);
    setAddTitle("");
  };

  /* ======================= Return ========================*/
  return (
    <AddForm onSubmit={onSubmit}>
      <Input
        value={addTitle}
        onChange={(e) => setAddTitle(e.target.value)}
        type="text"
        name="title"
        required
        placeholder="Add Todo..."
      />
      <SubmitBtn type="submit" value="Submit" />
    </AddForm>
  );
}

export default AddTodo;

/* ========================================
                    Styling 
   ======================================== */

const AddForm = styled.form`
  display: flex;
  width: calc(100% - 100px);
  max-width: 500px;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid #2c9476;
  overflow: hidden;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
`;

const SubmitBtn = styled.input`
  flex: 1;

  display: inline-block;
  padding: 8px 20px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  transition: 250ms;
  background: #2c9476;

  &:hover {
    background: #103e31;
  }
`;
const Input = styled.input`
  flex: 10;
  padding: 10px;
  background: #d4fff3;
`;
