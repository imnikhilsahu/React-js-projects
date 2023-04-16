import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <ToDoList />
    </div>
  );
}

export default App;
