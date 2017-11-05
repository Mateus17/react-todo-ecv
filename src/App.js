import React, { Component } from "react";
import "./App.css";

function TodoList(props) {
  const rows = [];
  props.items.forEach(item => {
    rows.push(
      <ItemList keyId={item.id} title={item.title} complete={item.complete} />
    );
  });

  return <ul>{rows}</ul>;
}

class AddItemListForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" value="" />
        <input type="Submit" value="Ajouter" />
      </form>
    );
  }
}

class FiltersForm extends React.Component {
  render() {
    return (
      <div>
        <button>Tous</button>
        <button>Terminé</button>
        <button>À faire</button>
      </div>
    );
  }
}

function ItemList(props) {
  if (props.complete) {
    return (
      <li key={props.keyId} className="Item-Completed">
        {props.title}
      </li>
    );
  }
  return <li key={props.keyId}>{props.title}</li>;
}

class TodoListFiltered extends Component {
  render() {
    return (
      <div className="Todo-List-Filtered">
        <AddItemListForm />
        <TodoList items={this.props.items} />
        <FiltersForm />
      </div>
    );
  }
}

export default TodoListFiltered;
