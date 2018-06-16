import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import TodoList from "./todolist.js";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <TodoList />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
