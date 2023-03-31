import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos";

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

  return (
    <div className="App">
      <Todos todos={items} markComplete={markComplete} />
    </div>
  );
}

export default App;
