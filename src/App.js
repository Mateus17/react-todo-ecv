import React, { Component } from "react";
import "./App.css";

function TodoList(props) {
  const rows = [];
  props.items.forEach(currentItem => {
    rows.push(<ItemList key={currentItem.id.toString()} item={currentItem} />);
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

const FILTERS = ["Tous", "Terminé", "À faire"];

class InputFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.filters[0]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ active: e.target.value });
  }

  render() {
    const filters = this.props.filters;
    const buttonFilter = filters.map(filter => (
      <label key={filter}>
        <input
          type="radio"
          value={filter}
          name="todolistfilter"
          className={this.state.active === filter ? "Filter-Active" : ""}
          checked={this.state.active === filter}
          onChange={this.handleChange}
        />
        {filter}
      </label>
    ));

    return <div>{buttonFilter}</div>;
  }
}

class FiltersForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <form>
        <InputFilters filters={FILTERS} />
      </form>
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
    this.setState({
      complete: true
    });
  }

  render() {
    if (this.state.complete) {
      return <li className="Item-Completed">{this.props.item.title}</li>;
    }
    return <li onClick={this.handleClick}>{this.props.item.title}</li>;
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
