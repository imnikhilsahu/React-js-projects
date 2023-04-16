import React, { useRef, useState } from "react";
import "./toDo.css";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [todoItem, setToDoItem] = useState("");

  return (
    <div className="Container">
      <h2>TO DO LIST</h2>
      <ol>
        {list.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ol>
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <input
          value={todoItem}
          onChange={(e) => {
            setToDoItem(e.target.value);
          }}
        />
        <button
          className="Button"
          onClick={() => {
            if (todoItem !== "") {
              setList((value) => {
                return [...value, todoItem];
              });
              setToDoItem("");
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
