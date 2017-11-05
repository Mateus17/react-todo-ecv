import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoListFiltered from "./App";
import registerServiceWorker from "./registerServiceWorker";

const ITEMS = [
  {
    id: 1,
    title: "Learn Javascript",
    complete: true
  },
  {
    id: 2,
    title: "Learn ES6",
    complete: true
  },
  {
    id: 3,
    title: "Learn React",
    complete: true
  },
  {
    id: 4,
    title: "Learn React Native",
    complete: false
  },
  {
    id: 5,
    title: "Learn Nodejs",
    complete: false
  },
  {
    id: 6,
    title: "Learn by doing",
    complete: false
  },
  {
    id: 7,
    title: "Learn to teach",
    complete: false
  },
  {
    id: 8,
    title: "Teach to learn",
    complete: false
  }
];

ReactDOM.render(
  <TodoListFiltered items={ITEMS} />,
  document.getElementById("root")
);
registerServiceWorker();
