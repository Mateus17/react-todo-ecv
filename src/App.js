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
    this.state = {
      allItems: this.props.items
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //console.log(this.state.allItems[e].setState({ complete: true }));
    //this.allItems[e.target.id].setState({ complete: true });
    console.log(e);
  }

  render() {
    const isDisplayed = this.props.isDisplayed;
    const rowsCompleted = [];
    const rowsTodo = [];
    const rows = [];

    this.props.items.forEach(currentItem => {
      if (currentItem.complete) {
        rowsCompleted.push(ItemListCheckStatus(currentItem, this.handleChange));
      } else {
        rowsTodo.push(ItemListCheckStatus(currentItem, this.handleChange));
      }
    });

    if (isDisplayed === "Tous") {
      rows.push(rowsCompleted, this.handleChange);
      rows.push(rowsTodo, this.handleChange);
    }

    if (isDisplayed === "Terminé") {
      rows.push(rowsCompleted, this.handleChange);
    }

    if (isDisplayed === "À faire") {
      rows.push(rowsTodo);
    }

    return <ul>{rows}</ul>;
  }
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
      <label key={filter}>
        <input
          type="radio"
          value={filter}
          name="todolistfilter"
          className={
            this.props.filterActivated === filter ? "Filter-Active" : ""
          }
          checked={this.props.filterActivated === filter}
          onChange={this.props.onFilterChange}
        />
        {filter}
      </label>
    ));

    return <form>{buttonFilter}</form>;
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
    return <li onClick={this.handleClick}>{this.props.item.title}</li>;
  }
}

class TodoListFiltered extends Component {
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
    return (
      <div className="Todo-List-Filtered">
        <AddItemListForm />
        <TodoList items={this.props.items} isDisplayed={this.state.active} />
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
