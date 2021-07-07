import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Icon from '../../assets/icon.index'
import "./search-bar.styles.css";

export const SearchBar = ({ placeholder, handleChange }) => (
  <div className='header'>
    <div className='search'>
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Link
        className="search-btn"
        to='/signin'
      >
        <Icon name="search" width={10} fill={"#ccc"}/>
      </Link>
    </div>
  </div>
)

export default SearchBar;
// export default Search;
