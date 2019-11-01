import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput className="col-sm-6" />
          <TodoList className="col-sm-6" />
        </div>
      </div>
    </div>
  );
}

export default App;
