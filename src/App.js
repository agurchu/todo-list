import "./App.css";
import React from "react";
import Todos from "./components/Todos";

function App() {
  const items = [
    { id: 1, title: "Take out the trash", completed: false },
    { id: 2, title: "Dinner with wife", completed: false },
    { id: 3, title: "Meeting with boss", completed: false },
  ];

  return (
    <div className="App">
      <Todos todos={items} />
    </div>
  );
}

export default App;
