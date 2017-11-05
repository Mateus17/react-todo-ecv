import React, { Component } from "react";
import "./App.css";

function TodoList(props) {
  const rows = [];
  props.items.forEach(currentItem => {
    rows.push(<ItemList item={currentItem} />);
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

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: props.item.complete
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      complete: true
    }));
  }

  render() {
    if (this.state.complete) {
      return (
        <li key={this.props.item.keyId} className="Item-Completed">
          {this.props.item.title}
        </li>
      );
    }
    return (
      <li key={this.props.item.keyId} onClick={this.handleClick}>
        {this.props.item.title}
      </li>
    );
  }
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
