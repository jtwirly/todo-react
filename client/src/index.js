import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList.js";

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.render(<TodoList />, document.getElementById("root"));

// allows for live updating
module.hot.accept();
