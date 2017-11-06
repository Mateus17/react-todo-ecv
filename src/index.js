import React from "react";
import ReactDOM from "react-dom";
import TodoListFiltered from "./App";
import registerServiceWorker from "./registerServiceWorker";

const FILTERS = ["Tous", "Terminé", "À faire"];

ReactDOM.render(
  <TodoListFiltered filters={FILTERS} />,
  document.getElementById("root")
);
registerServiceWorker();
