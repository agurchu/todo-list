import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import styled from "styled-components";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  });

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
  // Delete Todo
  const onDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const [maxId, setMaxId] = useState(3);
  // Add Todo
  const addTodo = (title) => {
    // const newTodo = {
    //   id: maxId + 1,
    //   title,
    //   completed: false,
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        if (title === "") {
          return;
        }
        setItems([...items, res.data]);
      });

    // setItems([...items, newTodo]);
    // setMaxId(maxId + 1);
  };
  /* ======================= Return ========================*/
  return (
    <Router>
      <Container className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="wrap">
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={items}
                  markComplete={markComplete}
                  onDelete={onDelete}
                />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;

  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
