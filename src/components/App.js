import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const styling = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "20px solid white"
};

const App = ({ dispatch, items }) => {
  const tasks = items.map((elem, i) => (
    <TodoList
      // items={items}
      dispatch={dispatch}
      task={elem.task}
      key={i}
      completed={elem.completed}
      id={i}
      styling={elem.styling}
    />
  ));

  return (
    <div style={styling}>
      <Header dispatch={dispatch} />
      {tasks}
    </div>
  );
};

export default App;
