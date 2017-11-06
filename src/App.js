import React, { Component } from "react";
import "./App.css";

function ItemListCheckStatus(currentItem, eventChange) {
  return (
    <ItemList
      key={currentItem.id.toString()}
      item={currentItem}
      onChangeStatusComplete={eventChange}
    />
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeStatusComplete(e);
  }

  render() {
    const isDisplayed = this.props.isDisplayed;
    const rows = [];

    this.props.items.forEach(currentItem => {
      if (isDisplayed === "Tous") {
        rows.push(ItemListCheckStatus(currentItem, this.handleChange));
      } else if (isDisplayed === "Terminé") {
        if (currentItem.complete) {
          rows.push(ItemListCheckStatus(currentItem, this.handleChange));
        }
      } else if (isDisplayed === "À faire") {
        if (!currentItem.complete) {
          rows.push(ItemListCheckStatus(currentItem, this.handleChange));
        }
      }
    });

    return <ul>{rows}</ul>;
  }
}

class AddItemListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Ajouter" />
      </form>
    );
  }
}

class FiltersForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    const filters = this.props.filters;

    const buttonFilter = filters.map(filter => (
      <label
        key={filter}
        className={
          this.props.filterActivated === filter ? (
            "Filter-Label Filter-Active"
          ) : (
            "Filter-Label"
          )
        }
      >
        <input
          type="radio"
          value={filter}
          name="todolistfilter"
          checked={this.props.filterActivated === filter}
          onChange={this.props.onFilterChange}
          className="Hidden-Everywhere"
        />
        {filter}
      </label>
    ));

    return <form>Filtres : {buttonFilter}</form>;
  }
}

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: props.item.complete,
      id: props.item.id
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      complete: true
    });
    this.props.onChangeStatusComplete(this.state.id);
  }

  render() {
    if (this.state.complete) {
      return <li className="Item-Completed">{this.props.item.title}</li>;
    }
    return (
      <li className="Item-Todo" onClick={this.handleClick}>
        {this.props.item.title}
      </li>
    );
  }
}

class TodoListFiltered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.filters[0],
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  handleChange(e) {
    this.setState({ active: e.target.value });
  }

  handleSubmit(value) {
    const newItem = {
      id: this.state.items.length,
      title: value,
      complete: false
    };

    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  onChangeStatus(e) {
    this.setState(prevState => {
      return (prevState.items[e].complete = true);
    });
  }

  componentDidMount() {
    const ITEMS = require("./data/todos.json");

    this.setState({
      items: ITEMS
    });
  }

  render() {
    return (
      <div className="Todo-List-Filtered">
        <AddItemListForm
          onFormSubmit={this.handleSubmit}
          items={this.state.items}
        />
        <TodoList
          items={this.state.items}
          isDisplayed={this.state.active}
          onChangeStatusComplete={this.onChangeStatus}
        />
        <FiltersForm
          filters={this.props.filters}
          onFilterChange={this.handleChange}
          filterActivated={this.state.active}
        />
      </div>
    );
  }
}

export default TodoListFiltered;
