import React, { Component } from "react";
import Icon from '../../assets/icon.index'
import "./search-bar.styles.css";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text);
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search">
          <input
            className="search-input"
            type="text"
            name="text"
            placeholder="Search..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <button
            type="submit"
            className="search-btn"
          >
          <Icon name="search" width={10} fill={"#ffffff"}/>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
