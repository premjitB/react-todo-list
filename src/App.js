import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    console.log("handle submit");
    e.preventDefault();
    console.log(this.state);
    const newItem = {
      id: this.state.id,
      item: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        id: uuid(),
        editItem: false,
        item: ""
      },
      () => console.log(this.state)
    );
  };
  clearList = () => {
    console.log("clear list");
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
