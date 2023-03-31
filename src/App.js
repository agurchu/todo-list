import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos";
import styled from "styled-components";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "Take out the trash", completed: false },
    { id: 2, title: "Dinner with wife", completed: false },
    { id: 3, title: "Meeting with boss", completed: false },
  ]);

  const markComplete = (id) => {
    setItems(
      items.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const onDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container className="App">
      <Header />
      <AddTodo />
      <Todos todos={items} markComplete={markComplete} onDelete={onDelete} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
`;
