import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, markComplete }) {
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
  };

  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={() => markComplete(todo.id)} />{" "}
        {todo.title}
      </p>
    </div>
  );
}

export default TodoItem;
