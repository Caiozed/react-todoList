import React, { Component } from "react";
import "./styles.css";

class TodoList extends Component {
  state = { names: [] };

  addItem = event => {
    event.preventDefault();
    let names = this.state.names;
    names.push(this.inputNode.value);
    this.setState({ names: names });
  };

  removeItem = index => {
    let { names } = this.state;
    names.splice(index, 1);
    this.setState({ names: names });
  };

  render() {
    const { names } = this.state;
    return (
      <div className="row">
        <div className="col s12 ">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Todo List</span>
              <p>Simple todo list using react.</p>
            </div>
            <div className="card-action">
              <form onSubmit={this.addItem}>
                <div className="row">
                  <div className="input-field col s9">
                    <i className="fa fa-list prefix" />
                    <input
                      id="item"
                      type="text"
                      className="validate"
                      ref={node => {
                        this.inputNode = node;
                      }}
                    />
                    <label htmlFor="item">Item name</label>
                  </div>
                  <div className="input-field col s2">
                    <button
                      className="right waves-effect waves-light btn"
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <ul className="collection">
                  {names.map((name, index) => {
                    return (
                      <div>
                        <li className="collection-item" key={index}>
                          <div>
                            {name}
                            <a href="#!" onClick={() => this.removeItem(index)}>
                              <i className="right fa fa-minus" />
                            </a>
                          </div>
                        </li>
                        <div />
                      </div>
                    );
                  })}
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
