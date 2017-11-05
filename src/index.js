import React from "react";
import ReactDOM from "react-dom";
import TodoListFiltered from "./App";
import registerServiceWorker from "./registerServiceWorker";

let ITEMS = [
  {
    id: 0,
    title: "Learn Javascript",
    complete: true
  },
  {
    id: 1,
    title: "Learn ES6",
    complete: true
  },
  {
    id: 2,
    title: "Learn React",
    complete: true
  },
  {
    id: 3,
    title: "Learn React Native",
    complete: false
  },
  {
    id: 4,
    title: "Learn Nodejs",
    complete: false
  },
  {
    id: 5,
    title: "Learn by doing",
    complete: false
  },
  {
    id: 6,
    title: "Learn to teach",
    complete: false
  },
  {
    id: 7,
    title: "Teach to learn",
    complete: false
  }
];

const FILTERS = ["Tous", "Terminé", "À faire"];

ReactDOM.render(
  <TodoListFiltered items={ITEMS} filters={FILTERS} />,
  document.getElementById("root")
);
registerServiceWorker();
